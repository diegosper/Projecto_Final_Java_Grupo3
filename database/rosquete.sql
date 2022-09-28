DROP SCHEMA IF EXISTS db_rosquete;
CREATE SCHEMA IF NOT EXISTS db_rosquete;

USE db_rosquete;

CREATE TABLE IF NOT EXISTS users (
	user_id		INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	username 	VARCHAR (50) UNIQUE NOT NULL,
	password 	VARCHAR (50) NOT NULL,
	email 		VARCHAR (255) UNIQUE NOT NULL,
    birth_date 	VARCHAR(255)
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
	word 		VARCHAR (80),
	category_id INT UNSIGNED,
	question 	VARCHAR (500),
	letter 		VARCHAR (1),
	
    CONSTRAINT fk_words FOREIGN KEY (category_id) REFERENCES category (category_id)
	
);

INSERT INTO db_rosquete.users VALUES 
('1','user1','user1','user1@pass.comusers','2000-08-12'), 
('2','user2','user2','user2@pass.comusers','1994-06-10'),
('3','diego','diego1','diego@gmail.com','1994-05-06');

INSERT INTO db_rosquete.category VALUES
('1','conciencia medioambiental'),
('2','educacion vial'),
('3','inteligencia emocional'),
('4','finanzas personales'),
('5','turismo sostenible'),
('6','igualdad de genero'),
('7','etica ciudadana'),
('8','salud y bienestar');

INSERT INTO db_rosquete.words VALUES
('1','amígdala','8','Considerada el centro del control emocional del cerebro','a'),
('2','beca','4','Ayuda economica fruto del esfuerzo estudiantil','b'),
('3','coaching','3','Entrenamiento que ayuda a una persona en la exploración y descubrimiento de nuevas creencias para optimizar su vida','c'),
('4','patriarcado','6','Forma tradicional de organización social que suele ser la base de la desigualdad de género','d'),
('5','emoción','3','Reacciones psicofisiológicas que representan modos de adaptación del individuo cuando percibe un objeto, persona, lugar, suceso o recuerdo importante','e'),
('6','clorofluorocarbonos','8','Gases sintéticos que destruyen la capa de ozono de la estratosfera, incrementando por tanto la exposición de la tierra a los dañinos rayos ultravioletas.','f'),
('7','gastos','4','Dinero que gastas en necesidades diarias','g'),
('8','hipocampo','8','Donde se produce el aprendizaje emocional y se almacenan los recuerdos emocionales, da respuesta emocional a las sensaciones','h'),
('9','inversión','4','Invertir es, de manera resumida, el proceso de comprar activos que aumentan de valor con el tiempo y proporcionan rendimientos en forma de pagos de ingresos o ganancias de capital.','i'),
('10','hola','2','nadaqueverJ','j'),
('11','buenas','4','nadaqueverK','k'),
('12','licencia','2','Para poder circular libremente con vehículos a motor y ciclomotores debes disponer previamente de la autorización pertinente, certificando así tener los requisitos de capacidad, conocimiento y habilidad necesarios para conducir dicho vehículo.','l'),
('13','empoderamiento','6','Transformación de las relaciones de poder, que permite a aquellas/os que les son negados, ampliar sus aspiraciones, fortalecer su voz y ejercer su capacidad de decidir','m'),
('14','nómina','4','Documento que detalla tus periodos de liquidación, percepciones, deducciones, bases de cotización.','n'),
('15','oratoria','3','Cómo hablar en publico y expresar sus ideas','o'),
('16','paro','4','Subvencion que te da el Estado cuando te quedas desempleado','p'),
('17','quinoa','8','Super alimento que se conoce y se clasifica como un grano integral','q'),
('18','reciclar','1','Tirar la basura en el lugar correcto','r'),
('19','señales','2','Carteles que se tienen que ver en las carreteras','s'),
('20','plástico','1','Impactan en el medioambiente desde su fabricación hasta su manipulación como desechos.','t'),
('21','polución','1','Se compone de muchos tipos de gases, gotitas y partículas que reducen la calidad el aire','u'),
('22','biodiversidad','1','Diversidad de seres vivos sobre la Tierra como las plantas, animales, microorganismos o también la variedad de ecosistemas.','v'),
('23','tardes','6','nadaqueverW','w'),
('24','atodos','7','nadaqueverX','x'),
('25','solamente','8','nadaqueverY','y'),
('26','awiiiiiitah','5','nadaqueverZ','z');


SELECT * FROM users;
SELECT * FROM words;