CREATE TABLE IF NOT EXISTS blogposts (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255) NOT NULL,
  number INT NOT NULL,
  year INT NOT NULL
)

INSERT INTO blogposts (title, number, year) values
('Still Life', 1, 2005),
('A Fatal Grace', 2, 2006),
('The Cruellest Month', 3, 2007);

CREATE TABLE IF NOT EXISTS comments (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  content TEXT NOT NULL,
  date TEXT NOT NULL,
  post_id INT REFERENCES blogposts(id)
)

INSERT INTO comments (name, content, date, post_id) VALUES 
('Cher Knowles', 'Love this one', '22.06.2025', 2),
('Bob Smith','Did not get it till the very end','22.06.2025', 3),
('Gertrude Hook','This is my favourite so far','22.06.2025', 1);