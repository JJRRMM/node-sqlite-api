DROP DATABASE IF EXISTS orbweaver_db;

CREATE DATABASE orbweaver_db;

USE orbweaver_db;

CREATE TABLE pages (
id INT NOT NULL AUTO_INCREMENT,
page_path TEXT(2000),
upload_time DATETIME,
author_text TEXT,
next_page INT(10),
book_id INT,
chapter_id INT,
posted BOOLEAN,
PRIMARY KEY (id)
);
insert into pages (page_path,upload_time,author_text,next_page,book_id,chapter_id,posted)
  values("www.pagepath.location","2018-10-15","Text from the author",12,32,3,1)

  insert into pages (page_path,upload_time,author_text,next_page,book_id,chapter_id,posted)
  values("www.pagepath.location2","2018-10-14","Some more Text from the author",13,33,4,1)
