-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema exercisetrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `exercisetrackerdb` ;

-- -----------------------------------------------------
-- Schema exercisetrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `exercisetrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `exercisetrackerdb` ;

-- -----------------------------------------------------
-- Table `exercise`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `exercise` ;

CREATE TABLE IF NOT EXISTS `exercise` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS exercisetrackeruser;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'exercisetrackeruser' IDENTIFIED BY 'exercisetrackeruser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'exercisetrackeruser';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `exercise`
-- -----------------------------------------------------
START TRANSACTION;
USE `exercisetrackerdb`;
INSERT INTO `exercise` (`id`, `name`) VALUES (1, 'pullups');
INSERT INTO `exercise` (`id`, `name`) VALUES (2, 'pushups');

COMMIT;

