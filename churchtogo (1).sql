-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 07, 2017 at 08:48 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `churchtogo`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_baptismalevent`
--

CREATE TABLE IF NOT EXISTS `tbl_baptismalevent` (
`int_baptismalid` int(11) NOT NULL,
  `int_eventid` int(11) NOT NULL,
  `varchar_childsbirthplace` varchar(70) NOT NULL,
  `varchar_parentmarriageaddress` varchar(70) NOT NULL,
  `varchar_motherlastname` varchar(45) NOT NULL,
  `varchar_motherfirstname` varchar(45) NOT NULL,
  `varchar_mothermiddlename` varchar(45) DEFAULT NULL,
  `varchar_motherbirthplace` varchar(45) NOT NULL,
  `varchar_fatherlastname` varchar(45) NOT NULL,
  `varchar_fatherfirstname` varchar(45) NOT NULL,
  `varchar_fathermiddlename` varchar(45) DEFAULT NULL,
  `varchar_fatherbirthplace` varchar(70) NOT NULL,
  `varchar_baptismalcontact` varchar(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=505 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_baptismalevent`
--

INSERT INTO `tbl_baptismalevent` (`int_baptismalid`, `int_eventid`, `varchar_childsbirthplace`, `varchar_parentmarriageaddress`, `varchar_motherlastname`, `varchar_motherfirstname`, `varchar_mothermiddlename`, `varchar_motherbirthplace`, `varchar_fatherlastname`, `varchar_fatherfirstname`, `varchar_fathermiddlename`, `varchar_fatherbirthplace`, `varchar_baptismalcontact`) VALUES
(1, 19, '', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', '099999'),
(2, 20, '', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q'),
(3, 37, '', 'q', 'u', 'u', 'u', 'u', 'u', 'u', 'q', 'q', 'q'),
(4, 38, '', 't', 't', 'tt', 't', 't', 't', 't', 't', 't', '09'),
(5, 39, '', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', '099999'),
(6, 40, '', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'),
(7, 41, '', 'o', 'oo', 'o', 'o', 'oo', 'o', 'o', 'o', 'oo', 'o'),
(8, 42, '', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'),
(502, 222, 'manila', 'manila', 'a', 'a', 'a', 'manila', 'b', 'b', 'b', 'manila', '9'),
(503, 43, '', 'l', 'l', 'l', 'll', 'l', 'l', 'l', 'l', 'l', 'l'),
(504, 44, '', 'p', 'p', 'p', 'p', 'pp', 'p', 'p', 'p', 'p', 'p');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_event`
--

CREATE TABLE IF NOT EXISTS `tbl_event` (
`int_eventid` int(11) NOT NULL,
  `int_guestid` int(11) NOT NULL,
  `date_schedule` date NOT NULL,
  `date_birthday` date NOT NULL,
  `varchar_address` varchar(70) NOT NULL,
  `char_event` char(15) NOT NULL,
  `char_relation` char(20) NOT NULL,
  `varchar_lastname` varchar(45) NOT NULL,
  `varchar_firstname` varchar(45) NOT NULL,
  `varchar_middlename` varchar(45) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_event`
--

INSERT INTO `tbl_event` (`int_eventid`, `int_guestid`, `date_schedule`, `date_birthday`, `varchar_address`, `char_event`, `char_relation`, `varchar_lastname`, `varchar_firstname`, `varchar_middlename`) VALUES
(25, 103, '2017-11-10', '1996-05-04', 'Tokyo', 'Annointment', 'Spouse', 'Kudo', 'Shinichi', 'Edogawa'),
(26, 104, '0000-00-00', '2017-01-01', 'dun', 'Funeral Mass', 'undefined', 'dora', 'mae', 'yoe'),
(27, 104, '0000-00-00', '2018-10-10', 'dun', 'Funeral Mass', 'undefined', 'Eda', 'ido', 'o'),
(28, 103, '0000-00-00', '0000-00-00', '', 'Funeral Mass', 'undefined', 'Bru', 'Brother', ''),
(29, 103, '2017-10-10', '1996-05-04', 'Tokyo', 'Annointment', 'Spouse', 'Kudo', 'Shinichi', 'Edogawa'),
(30, 103, '2017-10-10', '1996-05-04', 'Tokyo', 'Annointment', 'Parent', 'Kudo', 'Shinichi', 'Edogawa'),
(31, 103, '2017-09-09', '2017-09-09', '', 'Baptismal', 'Sibling', 'w', 'w', 'w'),
(32, 103, '2017-10-10', '2018-09-09', 'q', 'Baptismal', 'Aunt/Uncle', 'q', 'q', 'q'),
(33, 104, '2017-10-10', '2019-09-09', 'e', 'Baptismal', 'Sibling', 'e', 'e', 'e'),
(34, 105, '2017-10-10', '2017-10-10', '', 'Baptismal', 'Parent', 'r', 'r', 'r'),
(35, 107, '1999-10-10', '2012-10-10', 'aa', 'Baptismal', 'Sibling', 'a', 'a', 'a'),
(36, 103, '2018-09-09', '1999-10-10', 'q', 'Baptismal', 'Spouse', 'qw', 'w', 'qwqwqwq'),
(37, 103, '1999-10-10', '2017-10-10', 'q', 'Baptismal', 'Sibling', 't', 't', 't'),
(38, 103, '2017-10-10', '2017-09-09', 't', 'Baptismal', 'Sibling', 't', 't', 't'),
(39, 104, '2017-10-10', '2018-10-10', 'i', 'Baptismal', 'Boyfriend/Girlfriend', 'i', 'i', 'i'),
(40, 103, '2018-10-10', '2017-10-10', 'o', 'Baptismal', 'Sibling', 'o', 'o', 'o'),
(41, 106, '2018-10-10', '2018-10-10', 'o', 'Baptismal', 'Parent', 'o', 'o', 'o'),
(42, 106, '2018-10-10', '2017-10-10', 'w', 'Baptismal', 'Parent', '', 'q', 'q'),
(43, 104, '2017-10-10', '2018-01-01', 'll', 'Baptismal', 'Parent', 'l', 'l', 'l'),
(44, 106, '2017-10-10', '1999-10-10', 'pp', 'Baptismal', 'Parent', 'p', 'p', 'p'),
(45, 103, '2017-10-10', '1998-11-11', 'q', 'Private Wedding', '', 'q', 'q', 'q');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_priest`
--

CREATE TABLE IF NOT EXISTS `tbl_priest` (
`int_priestid` int(11) NOT NULL,
  `varchar_priestlastname` varchar(45) NOT NULL,
  `varchar_priestfirstname` varchar(45) NOT NULL,
  `varchar_priestmiddlename` varchar(45) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_priest`
--

INSERT INTO `tbl_priest` (`int_priestid`, `varchar_priestlastname`, `varchar_priestfirstname`, `varchar_priestmiddlename`) VALUES
(2, 'Sample', 'Priest', 'Default');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_requirements`
--

CREATE TABLE IF NOT EXISTS `tbl_requirements` (
  `int_eventid` int(11) NOT NULL,
  `varchar_requirements` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_reservation`
--

CREATE TABLE IF NOT EXISTS `tbl_reservation` (
`int_reservationid` int(11) NOT NULL,
  `int_eventid` int(11) NOT NULL,
  `int_guestid` int(11) NOT NULL,
  `int_priestid` int(11) NOT NULL,
  `char_guesteventtype` char(15) NOT NULL,
  `char_status` char(10) NOT NULL,
  `char_feestatus` char(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_reservation`
--

INSERT INTO `tbl_reservation` (`int_reservationid`, `int_eventid`, `int_guestid`, `int_priestid`, `char_guesteventtype`, `char_status`, `char_feestatus`) VALUES
(9, 25, 103, 2, 'Annointment', 'Pending', 'Unpaid'),
(11, 27, 104, 2, 'Funeral Manss', 'Pending', 'Unpaid'),
(12, 28, 103, 2, 'Funeral Manss', 'Pending', 'Unpaid'),
(13, 29, 103, 2, 'Annointment', 'Pending', 'Unpaid'),
(14, 30, 103, 2, 'Annointment', 'Pending', 'Unpaid'),
(15, 31, 103, 2, 'Baptismal', 'Pending', 'Unpaid'),
(16, 32, 103, 2, 'Baptismal', 'Pending', 'Unpaid'),
(17, 33, 104, 2, 'Baptismal', 'Pending', 'Unpaid'),
(18, 34, 105, 2, 'Baptismal', 'Pending', 'Unpaid'),
(19, 35, 107, 2, 'Baptismal', 'Pending', 'Unpaid'),
(20, 36, 103, 2, 'Baptismal', 'Approved', 'Unpaid'),
(21, 37, 103, 2, 'Baptismal', 'Pending', 'Unpaid'),
(22, 38, 103, 2, 'Baptismal', 'Pending', 'Unpaid'),
(23, 39, 104, 2, 'Baptismal', 'Pending', 'Unpaid'),
(24, 40, 103, 2, 'Baptismal', 'Pending', 'Unpaid'),
(25, 41, 106, 2, 'Baptismal', 'Approved', 'Unpaid'),
(26, 42, 106, 2, 'Baptismal', 'Pending', 'Unpaid'),
(27, 43, 104, 2, 'Baptismal', 'Pending', 'Unpaid'),
(28, 44, 106, 2, 'Baptismal', 'Pending', 'Unpaid'),
(29, 45, 103, 2, 'Private Wedding', 'Pending', 'Unpaid');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sponsorsbaptismal`
--

CREATE TABLE IF NOT EXISTS `tbl_sponsorsbaptismal` (
  `int_sponsorid` int(11) NOT NULL,
  `varchar_sponsorlastname` varchar(45) NOT NULL,
  `varchar_sponsorfirstname` varchar(45) NOT NULL,
  `varchar_sponsormiddlename` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_sponsorsbaptismal`
--

INSERT INTO `tbl_sponsorsbaptismal` (`int_sponsorid`, `varchar_sponsorlastname`, `varchar_sponsorfirstname`, `varchar_sponsormiddlename`) VALUES
(504, 'p', 'o', 'o');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sponsorswedding`
--

CREATE TABLE IF NOT EXISTS `tbl_sponsorswedding` (
  `int_sponsorid` int(11) NOT NULL,
  `varchar_sponsorlastname` varchar(45) NOT NULL,
  `varchar_sponsorfirstname` varchar(45) NOT NULL,
  `varchar_sponsormiddlename` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE IF NOT EXISTS `tbl_user` (
`int_guestid` int(11) NOT NULL,
  `varchar_lastname` varchar(45) NOT NULL,
  `varchar_firstname` varchar(45) NOT NULL,
  `varchar_middlename` varchar(45) DEFAULT NULL,
  `varchar_username` varchar(20) NOT NULL,
  `varchar_password` varchar(20) NOT NULL,
  `char_usertype` char(5) NOT NULL,
  `varchar_guestemail` varchar(45) NOT NULL,
  `char_gender` char(6) NOT NULL,
  `date_guestbirthday` date NOT NULL,
  `varchar_guestaddress` varchar(70) NOT NULL,
  `varchar_guestcontactnumber` varchar(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`int_guestid`, `varchar_lastname`, `varchar_firstname`, `varchar_middlename`, `varchar_username`, `varchar_password`, `char_usertype`, `varchar_guestemail`, `char_gender`, `date_guestbirthday`, `varchar_guestaddress`, `varchar_guestcontactnumber`) VALUES
(101, 'Admin', 'Admin', 'Admin', 'admin', 'password', 'Admin', 'admin@sample.com', 'female', '2017-10-02', 'Universe', '09999999999'),
(103, 'Ebrada', 'Jonalyn Fe', 'Desalisa', 'jonalynfe11', '123jona', 'User', 'jonalynfeebrada11@gmail.com', 'Female', '0000-00-00', 'Lupang Pangako Payatas B Quezon City', '09277475753'),
(104, 'Del Rosario', 'Abigale', 'Punzalan', 'abigale', '123abi', 'User', 'delrosarioabigale@gmail.com', 'Female', '0000-00-00', 'Alabang', '09156662933'),
(105, 'Ganila', 'Joshua', 'Jamorolin', 'joshua', '123joshua', 'User', 'ganilajoshua@gmail.com', 'male', '0000-00-00', 'Pandacan Manila', '09272783766'),
(106, 'Inocencio', 'JIllmarie', 'Ganda', 'jillmarie', '123jill', 'User', 'jillmarie@sample.com', 'Female', '0000-00-00', 'Mandaluyong City', '09090909090'),
(107, 'Carreon', 'Jerevon', 'Canyete', 'jerevon', '123jerevon', 'User', 'jerevoncarreon13@gmail.com', 'Male', '0000-00-00', 'Mandaluyong City', '09223755136');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_weddingevent`
--

CREATE TABLE IF NOT EXISTS `tbl_weddingevent` (
`int_weddingid` int(11) NOT NULL,
  `int_eventid` int(11) NOT NULL,
  `varchar_brideoccupation` varchar(30) NOT NULL,
  `char_bridecivilstatus` char(30) NOT NULL,
  `char_bridereligion` char(20) NOT NULL,
  `bool_brideifpregnant` tinyint(1) NOT NULL,
  `bool_brideifbaptized` tinyint(1) NOT NULL,
  `bool_brideifconfirmed` tinyint(1) NOT NULL,
  `varchar_bridemotherlastname` varchar(45) NOT NULL,
  `varchar_bridemotherfirstname` varchar(45) NOT NULL,
  `varchar_bridemothermiddlename` varchar(45) DEFAULT NULL,
  `varchar_bridefatherlastname` varchar(45) NOT NULL,
  `varchar_bridefatherfirstname` varchar(45) NOT NULL,
  `varchar_bridefathermiddlename` varchar(45) DEFAULT NULL,
  `varchar_groomlastname` varchar(45) NOT NULL,
  `varchar_groomfirstname` varchar(45) NOT NULL,
  `varchar_groommiddlename` varchar(45) DEFAULT NULL,
  `date_groombirthday` date NOT NULL,
  `varchar_groomaddress` varchar(70) NOT NULL,
  `varchar_groomoccupation` varchar(30) NOT NULL,
  `char_groomcivilstatus` char(17) NOT NULL,
  `char_groomreligion` char(20) NOT NULL,
  `bool_groomifbaptized` tinyint(1) NOT NULL,
  `bool_groomifconfirmed` tinyint(1) NOT NULL,
  `varchar_groommotherlastname` varchar(45) NOT NULL,
  `varchar_groommotherfirstname` varchar(45) NOT NULL,
  `varchar_groommothermiddlename` varchar(45) DEFAULT NULL,
  `varchar_groomfatherlastname` varchar(45) NOT NULL,
  `varchar_groomfatherfirstname` varchar(45) NOT NULL,
  `varchar_groomfathermiddlename` varchar(45) DEFAULT NULL,
  `bool_ifcivillymarried` tinyint(1) NOT NULL,
  `bool_ifchurchmarried` tinyint(1) NOT NULL,
  `char_motif` char(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_baptismalevent`
--
ALTER TABLE `tbl_baptismalevent`
 ADD PRIMARY KEY (`int_baptismalid`);

--
-- Indexes for table `tbl_event`
--
ALTER TABLE `tbl_event`
 ADD PRIMARY KEY (`int_eventid`), ADD KEY `FK_eventuser` (`int_guestid`);

--
-- Indexes for table `tbl_priest`
--
ALTER TABLE `tbl_priest`
 ADD PRIMARY KEY (`int_priestid`);

--
-- Indexes for table `tbl_requirements`
--
ALTER TABLE `tbl_requirements`
 ADD KEY `FK_requirementsevent` (`int_eventid`);

--
-- Indexes for table `tbl_reservation`
--
ALTER TABLE `tbl_reservation`
 ADD PRIMARY KEY (`int_reservationid`), ADD KEY `FK_reservationuser` (`int_guestid`), ADD KEY `FK_reservationevent` (`int_eventid`), ADD KEY `FK_reservationpriest` (`int_priestid`);

--
-- Indexes for table `tbl_sponsorsbaptismal`
--
ALTER TABLE `tbl_sponsorsbaptismal`
 ADD KEY `fk_baptismalsponsor` (`int_sponsorid`);

--
-- Indexes for table `tbl_sponsorswedding`
--
ALTER TABLE `tbl_sponsorswedding`
 ADD KEY `fk_weddingsponsor` (`int_sponsorid`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
 ADD PRIMARY KEY (`int_guestid`);

--
-- Indexes for table `tbl_weddingevent`
--
ALTER TABLE `tbl_weddingevent`
 ADD PRIMARY KEY (`int_weddingid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_baptismalevent`
--
ALTER TABLE `tbl_baptismalevent`
MODIFY `int_baptismalid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=505;
--
-- AUTO_INCREMENT for table `tbl_event`
--
ALTER TABLE `tbl_event`
MODIFY `int_eventid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=46;
--
-- AUTO_INCREMENT for table `tbl_priest`
--
ALTER TABLE `tbl_priest`
MODIFY `int_priestid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_reservation`
--
ALTER TABLE `tbl_reservation`
MODIFY `int_reservationid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
MODIFY `int_guestid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=108;
--
-- AUTO_INCREMENT for table `tbl_weddingevent`
--
ALTER TABLE `tbl_weddingevent`
MODIFY `int_weddingid` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_event`
--
ALTER TABLE `tbl_event`
ADD CONSTRAINT `FK_eventuser` FOREIGN KEY (`int_guestid`) REFERENCES `tbl_user` (`int_guestid`) ON UPDATE CASCADE;

--
-- Constraints for table `tbl_requirements`
--
ALTER TABLE `tbl_requirements`
ADD CONSTRAINT `FK_requirementsevent` FOREIGN KEY (`int_eventid`) REFERENCES `tbl_event` (`int_eventid`) ON UPDATE CASCADE;

--
-- Constraints for table `tbl_reservation`
--
ALTER TABLE `tbl_reservation`
ADD CONSTRAINT `FK_reservationevent` FOREIGN KEY (`int_eventid`) REFERENCES `tbl_event` (`int_eventid`) ON UPDATE CASCADE,
ADD CONSTRAINT `FK_reservationpriest` FOREIGN KEY (`int_priestid`) REFERENCES `tbl_priest` (`int_priestid`) ON UPDATE CASCADE,
ADD CONSTRAINT `FK_reservationuser` FOREIGN KEY (`int_guestid`) REFERENCES `tbl_user` (`int_guestid`) ON UPDATE CASCADE;

--
-- Constraints for table `tbl_sponsorsbaptismal`
--
ALTER TABLE `tbl_sponsorsbaptismal`
ADD CONSTRAINT `fk_baptismalsponsor` FOREIGN KEY (`int_sponsorid`) REFERENCES `tbl_baptismalevent` (`int_baptismalid`) ON UPDATE CASCADE;

--
-- Constraints for table `tbl_sponsorswedding`
--
ALTER TABLE `tbl_sponsorswedding`
ADD CONSTRAINT `fk_weddingsponsor` FOREIGN KEY (`int_sponsorid`) REFERENCES `tbl_weddingevent` (`int_weddingid`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
