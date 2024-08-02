INSERT INTO Users (id, Name, Email, Phone, Password, CreatedAt, UpdatedAt) VALUES
(1, 'Alice Johnson', 'alice@example.com', '1234567890', 'password1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Bob Smith', 'bob@example.com', '1234567891', 'password2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'Charlie Brown', 'charlie@example.com', '1234567892', 'password3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(4, 'Diana Prince', 'diana@example.com', '1234567893', 'password4', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(5, 'Eve Adams', 'eve@example.com', '1234567894', 'password5', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(6, 'Frank Martin', 'frank@example.com', '1234567895', 'password6', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(7, 'Grace Lee', 'grace@example.com', '1234567896', 'password7', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(8, 'Hank Green', 'hank@example.com', '1234567897', 'password8', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(9, 'Ivy Clarke', 'ivy@example.com', '1234567898', 'password9', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(10, 'Jack White', 'jack@example.com', '1234567899', 'password10', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Caravans (Model, Make, Year, Capacity, Description, PricePerDay, Available, CreatedAt, UpdatedAt) VALUES
('Model A', 'Make X', 2020, 4, 'A spacious 4-person caravan.', 100.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Model B', 'Make Y', 2021, 6, 'A luxurious 6-person caravan.', 150.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Model C', 'Make Z', 2019, 2, 'A compact 2-person caravan.', 75.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Model D', 'Make X', 2018, 4, 'A well-equipped 4-person caravan.', 90.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Model E', 'Make Y', 2022, 5, 'A modern 5-person caravan.', 120.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Model F', 'Make Z', 2017, 3, 'A comfortable 3-person caravan.', 80.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Model G', 'Make X', 2021, 4, 'A stylish 4-person caravan.', 110.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Model H', 'Make Y', 2019, 6, 'A family-friendly 6-person caravan.', 140.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Model I', 'Make Z', 2020, 2, 'A cozy 2-person caravan.', 70.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Model J', 'Make X', 2018, 4, 'An affordable 4-person caravan.', 85.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Locations (LocationName, Address, City, State, PostalCode, CreatedAt, UpdatedAt) VALUES
('Mountain Base', '123 Mountain Road', 'Alpine', 'Mountain State', '12345', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Seaside Avenue', '456 Seaside Lane', 'Beach City', 'Ocean State', '67890', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Forest Path', '789 Forest Trail', 'Woodland', 'Forest State', '11223', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('City Center', '101 City Blvd', 'Metropolis', 'Urban State', '33445', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Desert Edge', '202 Desert Road', 'Sandy Town', 'Desert State', '55667', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Mountain View', '303 Mountain Pass', 'Alpine', 'Mountain State', '77889', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Beach Front', '404 Beach Drive', 'Shoreline', 'Coastal State', '99001', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Lake Side', '505 Lake Road', 'Lakeside', 'Water State', '22334', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('River Bend', '606 River Street', 'Rivertown', 'River State', '44556', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Countryside', '707 Country Road', 'Village', 'Rural State', '66778', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Activities (ActivityType, Name, Description, LocationID, Price, Available, CreatedAt, UpdatedAt) VALUES
('Hiking', 'Mountain Trail', 'A challenging mountain trail.', 21, 50.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Hotel', 'Seaside Resort', 'A luxurious seaside resort.', 22, 200.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Hiking', 'Forest Walk', 'A peaceful walk through the forest.', 23, 30.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Hotel', 'City Hotel', 'A comfortable city hotel.', 24, 150.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Hiking', 'Desert Trek', 'An adventurous desert trek.', 25, 70.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Hotel', 'Mountain Lodge', 'A cozy mountain lodge.', 26, 180.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Hiking', 'Beach Hike', 'A scenic hike along the beach.', 27, 40.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Hotel', 'Lake House', 'A beautiful lake house.', 28, 220.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Hiking', 'River Path', 'A serene walk along the river.', 29, 35.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Hotel', 'Countryside Inn', 'A charming countryside inn.', 30, 130.00, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Bookings (UserID, BookingType, StartDate, EndDate, TotalAmount, BookingStatus, CreatedAt, UpdatedAt) VALUES
(1, 'Caravan', '2024-08-01', '2024-08-07', 700.00, 'Confirmed', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Activity', '2024-08-10', '2024-08-15', 250.00, 'Pending', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'Caravan', '2024-08-05', '2024-08-10', 450.00, 'Cancelled', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(4, 'Activity', '2024-08-12', '2024-08-18', 300.00, 'Confirmed', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(5, 'Caravan', '2024-08-20', '2024-08-25', 600.00, 'Pending', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(6, 'Activity', '2024-08-15', '2024-08-20', 350.00, 'Confirmed', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(7, 'Caravan', '2024-08-08', '2024-08-14', 750.00, 'Confirmed', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(8, 'Activity', '2024-08-18', '2024-08-22', 270.00, 'Cancelled', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(9, 'Caravan', '2024-08-22', '2024-08-28', 500.00, 'Pending', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(10, 'Activity', '2024-08-25', '2024-08-30', 400.00, 'Confirmed', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO CaravanBookings (BookingID, CaravanID) VALUES
(11, 31),
(13, 32),
(15, 33),
(17, 34),
(19, 35);

INSERT INTO ActivityBookings (BookingID, ActivityID) VALUES
(12, 51),
(14, 52),
(16, 53),
(18, 54),
(20, 55);

INSERT INTO Payments (BookingID, PaymentAmount, PaymentDate, PaymentMethod, PaymentStatus, CreatedAt, UpdatedAt) VALUES
(11, 700.00, CURRENT_TIMESTAMP, 'Credit Card', 'Completed', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(12, 250.00, CURRENT_TIMESTAMP, 'PayPal', 'Pending', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(13, 450.00, CURRENT_TIMESTAMP, 'Credit Card', 'Refunded', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(14, 300.00, CURRENT_TIMESTAMP, 'Bank Transfer', 'Completed', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(15, 600.00, CURRENT_TIMESTAMP, 'Credit Card', 'Pending', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(16, 350.00, CURRENT_TIMESTAMP, 'PayPal', 'Completed', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(17, 750.00, CURRENT_TIMESTAMP, 'Credit Card', 'Completed', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(18, 270.00, CURRENT_TIMESTAMP, 'Bank Transfer', 'Refunded', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(19, 500.00, CURRENT_TIMESTAMP, 'Credit Card', 'Pending', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(20, 400.00, CURRENT_TIMESTAMP, 'PayPal', 'Completed', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
