const sql = require("../../connection/db.js");

// constructor
const Department = function(department) {
  this.name = department.name;
  this.description = department.description;
};

Department.create = (newDepartment, result) => {
  sql.query("INSERT INTO department SET ?", newDepartment, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created department: ", { department_Id: res.insertId, ...newDepartment });
    result(null, { department_Id: res.insertId, ...newDepartment });
  });
};

Department.findById = (department_Id, result) => {
  sql.query(`SELECT * FROM department WHERE department_Id = ${department_Id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found department: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Department with the department_Id
    result({ kind: "not_found" }, null);
  });
};

Department.getAll = result => {
  sql.query("SELECT * FROM department", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("departments: ", res);
    result(null, res);
  });
};

Department.updateById = (department_Id, department, result) => {
  sql.query(
    "UPDATE department SET name = ?, description = ? WHERE department_Id = ?",
    [department.name, department.description, department_Id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Department with the department_Id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated department: ", { department_Id: department_Id, ...department });
      result(null, { department_Id: department_Id, ...department });
    }
  );
};

Department.remove = (department_Id, result) => {
  sql.query("DELETE FROM department WHERE department_Id = ?", department_Id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Department with the department_Id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted department with department_Id: ", department_Id);
    result(null, res);
  });
};

Department.removeAll = result => {
  sql.query("DELETE FROM department", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} departments`);
    result(null, res);
  });
};

module.exports = Department;