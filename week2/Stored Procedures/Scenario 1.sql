# scenario 1
## Create Table

CREATE TABLE SavingsAccounts (
  AccountID NUMBER PRIMARY KEY,
  CustomerName VARCHAR2(50),
  Balance NUMBER(10, 2)
);

##  Insert Sample Data

INSERT INTO SavingsAccounts VALUES (1, 'Alice', 5000);
INSERT INTO SavingsAccounts VALUES (2, 'Bob', 7500);
INSERT INTO SavingsAccounts VALUES (3, 'Charlie', 3000);

COMMIT;

## view the table before Procedure
SELECT * FROM SavingsAccounts;
![before_procedure](./before_procedure_SC1.png)

## Create the Stored Procedure

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  UPDATE SavingsAccounts
  SET Balance = Balance * 1.01;

  DBMS_OUTPUT.PUT_LINE('Monthly interest applied to all savings accounts.');
END;
/

## Run the Procedure

BEGIN
  ProcessMonthlyInterest;
END;
/

## View Results in the Table
SELECT * FROM SavingsAccounts;
![after_procedure](./after_procedure_SC1.png)


## Results DBMS_OUTPUT
![DBMS_OUTPUT](./DBMS_OUTPUT_SC1.png)
