DROP SCHEMA IF EXISTS db_rosquete;
CREATE SCHEMA IF NOT EXISTS db_rosquete;

USE db_rosquete;

CREATE TABLE IF NOT EXISTS users (
	user_id		INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	username 	VARCHAR (50) UNIQUE NOT NULL,
	password 	VARCHAR (50) NOT NULL,
	email 		VARCHAR (255) UNIQUE NOT NULL,
    birth_date 	DATE
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
('1','user1','user1','user1@pass.comusers','2000-08-12'), 
('2','user2','user2','user2@pass.comusers','1994-06-10'),
('3','diego','diego1','diego@gmail.com','1994-05-06');

INSERT INTO db_rosquete.category VALUES
('1','firstCategory'),
('2','secondCategory');

INSERT INTO db_rosquete.words VALUES
('1', 'palabra1', '2', 'esta es la palabra Nº1', 'a'),
('2', 'palabra2', '2', 'esta es la palabra Nº2', 'b'),
('3', 'palabra3', '1', 'esta es la palabra Nº3', 'c'),
('4', 'palabra4', '1', 'esta es la palabra Nº4', 'd');
/*
('5', 'palabra5', '1', 'esta es la palabra Nº5', 'e');
('6', 'palabra6', '1', 'esta es la palabra Nº6', 'f');
('7', 'palabra7', '1', 'esta es la palabra Nº7', 'g');
('8', 'palabra8', '1', 'esta es la palabra Nº8', 'h');
('9', 'palabra9', '1', 'esta es la palabra Nº9', 'i');
('10', 'palabra10', '1', 'esta es la palabra Nº10', 'j');
('11', 'palabra11', '1', 'esta es la palabra Nº11', 'k');
('12', 'palabra12', '1', 'esta es la palabra Nº12', 'l');
('13', 'palabra13', '1', 'esta es la palabra Nº13', 'm');
('14', 'palabra14', '1', 'esta es la palabra Nº14', 'n');
('15', 'palabra15', '1', 'esta es la palabra Nº15', 'o');
('16', 'palabra16', '1', 'esta es la palabra Nº16', 'p');
('17', 'palabra17', '1', 'esta es la palabra Nº17', 'q');
('18', 'palabra18', '1', 'esta es la palabra Nº18', 'r');
('19', 'palabra19', '1', 'esta es la palabra Nº19', 's');
('20', 'palabra20', '1', 'esta es la palabra Nº20', 't');
('21', 'palabra21', '1', 'esta es la palabra Nº21', 'u');
('22', 'palabra22', '1', 'esta es la palabra Nº22', 'v');
('23', 'palabra23', '1', 'esta es la palabra Nº23', 'w');
('24', 'palabra24', '1', 'esta es la palabra Nº24', 'x');
('25', 'palabra25', '1', 'esta es la palabra Nº25', 'y');
('26', 'palabra26', '1', 'esta es la palabra Nº26', 'z');
*/

SELECT * FROM users;
SELECT * FROM words;