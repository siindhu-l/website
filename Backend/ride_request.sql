CREATE TABLE `ride_requests` (
  `id` int(11) NOT NULL,
  `pickup_address` varchar(255) NOT NULL,
  `destination_address` varchar(255) NOT NULL,
  `estimated_fare` decimal(10,2) NOT NULL,
  `status` varchar(50) DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
);


ALTER TABLE `ride_requests`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `ride_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;