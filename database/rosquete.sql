DROP SCHEMA IF EXISTS db_rosquete;
CREATE SCHEMA IF NOT EXISTS db_rosquete;

USE db_rosquete;

CREATE TABLE IF NOT EXISTS users (
	user_id		INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	username 	VARCHAR (50) UNIQUE NOT NULL,
	password 	VARCHAR (50) NOT NULL,
	email 		VARCHAR (255) UNIQUE NOT NULL
    /*
    created_on 	TIMESTAMP NOT NULL,
	last_login 	TIMESTAMP NOT NULL
    */
);

CREATE TABLE IF NOT EXISTS category (
	category_id 	INT UNSIGNED PRIMARY KEY,
	name_category 	VARCHAR (350)
);

CREATE TABLE IF NOT EXISTS game (
	game_id 	INT UNSIGNED PRIMARY KEY,
	user_id 	INT UNSIGNED,
	score 		INT,
	category_id INT UNSIGNED,
	CONSTRAINT fk_game FOREIGN KEY (user_id) REFERENCES users (user_id),
	CONSTRAINT fk_game2 FOREIGN KEY (category_id) REFERENCES category (category_id)
);

CREATE TABLE IF NOT EXISTS words (
	word_id 	INT UNSIGNED PRIMARY KEY,
	word 		VARCHAR (500),
	category_id INT UNSIGNED,
	question 	VARCHAR (80),
	letter 		VARCHAR (1),
	
    CONSTRAINT fk_words FOREIGN KEY (category_id) REFERENCES category (category_id)
	
);

INSERT INTO db_rosquete.users VALUES 
('1','user1','user1','user1@pass.comusers'), 
('2','user2','user2','user2@pass.comusers'),
('3','diego','diego1','diego@gmail.com');

INSERT INTO db_rosquete.category VALUES
('1','firstCategory'),
('2','secondCategory');

INSERT INTO db_rosquete.words VALUES
('1', 'palabra1', '2', 'esta es la palabra Nº1', 'p'),
('2', 'palabra2', '2', 'esta es la palabra Nº2', 'p'),
('3', 'palabra3', '1', 'esta es la palabra Nº3', 'p'),
('4', 'alabra4', '1', 'esta es la palabra Nº4', 'a');

SELECT * FROM users;
SELECT * FROM words;