## scenario 1



## Step 1: 
Create the Customers table
CREATE TABLE Customers (
  CustomerID NUMBER PRIMARY KEY,
  Name VARCHAR2(50),
  Age NUMBER,
  LoanInterestRate NUMBER(5,2)
);


## Step 2: Insert data
BEGIN
  INSERT INTO Customers VALUES (1, 'Alice', 65, 8.5);
  INSERT INTO Customers VALUES (2, 'Bob', 45, 9.0);
  INSERT INTO Customers VALUES (3, 'Charlie', 70, 7.8);
  COMMIT;
END;
/
## Verify data is inserted 

SELECT * FROM Customers;

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
## DATABASE (QUERY RESULT)
![DATABASE](./database_SC1.png)


## DBMS_OUTPUT
![DBMS_OUTPUT](./DBMS OUTPUT_SC1.png)
