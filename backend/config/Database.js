import { Sequelize } from "sequelize";

const db = new Sequelize('sql12738076', 'sql12738076', 'andVuAnmVF', {
    host: 'sql12.freesqldatabase.com',
    dialect: 'mysql',
    port: 3306
});

// Uji koneksi
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default db;
