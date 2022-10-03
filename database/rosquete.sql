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
('1','Airbag','2','Forma parte del sistema de seguridad pasiva de los vehículos. En caso de colisión violenta se infla de modo explosivo amortiguando el impacto de sus ocupantes','a'),
('2','Beca','4','Ayuda económica procedente de fondos públicos o privados que se concede a una persona para pagar total o parcialmente los gastos que le supone cursar unos estudios o desarrollar un proyecto de investigación','b'),
('3','Coaching','3','Forma de desarrollo personal en la cual una persona con experiencia apoya a un alumno o cliente a lograr un objetivo personal o profesional al brindarle capacitación y orientación.​','c'),
('4','Patriarcado','6','Predominio de la autoridad que ejerce un varón sobre un grupo de personas o sociedad, específicamente sobre las mujeres y los niños. Asociado a la desigualdad de género','p'),
('5','Emoción','3','Reacciones psicofisiológicas que representan modos de adaptación del individuo cuando percibe un objeto, persona, lugar, suceso o recuerdo importante','e'),
('6','Fauna','1','Conjunto de especies animales que habitan en una región geográfica, que son propias de un período geológico o que se pueden encontrar en un ecosistema determinado','f'),
('7','Gasolina','1','Combustible fósil obtenido del petróleo. Cuando se incinera, produce emisiones de dióxido de carbono (CO2), hidrocarburos (HC) y oxido de nitrógeno (NOx), entre otros','g'),
('8','Hipoteca','4','Préstamo tomado con el respaldo económico de una propiedad. Permite a los consumidores comprar propiedades y pagarlas durante un período, por lo general entre 15 y 30 años','h'),
('9','Inflación','4','Aumento en el precio en dinero de los bienes y servicios que ocurre a lo largo del tiempo. Se trata de un proceso económico, en donde se produce un desequilibrio entre la producción y la demanda.','i'),
('10','Jubilado','4','Persona que no trabaja y goza de una pensió obtenida por su actividad económica anterior al cesar en el trabajo a causa de su edad','j'),
('11','Karma','3','En la religión budista y en el hinduismo, creencia según la cual toda acción tiene una fuerza dinámica que se expresa e influye en las sucesivas existencias del individuo','k'),
('12','Legislación','7','Conjunto de normas y leyes que regulan las relaciones entre las personas de un país o de un sector determinado','l'),
('13','Empoderamiento','6','Adquisición de poder e independencia por parte de un grupo social desfavorecido para mejorar su situación','e'),
('14','Nómina','4','Documento que detalla tus periodos de liquidación, percepciones, deducciones, bases de cotización.','n'),
('15','Oratoria','3','Cómo hablar en publico y expresar sus ideas','o'),
('16','Paro','4','Subvencion que te da el Estado cuando te quedas desempleado','p'),
('17','Quinoa','8','Super alimento que se conoce y se clasifica como un grano integral','q'),
('18','Reciclar','1','Tirar la basura en el lugar correcto','r'),
('19','Señales','2','Carteles que se tienen que ver en las carreteras','s'),
('20','Plástico','1','Contiene T: Impactan en el medioambiente desde su fabricación hasta su manipulación como desechos','t'),
('21','Polución','1','Contiene U: Se compone de muchos tipos de gases, gotitas y partículas que reducen la calidad el aire','u'),
('22','Velocímetro','2','Instrumento que mide la velocidad de un vehículo en kilómetros por hora','v'),
('23','Workaholic','8','Adicción al trabajo','w'),
('24','Expediente','4','Contiene X: Es el conjunto de los documentos que corresponden a una determinada cuestión. También puede tratarse de la serie de procedimientos de carácter judicial o administrativo que lleva un cierto orden','x'),
('25','Ayuntamiento','8','Contiene Y: Corporación o grupo de personas integrado por un alcalde o intendente y varios concejales que se encarga de administrar y gobernar un municipio','y'),
('26','Indemnizacion','4','Contiene Z: Compensación que se exige por el perjuicio causado. En el ámbito laboral, se pide el pago de esta por desahucio laboral o por despido','z'),
('27','Insulina','8','Es una hormona liberada por el páncreas como respuesta a la presencia de glucosa en la sangre.','i'),
('28','Presupuesto','4','Cálculo anticipado de gastos e ingresos. Utilizados en el ámbito familiar, privado e institucional para anticipar qué gastos pueden hacerse y lograr una utilización eficiente de los recursos.','p'),
('29','Androcentrismo', '6','Enfoque que coloca la mirada masculina en el centro del universo, como medida de todas las cosas y representación global de la humanidad, ocultando otras realidades, entre ellas la de la mujer','a'),
('30','Biodiversidad','5','Variabilidad de organismos vivos de cualquier fuente, incluidos, entre otros, los ecosistemas acuáticos, así como los complejos ecológicos de los que forman parte','b'),
('31','Cicloturismo','5','Modalidad de turismo en la que se emplea la bicicleta como medio de transporte','c'),
('32','Domótica','8','Integración en los servicios e instalaciones residenciales de dispostitivos que pueden controlar a distancia los elementos necesarios para la vida en un hogar avanzado, de forma energéticamente eficiente, confortable y segura','d'),
#('33','peatonal','2','contiene la E: Zona de intersección de la calzada habilitada para que crucen los peatones y ante la que los conductores de vehículos o animales deben detenerse para ceder el paso.','e'),
('34','Educación','8','Derecho básico de todos los niños, niñas y adolescentes, que les proporciona habilidades y conocimientos necesarios para desarrollarse como adultos, y cuyo sistema de enseñanza no se ha modificado desde la revolución industrial','e'),
('35','Jugar','8','Acción de realizar algo con alegría para distraerse o también para  incrementar o desarrollar capacidades. Lo importante en este caso, es divertirse, hacerlo con placer. ','j'),
('36','Equipo','8','Contiene I: Conjunto de personas que tienen un objetivo común, e interactúan y se coordinan para conseguirlo','i'),
('37','Atmósfera','1','Capa gaseosa que rodea la Tierra y otros cuerpos celestes','a'),
('38','Autopista','2','Vía que permite desplazamientos de larga distancia entre ciudades o dentro de éstas. Sus calzadas están separadas físicamente y segregadas de su entorno, sus accesos limitados a ciertos puntos','a'),
('39','Cuota','4','Parte o porción fija y proporcional que se paga por un servicio','c'),
('40','Fotosíntesis','1','Proceso por el cual las plantas verdes transforman la energía solar en energía química, produciendo oxígeno y azúcares a partir de dióxido de carbono y agua.','f'),
('41','Motivación','3','Grado de interés que tiene una persona por realizar una actividad en sí misma o por su finalidad última. Impulso del ser humano para satisfacer sus necesidades','m'),
('42','Optimismo','3','Predisposición a entender y a analizar la realidad desde su aspecto más positivo. Actitud que impide caer en la apatía, la desesperación o la depresión frente a las adversidades','o'),
('43','Mutual','4','Entidad constituida libremente, sin fines de lucro, por un grupo de personas con el objeto de brindarse solidariamente ayuda recíproca frente a riesgos eventuales o de brindarse servicios','m');



SELECT * FROM users;
SELECT * FROM words;