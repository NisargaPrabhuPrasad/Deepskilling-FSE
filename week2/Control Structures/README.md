## Scenario 1: Apply Interest Discount for Seniors

Problem:
The bank wants to apply a 1% discount to loan interest rates for customers above 60 years old.

SOLUTION: 

Create the Customers table
CREATE TABLE Customers (
  CustomerID NUMBER PRIMARY KEY,
  Name VARCHAR2(50),
  Age NUMBER,
  LoanInterestRate NUMBER(5,2)
);

BEGIN
  INSERT INTO Customers VALUES (1, 'Alice', 65, 8.5);
  INSERT INTO Customers VALUES (2, 'Bob', 45, 9.0);
  INSERT INTO Customers VALUES (3, 'Charlie', 70, 7.8);
  COMMIT;
END;
/
## PL/SQL
BEGIN
  FOR cust IN (SELECT * FROM Customers) LOOP
    IF cust.Age > 60 THEN
      UPDATE Customers
      SET LoanInterestRate = LoanInterestRate - 1
      WHERE CustomerID = cust.CustomerID;
    END IF;
  END LOOP;

  DBMS_OUTPUT.PUT_LINE('Interest rates updated for customers above age 60.');
END;
/
## Scenario 2: Promote Customers to VIP
Problem:
Mark customers with a balance greater than $10,000 as VIPs.
Solution:

ALTER TABLE Customers ADD (
  Balance NUMBER,
  IsVIP VARCHAR2(3)
);

UPDATE INTO Customers VALUES (1, 'Alice', 65, 8.5, 15000, NULL);
UPDATE Customers VALUES (2, 'Bob', 45, 9.0, 5000, NULL);
UPDATE INTO Customers VALUES (3, 'Charlie', 70, 7.8, 20000, NULL);


COMMIT;

BEGIN
  FOR cust IN (SELECT * FROM Customers) LOOP
    IF cust.Balance >= 10000 THEN
      UPDATE Customers
      SET IsVIP = 'Yes'
      WHERE CustomerID = cust.CustomerID;
    ELSE
      UPDATE Customers
      SET IsVIP = 'No'
      WHERE CustomerID = cust.CustomerID;
    END IF;
  END LOOP;

  DBMS_OUTPUT.PUT_LINE('VIP status updated based on customer balance.');
END;
/
## Scenario 3: Send Loan Due Reminders

Problem:
Send reminders to customers whose loans are due within the next 30 days.

Solution:
CREATE TABLE Loans (
  LoanID NUMBER PRIMARY KEY,
  CustomerID NUMBER,
  DueDate DATE
);

INSERT INTO Loans VALUES (1, 1, SYSDATE + 10);
INSERT INTO Loans VALUES (2, 2, SYSDATE + 40);
INSERT INTO Loans VALUES (3, 3, SYSDATE + 5);
COMMIT;

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