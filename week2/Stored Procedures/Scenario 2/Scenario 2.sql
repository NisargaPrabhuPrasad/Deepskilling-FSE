# Create Table

CREATE TABLE Employees (
  EmployeeID NUMBER PRIMARY KEY,
  Name VARCHAR2(50),
  Department VARCHAR2(50),
  Salary NUMBER(10, 2)
);

## Insert data into table
INSERT INTO Employees VALUES (1, 'John', 'HR', 4000);
INSERT INTO Employees VALUES (2, 'Emma', 'IT', 5000);
INSERT INTO Employees VALUES (3, 'Sam', 'IT', 5500);
INSERT INTO Employees VALUES (4, 'Lily', 'Finance', 6000);

COMMIT;



## view the table before Procedure
SELECT * FROM Employees;
![before_procedure](./before_procedure_SC2.png)

## Create the Stored Procedure
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  p_department IN VARCHAR2,
  p_bonus_percent IN NUMBER
) AS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * p_bonus_percent / 100)
  WHERE Department = p_department;

  DBMS_OUTPUT.PUT_LINE('Bonus applied to employees in department: ' || p_department);
END;
/

## Run the Procedure
BEGIN
  UpdateEmployeeBonus('IT', 10);
END;
/

## View Updated Salaries
SELECT * FROM Employees;
![After_procedure](./after_procedure_SC2.png)

## Results DBMS_OUTPUT
![DBMS_OUTPUT](./DBMS_OUTPUT_SC2.png)
