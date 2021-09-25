const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

// This creates the connection to the database.
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "Admin123!",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);

// This sends the prompts to the user
inquirer;
const init = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Delete an employee",
          "Update an employee role",
          "Update a department ID",
          "Quit",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.action) {
        case "View all departments":
          // done
          viewAllDepartments();
          break;
        case "View all roles":
          // done
          viewAllRoles();
          break;
        case "View all employees":
          // done
          viewAllEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Delete an employee":
          // done
          deleteEmployee();
          break;
        case "Update an employee role":
          updateEmployeeRole();
          break;
        case "Update a department ID":
          // done
          updateDepartmentID();
          break;
        case "Quit":
          console.log("Exiting Employee Tracker.");
          break;
      }
    });
};

// updateDepartmentID

init();

const viewAllDepartments = () => {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    init();
  });
};

const viewAllRoles = () => {
  db.query("SELECT * FROM role", function (err, results) {
    err ? console.log(err) : console.table(results);
    init();
  });
};

viewAllEmployees = () => {
  db.query(
    "SELECT employees.id, employees.first_name AS 'First Name', employees.last_name AS 'Last Name', department.name AS Department, role.title AS 'Title', role.salary AS 'salary', employees.manager_id AS Manager FROM employees LEFT JOIN role ON employees.role_id = role.id LEFT JOIN department ON role.department_id = department.id",
    function (err, results) {
      if (err) {
        console.error(err);
      }
      console.table(results);
      init();
    }
  );
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "new_department",
        message: "Insert the NEW department name you want to add: ",
      },
    ])
    .then((answer) => {
      db.query(
        `INSERT INTO
        department (name)
      VALUES
        ("${answer.new_department}");`,
        function (err, results) {
          console.table(results);
          init();
        }
      );
    });
};

// const updateEmployeeRole = () => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "role",
//         message: "Insert the department name you are updating:  ",
//       },
//       {
//         type: "number",
//         name: "new_department_id",
//         message: "Insert the NEW department number you want to add: ",
//       },
//     ])
//     .then((answer) => {
//       db.query(
//         `UPDATE department SET id = ${answer.new_department_id} WHERE name = "${answer.department_name}";`,
//         function (err, results) {
//           console.log("Department ID UPDATED");
//           init();
//         }
//       );
//     });
// };

const updateDepartmentID = () => {
  inquirer
    .prompt([
      {
        type: "number",
        name: "new_department_id",
        message: "Insert the NEW department number you want to add: ",
      },
      {
        type: "input",
        name: "department_name",
        message: "Insert the department name you are updating:  ",
      },
    ])
    .then((answer) => {
      db.query(
        `UPDATE department SET id = ${answer.new_department_id} WHERE name = "${answer.department_name}";`,
        function (err, results) {
          console.log("Department ID UPDATED");
          init();
        }
      );
    });
};

const deleteEmployee = () => {
  console.log("hello!");
  inquirer
    .prompt([
      {
        type: "number",
        name: "id_number",
        message:
          "Insert the employee ID which corresponds to the employee you want deleted from the records: ",
      },
    ])
    .then((answer) => {
      db.query(
        `DELETE FROM employees WHERE id = ${answer.id_number}`,
        function (err, results) {
          console.table(results);
          init();
        }
      );
    });
};
