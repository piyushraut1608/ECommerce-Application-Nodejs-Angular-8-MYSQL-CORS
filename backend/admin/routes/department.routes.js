module.exports = app => {
  const department = require("../controllers/department.controller");

  // Create a new Department
  app.post("/department", department.create);

  // Retrieve all Departments
  app.get("/department", department.findAll);

  // Retrieve a single Department with department_Id
  app.get("/department/:department_Id", department.findOne);

  // Update a Department with department_Id
  app.put("/department/:department_Id", department.update);

  // Delete a Department with department_Id
  app.delete("/department/:department_Id", department.delete);

  // Create a new Department
  app.delete("/department", department.deleteAll);
};