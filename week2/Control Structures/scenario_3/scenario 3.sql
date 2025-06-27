## Scenario 3
## already customer table is existing in scenario2 used the same table
## Create a Loans Table

CREATE TABLE Loans (
  LoanID NUMBER PRIMARY KEY,
  CustomerID NUMBER,
  DueDate DATE
);


## Insert Sample Loan Data
INSERT INTO Loans VALUES (1, 1, SYSDATE + 10);
INSERT INTO Loans VALUES (2, 2, SYSDATE + 40);
INSERT INTO Loans VALUES (3, 3, SYSDATE + 5);

COMMIT;


## PL/SQL Block to Send Reminders
BEGIN
  FOR loan_rec IN (
    SELECT L.LoanID, C.Name, L.DueDate
    FROM Loans L
    JOIN Customers C ON C.CustomerID = L.CustomerID
    WHERE L.DueDate <= SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE(
      'Reminder: Loan ID ' || loan_rec.LoanID ||
      ' for customer ' || loan_rec.Name ||
      ' is due on ' || TO_CHAR(loan_rec.DueDate, 'DD-MON-YYYY')
    );
  END LOOP;
END;
/

## DATABASE (QUERY RESULT)
![DATABASE](./table_loan.png)


## DBMS_OUTPUT
![DBMS_OUTPUT](./DBMS OUTPUT_SC3.png)

