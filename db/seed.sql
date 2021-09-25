-- DEPARTMENT
INSERT INTO
  department (name)
VALUES
  ("Sales");
INSERT INTO
  department (name)
VALUES
  ("Marketing");
INSERT INTO
  department (name)
VALUES
  ("Accounting");
INSERT INTO
  department (name)
VALUES
  ("Legal");
--
  -- ROLE
INSERT INTO
  role (title, salary, department_id)
VALUES
  ("Sales Representative", 90000, 1);
INSERT INTO
  role (title, salary, department_id)
VALUES
  ("Assistant to the Regional Manager", 125000, 1);
INSERT INTO
  role (title, salary, department_id)
VALUES
  ("Branch Manager", 100000, 2);
INSERT INTO
  role (title, salary, department_id)
VALUES
  ("Marketing Manager", 122000, 2);
INSERT INTO
  role (title, salary, department_id)
VALUES
  ("Accountant", 95000, 3);
INSERT INTO
  role (title, salary, department_id)
VALUES
  ("Head Accountant", 145000, 3);
INSERT INTO
  role (title, salary, department_id)
VALUES
  ("Legal Correspondent", 500000, 4);
INSERT INTO
  role (title, salary, department_id)
VALUES
  ("CEO", 750000, 4);
--
  -- ROLE
INSERT INTO
  employees (first_name, last_name, role_id)
VALUES
  ("Jim", "Halpart", 1);
INSERT INTO
  employees (first_name, last_name, role_id)
VALUES
  ("Andy", "Bernard", 1);
INSERT INTO
  employees (first_name, last_name, role_id)
VALUES
  ("Oscar", "Martinez", 5);
INSERT INTO
  employees (first_name, last_name, role_id)
VALUES
  ("Dwight", "Schrute", 2);
INSERT INTO
  employees (first_name, last_name, role_id)
VALUES
  ("Chris", "Wallace", 8);
INSERT INTO
  employees (first_name, last_name, role_id)
VALUES
  ("Michael", "Scott", 3);