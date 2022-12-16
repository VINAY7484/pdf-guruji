-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2022 at 06:49 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pdf_guruji`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_scb`
--

CREATE TABLE `tbl_scb` (
  `id` int(200) NOT NULL,
  `email` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_scb`
--

INSERT INTO `tbl_scb` (`id`, `email`) VALUES
(1, 'ca@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_uploadnotes`
--

CREATE TABLE `tbl_uploadnotes` (
  `id` int(200) NOT NULL,
  `name` varchar(600) NOT NULL,
  `subject` varchar(600) NOT NULL,
  `pdf` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_uploadnotes`
--

INSERT INTO `tbl_uploadnotes` (`id`, `name`, `subject`, `pdf`) VALUES
(4, 'unirt 1', 'hindi', 'Santosh CTET.pdf'),
(5, 'vinay kumar', 'english', 'ASHISH HIGH COURT.pdf'),
(6, 'ss dnsvvskjvv', 'fjwlfjds', 'pexels-anamul-rezwan-1216589 (1).jpg'),
(7, 'vinay', 'kumar', 'Santosh CTET.pdf'),
(8, 'ghajgkdls;', 'auisjdgkl', 'ASHISH HIGH COURT.pdf'),
(9, 'gsdfgsdg', 'gsdfgsefg', 'pexels-anamul-rezwan-1216589.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_scb`
--
ALTER TABLE `tbl_scb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_uploadnotes`
--
ALTER TABLE `tbl_uploadnotes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_scb`
--
ALTER TABLE `tbl_scb`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_uploadnotes`
--
ALTER TABLE `tbl_uploadnotes`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
