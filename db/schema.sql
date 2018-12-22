### Schema

DROP DATABASE plan_db;
CREATE DATABASE plan_db;
USE plan_db;

CREATE TABLE plans
(
	id int NOT NULL AUTO_INCREMENT,
	subject varchar(255) NOT NULL,
	finish BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);