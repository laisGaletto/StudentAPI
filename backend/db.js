import mysql from "mysql";

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin_app',
  password: 'password',
  database: "app_challenge"
});

db.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected with MySQL');
});


