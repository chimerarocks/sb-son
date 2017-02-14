create table post (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title VARCHAR(255) NOT NULL,
	content TEXT NOT NULL
);

insert into post(title, content) values ('Post 1', 'Content 1');
insert into post(title, content) values ('Post 2', 'Content 2');
insert into post(title, content) values ('Post 3', 'Content 3');
insert into post(title, content) values ('Post 4', 'Content 4');		

CREATE TABLE comments
(
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  content TEXT NOT NULL,
  post_id INTEGER NOT NULL
);

insert into comments(content, post_id) values('Comentario 1', 1);
insert into comments(content, post_id) values('Comentario 2', 1);
insert into comments(content, post_id) values('Comentario 3', 2);
insert into comments(content, post_id) values('Comentario 4', 2);

create table users (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	username VARCHAR(100) UNIQUE NOT NULL,
	password VARCHAR(60),
	full_name VARCHAR(100) NOT NULL
);

insert into users(username, password, full_name) values ('joao@user.com', '$2y$10$kYAcvnIlpW0FcN36Q6svCOexCp6c6faeQjng2/.HLtQbs/Tz2qYEC', 'João Pedro');