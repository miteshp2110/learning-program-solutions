CREATE OR REPLACE PROCEDURE TransferFunds(
  from_account_id IN NUMBER,
  to_account_id IN NUMBER,
  amount IN NUMBER
) IS
  v_balance NUMBER;
BEGIN

SELECT Balance INTO v_balance FROM Accounts WHERE AccountID = from_account_id;

IF v_balance >= amount THEN
UPDATE Accounts
SET Balance = Balance - amount
WHERE AccountID = from_account_id;

UPDATE Accounts
SET Balance = Balance + amount
WHERE AccountID = to_account_id;

COMMIT;
ELSE
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account');
END IF;
END;
/
