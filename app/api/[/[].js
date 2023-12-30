const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "my_database",
  user: "root",
  password: "password",
});

connection.connect();

// 인덱싱한 결과 파일을 데이터베이스에 저장합니다.
const index = require("./index.json");

for (const document of index) {
  const sql = `
    INSERT INTO documents (title, content, url)
    VALUES (?, ?, ?)
  `;

  const values = [document.title, document.content, document.url];

  connection.query(sql, values);
}

// 데이터베이스에 접근하여 데이터를 조회합니다.
const sql = `
  SELECT title, content, url
  FROM documents
  WHERE title LIKE ?
`;

const values = ["%검색어%"];

const results = await connection.query(sql, values);
