# Exercise 3: Stored Procedures – PL/SQL

This exercise contains three stored procedure scenarios commonly found in banking systems. Each scenario demonstrates key PL/SQL concepts like parameter passing, conditional logic, and data manipulation.

---

##  Scenario 1: Process Monthly Interest for Savings Accounts

###  Objective:
Apply a 1% interest rate to all savings account balances monthly.

###  Table: `SavingsAccounts`

## sql
CREATE TABLE SavingsAccounts (
  AccountID NUMBER PRIMARY KEY,
  CustomerName VARCHAR2(50),
  Balance NUMBER(10, 2)
);

## Sample Data:
INSERT INTO SavingsAccounts VALUES (1, 'Alice', 5000);
INSERT INTO SavingsAccounts VALUES (2, 'Bob', 7500);
INSERT INTO SavingsAccounts VALUES (3, 'Charlie', 3000);

COMMIT;

## Stored Procedure:
REATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  UPDATE SavingsAccounts
  SET Balance = Balance * 1.01;

  DBMS_OUTPUT.PUT_LINE('Monthly interest applied to all savings accounts.');
END;
/

## Execution:
BEGIN
  ProcessMonthlyInterest;
END;
/



## Scenario 2: Employee Bonus Update

## Objective:

## Table: Employees
CREATE TABLE Employees (
  EmployeeID NUMBER PRIMARY KEY,
  Name VARCHAR2(50),
  Department VARCHAR2(50),
  Salary NUMBER(10, 2)
);
## Sample Data:
INSERT INTO Employees VALUES (1, 'John', 'HR', 4000);
INSERT INTO Employees VALUES (2, 'Emma', 'IT', 5000);
INSERT INTO Employees VALUES (3, 'Sam', 'IT', 5500);
INSERT INTO Employees VALUES (4, 'Lily', 'Finance', 6000);

COMMIT;

## Stored Procedure:

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

/

## Execution:
BEGIN
  UpdateEmployeeBonus('IT', 10);
END;
/

## Scenario 3: Transfer Funds Between Accounts
## Objective:
Transfer funds from one account to another with balance validation.

##  Table: Accounts
CREATE TABLE Accounts (
  AccountID NUMBER PRIMARY KEY,
  CustomerName VARCHAR2(50),
  Balance NUMBER(10, 2)
);

## Sample Data:

INSERT INTO Accounts VALUES (1, 'Alice', 10000);
INSERT INTO Accounts VALUES (2, 'Bob', 5000);
INSERT INTO Accounts VALUES (3, 'Charlie', 3000);

COMMIT;

## Stored Procedure:

CREATE OR REPLACE PROCEDURE TransferFunds (
  p_from_account IN NUMBER,
  p_to_account IN NUMBER,
  p_amount IN NUMBER
) AS
  v_from_balance NUMBER;
BEGIN
  -- Check source account balance
  SELECT Balance INTO v_from_balance
  FROM Accounts
  WHERE AccountID = p_from_account;

  IF v_from_balance < p_amount THEN
    DBMS_OUTPUT.PUT_LINE('Insufficient balance in source account.');
  ELSE
    -- Deduct from source account
    UPDATE Accounts
    SET Balance = Balance - p_amount
    WHERE AccountID = p_from_account;

    -- Add to destination account
    UPDATE Accounts
    SET Balance = Balance + p_amount
    WHERE AccountID = p_to_account;

    DBMS_OUTPUT.PUT_LINE('Transfer successful from account ' || p_from_account ||
                         ' to account ' || p_to_account || ' for amount ' || p_amount);
  END IF;
END;
/


## Execution:

BEGIN
  TransferFunds(1, 2, 2000);
END;
/