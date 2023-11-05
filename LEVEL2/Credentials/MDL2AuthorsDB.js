const fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
const path = require('path');
var md5 = require('md5');
const AUT_DBSOURCE = path.join(__dirname + '/author_db.sqlite');
let author_db;
author_try: try {
  if (fs.existsSync(AUT_DBSOURCE)) {
    console.log('MDL2 authors database exists');
    break author_try
  } else {
    author_db = new sqlite3.Database(AUT_DBSOURCE, (err) => {
      if (err) {
        // Cannot open database
        console.error(err.message);
        throw err
      } else {
        console.log('Connected to the authors SQLite database.');
        author_db.serialize(function() {
          author_db.run("begin transaction");
          author_db.run(`drop table if exists Authors`);
          author_db.run(`create table Authors (username TEXT, password TEXT)`);
          author_db.run(`insert into Authors values (?, ?)`, 'z-lab', md5("123tpj45%%"));
          author_db.run("commit");
          author_db.close(function() {
              console.log('Author credentials created');
          });
        });
      }
    });
  }
} catch(error) {
  console.error(error)
}

module.exports = author_db
