-- Table: public.restaurant

-- DROP TABLE IF EXISTS public.restaurant;

CREATE TABLE IF NOT EXISTS public.restaurant
(
    id integer NOT NULL,
    name character varying(200) COLLATE pg_catalog."default" NOT NULL,
    img character varying(200) COLLATE pg_catalog."default" NOT NULL,
    stars integer NOT NULL,
    rank integer NOT NULL,
    "openingHours" character varying(200) COLLATE pg_catalog."default" NOT NULL,
    tag character varying(200) COLLATE pg_catalog."default" NOT NULL,
    description character varying(200) COLLATE pg_catalog."default" NOT NULL,
    meals character varying(200)[] COLLATE pg_catalog."default" NOT NULL,
    prices character varying(200)[] COLLATE pg_catalog."default" NOT NULL,
    cuisines character varying(200)[] COLLATE pg_catalog."default" NOT NULL,
    dishes character varying(200)[] COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT restaurant_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.restaurant
    OWNER to postgres;

INSERT INTO public.restaurant(
	id, name, img, stars, rank, "openingHours", tag, description, meals, prices, cuisines, dishes)
	VALUES (1, 'The Bull Hotpot Restaurant', './accest/res-img/thebull.jpg', 4, 6, '11:00AM-12:00AM', 'Asian', 'Монголын анхдагч Hotpot Restaurant', ARRAY['1.2', '1.3'], ARRAY['2.1'], ARRAY['3.2'], ARRAY['4.1']);
INSERT INTO public.restaurant(
	id, name, img, stars, rank, "openingHours", tag, description, meals, prices, cuisines, dishes)
	VALUES (2, 'Tenger Buffet Restaurant', './accest/res-img/tenger.jpg', 4.5, 5, '06:30AM-12:00AM', 'Buffet', 'Finest Buffet Restaurant in Ulaanbaatar', ARRAY['1.1', '1.2', '1.3'], ARRAY['2.2', '2.1'], ARRAY['3.1', '3.2', '3.3'], ARRAY['4.1', '4.2', '4.3', '4.4']);
INSERT INTO public.restaurant(
		id, name, img, stars, rank, "openingHours", tag, description, meals, prices, cuisines, dishes)
		VALUES (3, 'Mongolian Restaurant', './accest/res-img/mongolians.jpg', 5, 2, '12:00PM-02:00AM', 'Mongol', 'Since 2008 Mongolians serves traditional Mongolian and European cuisine in the museum like atmosphere for a sophisticated dining experience.', ARRAY['1.2', '1.3'], ARRAY['2.3'], ARRAY['3.1', '3.2', '3.3'], ARRAY['4.1', '4.2', '4.3', '4.4']);
INSERT INTO public.restaurant(
	id, name, img, stars, rank, "openingHours", tag, description, meals, prices, cuisines, dishes)
	VALUES (4, 'Modern Nomands', './accest/res-img/modernnomands.jpg', 4, 7, '06:00AM-12:00PM', 'Mongol', 'Монгол үндэстний уламжлалт хоолыг орчин үеийн технологиор бэлтгэдэг', ARRAY['1.1','1.2', '1.3'], ARRAY['2.2'], ARRAY['3.1'], ARRAY['4.1', '4.2', '4.3', '4.4']);
INSERT INTO public.restaurant(
	id, name, img, stars, rank, "openingHours", tag, description, meals, prices, cuisines, dishes)
	VALUES (5, 'Bites', './accest/res-img/bites.jpg', 4, 8, '06:00AM-04:00PM', 'Pancake', 'Creative and unique pancakes', ARRAY['1.1','1.2'], ARRAY['2.1'], ARRAY['3.3,3.4'], ARRAY['4.2']);
INSERT INTO public.restaurant(
	id, name, img, stars, rank, "openingHours", tag, description, meals, prices, cuisines, dishes)
	VALUES (6, 'Hazara Restaurant', './accest/res-img/hazara.jpg', 4, 9, '12:00PM-10:00PM', 'Idian', 'Vegetarian friendly, Indian restaurant', ARRAY['1.2','1.3'], ARRAY['2.2'], ARRAY['3.1','3.2'], ARRAY['4.1','4.2']);
INSERT INTO public.restaurant(
	id, name, img, stars, rank, "openingHours", tag, description, meals, prices, cuisines, dishes)
	VALUES (7, 'Namaste Restaurant', './accest/res-img/namaste.jpg', 4, 10, '11:00AM-10:00PM', 'Idian', 'Authentic Indian cuisine on the heart of Ulaanbaatar to warm up to', ARRAY['1.2','1.3'], ARRAY['2.2'], ARRAY['3.1','3.2'], ARRAY['4.1','4.2']);
INSERT INTO public.restaurant(
	id, name, img, stars, rank, "openingHours", tag, description, meals, prices, cuisines, dishes)
	VALUES (8, 'Silk Road Bar & Grill', './accest/res-img/silk.jpg', 4.3, 4, '12:00AM-11:30PM', 'Steak', 'Servers are so nice! Food is mediocre though.', ARRAY['1.2','1.3'], ARRAY['2.2'], ARRAY['3.3','3.4'], ARRAY['4.1','4.3','4.4']);
INSERT INTO public.restaurant(
	id, name, img, stars, rank, "openingHours", tag, description, meals, prices, cuisines, dishes)
	VALUES (9, 'Rosewood Kitchen + Enoteca', './accest/res-img/rosewood.jpg', 4.5, 3, '11:30AM-10PM', 'Italian', 'Хамгийн шилдэг паста', ARRAY['1.2','1.3'], ARRAY['2.2'], ARRAY['3.3'], ARRAY['4.1','4.3','4.4']);
INSERT INTO public.restaurant(
	id, name, img, stars, rank, "openingHours", tag, description, meals, prices, cuisines, dishes)
	VALUES (10, 'Route 22 Restaurant & Wine Lounge', './accest/res-img/naadam.jpg', 4, 11, '11:30AM-11:00PM', 'Steak', 'Хамгийн шилдэг стейк', ARRAY['1.1','1.2'], ARRAY['2.2'], ARRAY['3.4'], ARRAY['4.1','4.2','4.3','4.4']);
INSERT INTO public.restaurant(
	id, name, img, stars, rank, "openingHours", tag, description, meals, prices, cuisines, dishes)
	VALUES (11, 'Naadam Bar & Restaurant, Shangri-La Ulaanbaatar', './accest/res-img/route22.jpg', 4, 12, '12:00PM-2:00AM', 'Soup', 'Хамгийн өргөн сонголттой', ARRAY['1.3'], ARRAY['2.2'], ARRAY['3.4','3.2'], ARRAY['4.1','4.3','4.4']);
INSERT INTO public.restaurant(
	id, name, img, stars, rank, "openingHours", tag, description, meals, prices, cuisines, dishes)
	VALUES (12, 'Bluefin Cuisine DArt', './accest/res-img/bluefin.jpg', 4.5, 4, '11:00AM-12:00AM', 'Soup', 'Хамгийн тав тухтай орчин', ARRAY['1.3'], ARRAY['2.2'], ARRAY['3.4','3.2'], ARRAY['4.1','4.3','4.4']);
INSERT INTO public.restaurant(
	id, name, img, stars, rank, "openingHours", tag, description, meals, prices, cuisines, dishes)
	VALUES (13, 'Chili Shabu Shabu', './accest/res-img/chili.jpg', 4.2, 9, '10:00AM-10:00PM', 'Soup', 'Conveniently located in the downtown UB, CHILI presents delicious featured broths made of fresh ingredients that wonderfully pairs with different tastes and hotpot toppings.', ARRAY['1.3'], ARRAY['2.3'], ARRAY['3.2','3.3'], ARRAY['4.1','4.2','4.3','4.4']);