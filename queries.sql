-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT ProductName, CategoryName FROM Product JOIN Category ON Product.CategoryId = Category.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT Id, CompanyName FROM Shipper Join OrderInfo on OrderInfo.ShipVia = Shipper.Id WHERE OrderInfo.OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.ProductName, od.Quantity FROM Product as p JOIN OrderDetail as od ON p.Id = od.ProductId WHERE od.OrderId = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
Select DISTINCT od.OrderId, c.CompanyName, e.LastName
FROM OrderInfo as oi JOIN OrderDetail as od ON oi.Id = od.OrderId
JOIN Customer as c ON oi.CustomerId = c.Id
JOIN Employee as e ON oi.EmployeeId = e.Id;
