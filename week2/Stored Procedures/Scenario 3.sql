## Create the Accounts Table
CREATE TABLE Accounts (
  AccountID NUMBER PRIMARY KEY,
  CustomerName VARCHAR2(50),
  Balance NUMBER(10, 2)
);


## Insert Sample Data
INSERT INTO Accounts VALUES (1, 'Alice', 10000);
INSERT INTO Accounts VALUES (2, 'Bob', 5000);
INSERT INTO Accounts VALUES (3, 'Charlie', 3000);

COMMIT;

##  view the table before Procedure
SELECT * FROM Accounts;
![before_procedure](./before_procedure_SC3.png)

## Create the TransferFunds Procedure

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


##  Run the Procedure

BEGIN
  TransferFunds(1, 2, 2000);
END;
/

## View Updated Balances

SELECT * FROM Accounts;
![after_procedure](./after_procedure_SC3.png)

##DBMS_Output
![DBMS_Output](./DBMS_Output_SC3.png)
