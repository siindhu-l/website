CREATE TABLE `rides` (
  `id` int(11) NOT NULL,
  `pickup_location` varchar(255) NOT NULL,
  `dropoff_location` varchar(255) NOT NULL,
  `ride_date` date NOT NULL,
  `ride_time` time NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) 


ALTER TABLE `rides`
  ADD PRIMARY KEY (`id`);


  ALTER TABLE `rides`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;