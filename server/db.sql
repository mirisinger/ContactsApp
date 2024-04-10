CREATE DATABASE IF NOT EXISTS contact_db;

USE contact_db;

CREATE TABLE IF NOT EXISTS contact (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    title VARCHAR(50) NOT NULL,
    avatarUrl VARCHAR(50) DEFAULT '',
);

INSERT INTO `contact_db`.`contact` (`name`, `phone`,`title`, `avatarUrl`) VALUES ('Dan Smith', '(123) 745-526657', 'BA', 'https://randomuser.me/api/portraits/men/1.jpg');
INSERT INTO `contact_db`.`contact` (`name`, `phone`,`title`, `avatarUrl`) VALUES ('Alex Alvarez', '(123) 542-5634271', 'MA', 'https://randomuser.me/api/portraits/men/4.jpg');
INSERT INTO `contact_db`.`contact` (`name`, `phone`,`title`, `avatarUrl`) VALUES ('Norman Dirtic', '(724) 124-88573', 'Ph.D', 'https://randomuser.me/api/portraits/men/3.jpg');