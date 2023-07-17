create database bd_app_aplicativo;

use bd_app_aplicativo;


CREATE TABLE users (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR (255),
   email VARCHAR(255) UNIQUE NOT NULL,
   password VARCHAR(255)
);

CREATE TABLE todos (
   id INT AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR (255),
   completed BOOLEAN DEFAULT false,
   user_id INT NOT NULL,
   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE shared_todos (
   id INT AUTO_INCREMENT PRIMARY KEY,
   todo_id INT,
   user_id INT,
   share_whith_id INT,
   FOREIGN KEY (todo_id) REFERENCES todos(id),
   FOREIGN KEY (user_id) REFERENCES users(id),
   FOREIGN KEY (share_whith_id) REFERENCES users(id) ON DELETE CASCADE
);

--insertar usuarios

insert into users (name, email, password) VALUES ('DUVAN','duvan@gmail.com','duvan123');
insert into users (name, email, password) VALUES ('kevin','kevin@gmail.com','kevin123');

--Consultas(querys) para averiguar sobre usuarios por el id

select * from users where id = 2;

--insertar las tareas
insert into todos( title, user_id)
VALUES
("realizar pedidos en la mañana", 1),
("correr pedidos en la tarde", 1),
("acostarse a dormir de madrugada", 1); 

-- Compartir todos de user 1 con user2
  insert into shared_todos (todo_id, user_id, share_whith_id)
  VALUES (1,2,2);

-- consultar todos los todos coompartidos + los propios mios

  SELECT todos.*, shared_todos.shared_whith_id
  FROM todos
  LEFT JOIN shared_todos ON todos.id = shared_todos.todo_id
  WHERE todos.user_id = [user_id] OR shared_todos.shared_with_id = 2;