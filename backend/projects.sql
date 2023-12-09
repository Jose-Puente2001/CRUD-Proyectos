-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 09-12-2023 a las 02:33:28
-- Versión del servidor: 5.7.40
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `projects`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project`
--

DROP TABLE IF EXISTS `project`;
CREATE TABLE IF NOT EXISTS `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cliente` varchar(255) NOT NULL,
  `nombre_proyecto` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `mapa` varchar(255) NOT NULL,
  `estatus` varchar(255) NOT NULL DEFAULT 'STAND BY',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=66 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `project`
--

INSERT INTO `project` (`id`, `cliente`, `nombre_proyecto`, `country`, `mapa`, `estatus`) VALUES
(65, 'Jose', 'App Web con React', 'Venezuela', 'Estado Falcón, Venezuela', 'EN CURSO');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
