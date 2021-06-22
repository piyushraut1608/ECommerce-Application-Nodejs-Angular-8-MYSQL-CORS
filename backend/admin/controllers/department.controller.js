const Department = require("../models/department.model.js");

// Create and Save a new Department
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Department
  const department = new Department({
    name: req.body.name,
    description: req.body.description
  });

  // Save Department in the database
  Department.create(department, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Department."
      });
    else res.send(data);
  });
};

// Retrieve all Departments from the database.
exports.findAll = (req, res) => {
  Department.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving departments."
      });
    else res.send(data);
  });
};

// Find a single Department with a department_Id
exports.findOne = (req, res) => {
  Department.findById(req.params.department_Id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Department with id ${req.params.department_Id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Department with id " + req.params.department_Id
        });
      }
    } else res.send(data);
  });
};

// Update a Department identified by the department_Id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Department.updateById(
    req.params.department_Id,
    new Department(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Department with id ${req.params.department_Id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Department with id " + req.params.department_Id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Department with the specified department_Id in the request
exports.delete = (req, res) => {
  Department.remove(req.params.department_Id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Department with id ${req.params.department_Id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Department with id " + req.params.department_Id
        });
      }
    } else res.send({ message: `Department was deleted successfully!` });
  });
};

// Delete all Departments from the database.
exports.deleteAll = (req, res) => {
  Department.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all departments."
      });
    else res.send({ message: `All Departments were deleted successfully!` });
  });
};