-- Create a table for storing rides
CREATE TABLE rides (
    ride_id INT AUTO_INCREMENT PRIMARY KEY,
    pickup_location VARCHAR(255),
    destination VARCHAR(255),
    distance DECIMAL(5,2),  -- in miles
    total_fare DECIMAL(10,2),  -- in dollars
    completion_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create a table for storing ratings
CREATE TABLE ratings (
    rating_id INT AUTO_INCREMENT PRIMARY KEY,
    ride_id INT,
    rating INT,  -- Rating value between 1 and 5
    feedback TEXT,
    FOREIGN KEY (ride_id) REFERENCES rides(ride_id) ON DELETE CASCADE
);
