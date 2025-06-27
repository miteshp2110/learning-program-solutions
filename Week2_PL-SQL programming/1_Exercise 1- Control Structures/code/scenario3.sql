DECLARE
v_due_date Loans.EndDate%TYPE;
BEGIN
FOR loan_rec IN (SELECT l.LoanID, c.Name, l.EndDate
                   FROM Loans l
                   JOIN Customers c ON l.CustomerID = c.CustomerID
                   WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan_rec.LoanID ||
                         ' for ' || loan_rec.Name ||
                         ' is due on ' || TO_CHAR(loan_rec.EndDate, 'YYYY-MM-DD'));
END LOOP;
END;
/
