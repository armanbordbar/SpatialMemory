const fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
const path = require('path');
const USR_DBSOURCE = path.join(__dirname + '/user_db.sqlite');
let user_db;
user_try: try {
  if (fs.existsSync(USR_DBSOURCE)) {
    console.log('MDL2 users database exists');
    break user_try
  } else {
    user_db = new sqlite3.Database(USR_DBSOURCE, (err) => {
      if (err) {
        // Cannot open database
        console.error(err.message);
        throw err
      } else {

        console.log('Connected to the users SQLite database.');
        user_db.serialize(function() {
            user_db.run("begin transaction");
            user_db.run(`drop table if exists Users`);
            user_db.run(`create table Users (Email TEXT, Username TEXT, IsParent INTEGER, DateOFBirth TEXT, AGE DOUBLE, Gender TEXT, Handedness TEXT, Race TEXT, Ethnicity TEXT, SocioEconomy TEXT, Education TEXT, NativeLang TEXT, OtherLang1 TEXT, LangProf1 TEXT, OtherLang2 TEXT, LangProf2 TEXT, OtherLang3 TEXT, LangProf3 TEXT, OtherLang4 TEXT, LangProf4 TEXT, OtherLang5 TEXT, LangProf5 TEXT, ExpStatus Text)`);
            user_db.run("commit");
            user_db.close(function() {
              console.log('users credentials created');
          });
          });
        }
        });
  }
} catch(error) {
  console.error(error)
}

module.exports = user_db;