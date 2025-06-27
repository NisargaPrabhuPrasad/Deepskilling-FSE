
## Add new columns to the existing Customers table:
ALTER TABLE Customers ADD (
  Balance NUMBER,
  IsVIP VARCHAR2(3)
);

## Update the Balance values for existing customers

UPDATE INTO Customers VALUES (1, 'Alice', 65, 8.5, 15000, NULL);
UPDATE Customers VALUES (2, 'Bob', 45, 9.0, 5000, NULL);
UPDATE INTO Customers VALUES (3, 'Charlie', 70, 7.8, 20000, NULL);


COMMIT;

##  PL/SQL block to set IsVIP based on balance

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
## DATABASE (QUERY RESULT)
![DATABASE](./database_SC2.png)


## DBMS_OUTPUT
![DBMS_OUTPUT](./DBMS OUTPUT_SC2.png)

