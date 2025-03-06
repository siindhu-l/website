CREATE DATABASE UberFareEstimator;

USE UberFareEstimator;

CREATE TABLE RideDetails (
    ride_id INT AUTO_INCREMENT PRIMARY KEY,
    pickup_location VARCHAR(255) NOT NULL,
    dropoff_location VARCHAR(255) NOT NULL,
    ride_type VARCHAR(50) NOT NULL,
    fare_estimate DECIMAL(10, 2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
