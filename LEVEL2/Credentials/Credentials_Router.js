const express = require("express");
const path = require('path');
var sqlite3 = require('sqlite3').verbose();
var md5 = require('md5');
const util = require('util');
let MDL2_credentials_router = express.Router();
var bodyParser = require("body-parser");
MDL2_credentials_router.use(bodyParser.urlencoded({ extended: false }));
MDL2_credentials_router.use(bodyParser.json());
MDL2_credentials_router.use(express.json({ limit: '10mb'}));
var credentials_path = path.join(__dirname + '/CredentialFiles');
MDL2_credentials_router.use(express.static(credentials_path));
let author_db_path = path.join(__dirname + '/MDL2AuthorsDB.js');
let author_db = require(author_db_path);
const Author_DBSOURCE = path.join(__dirname + '/author_db.sqlite');
var Author_db = new sqlite3.Database(Author_DBSOURCE);
let user_db_path = path.join(__dirname + '/MDL2UsersDB.js');
let user_db = require(user_db_path);
const USER_DBSOURCE = path.join(__dirname + '/user_db.sqlite');
var User_db = new sqlite3.Database(USER_DBSOURCE);

MDL2_credentials_router.post('/authors', (req1, res1) => {
  let author_data = req1.body;
  console.log(author_data); 
  AuthorAutenticationPlz(author_data, Author_db)
  .then(AutResult => {
    if(AutResult == 'error') {
      console.log('Unexpected error occured');
      res1.status(400).json({"status": "broken"});
      return
    }else if(AutResult == 'exists') {
      console.log('I found you');
      res1.json({
        "status": "exists",
      })
    } else if(AutResult == 'noexists') {
      console.log('I cannot find you');
      res1.json({
        "status": "noexists",
      })
    }else {
      res1.json({
        "status": "NoIdea",
      })
    }
  })
});

MDL2_credentials_router.post('/authentication', (request, response) => {
  let usr_data = request.body;
  console.log(usr_data); 
  UserCredentialsAutenticationPlz(usr_data, User_db)
  .then(AutResult => {
    if(AutResult == 'error') {
      console.log('Unexpected error occured');
      response.status(400).json({"status": err1.message});
      return
    }else if(AutResult == 'exists') {
      console.log('I found you');
      response.json({
        "status": "authenticated",
      })
    }else if(AutResult == 'AlreadyTaken') {
      console.log('I found you but you have already taken the experiment. Sorry!');
      response.json({
        "status": "exists&completed",
      })
    } else if(AutResult == 'noexists') {
      console.log('I cannot find you');
      response.json({
        "status": "notAuthenticated",
      })
    }else {
      response.json({
        "status": "NoIdea",
      })
    }

  })
});


MDL2_credentials_router.post("/users", (req2, res2) => {
  let user_data = req2.body
  console.log(user_data);
  UserAutenticationPlz(user_data, User_db)
  .then(AutResult => {
    if(AutResult == 'error') {
      console.log('Unexpected error occured');
      return
    }else if(AutResult == 'noexists') {
      res2.json({
        "status": "noexists",
      })
      PleaseInsert(user_data,User_db)
      .then(() => {
        console.log('I inserted the user data');
      })
      
    } else if(AutResult == 'exists') {
      console.log('user already exists in the database');
      res2.json({
        "status": "exists",
      })
    }else if(AutResult == 'AlreadyTaken') {
      console.log('User already taken the experiment');
      res2.json({
        "status": "exists&completed",
      })
    }else {
      res2.json({
        "status": "NoIdea",
      })
    }

  })
})

function AuthorAutenticationPlz(the_data, the_db) {
  return new Promise(function(resolve) {
    let Autsql;
    var data = {
      username: the_data.id,
      password : md5(the_data.pass)
    }
      Autsql = "SELECT * FROM Authors WHERE (username,password) = (?,?)"

    let UserName = data.username;
    let PassWord = data.password;
    console.log(UserName);
    the_db.all(Autsql, [UserName, PassWord], (err1, row) => {
      console.log(row);
      if (err1) {
        resolve('error');
      }else if(row.length == 0){
        resolve("noexists")
        } else {
          resolve("exists");
        }
    });

  })
}

function UserCredentialsAutenticationPlz(the_data, the_db) {
  return new Promise(function(resolve) {
    let Usrsql;
    var data = {
      Subemail: the_data.email,
      SubID : the_data.id,
    }
      Usrsql = "SELECT * FROM Users WHERE (Email, Username) = (?,?)"
      let UserName = data.SubID;
      let UserEmail = data.Subemail;
    console.log(UserEmail);
    the_db.all(Usrsql, [UserEmail, UserName], (err1, row) => {
      console.log(row);
      if (err1) {
        resolve('error');
      }else if(row.length == 0){
        resolve("noexists")
        } else if(row.length == 1 && row[0].ExpStatus == 'completed') {
          resolve("AlreadyTaken");
      }else {
          resolve("exists");
        }
    });

  })
}


function UserAutenticationPlz(the_data, the_db) {
  return new Promise(function(resolve) {
    let Usrsql;
    var data = {
      email: the_data.email,
      username: the_data.id,
    }
      Usrsql = "SELECT * FROM Users WHERE (Email, Username) = (?,?)"
      let UserEmail = data.email;
      let UserName = data.username;
    console.log(UserEmail);
    the_db.all(Usrsql, [UserEmail, UserName], (err1, row) => {
      console.log(row);
      if (err1) {
        resolve('error');
      }else if(row.length == 0){
        resolve("noexists")
      } else if(row.length == 1 && row[0].ExpStatus == 'completed') {
          resolve("AlreadyTaken");
      } else {
        resolve("exists");
      }
    });

  })
}

let UserName;
let UserEmail;

  function PleaseInsert(data, db) {
    return new Promise(function(resolve) {
      UserEmail = data.email; 
      UserName = data.id;
      ExpPreStatus = "NotCompleted";
          var sql2='INSERT INTO Users (Email, Username, ExpStatus) VALUES (?,?,?)'
          var params =[UserEmail, UserName, ExpPreStatus];
          db.run(sql2, params, function (err2, result) {
            if (err2){
              console.log(err2.message);
              return;
            } else {
              console.log('Everything allright. Go ahead!');
              resolve();
            } 
          });
        });
      }

  MDL2_credentials_router.post("/usersDemo", (req3, res3) => {
    let user_demo = req3.body
    console.log(user_demo);
    let db = User_db; 
    PleaseInsertDemos(user_demo, db)
    .then(() => {
          console.log('I inserted the user demos');
          res3.json({
            "status": "done",
          })
        })
      })

function PleaseInsertDemos(user_demo, db) {
  return new Promise(function(resolve) {
    const UserEmail = user_demo.email;
    const UserID = user_demo.sid;
    const IsParent = user_demo.isParent;
    const DateOFBirth = user_demo.DoB;
    const AGE = user_demo.age;
    const Gender = user_demo.gender;
    const Handedness = user_demo.hand;
    const Race = user_demo.race;
    const Ethnicity = user_demo.ethn;
    const SocioEconomy = user_demo.soc;
    const Education = user_demo.edu;
    const NativeLang = user_demo.NL;
    const OtherLang1 = user_demo.OL1;
    const LangProf1 = user_demo.LP1;
    const OtherLang2 = user_demo.OL2;
    const LangProf2 = user_demo.LP2;
    const OtherLang3 = user_demo.OL3;
    const LangProf3 = user_demo.LP3;
    const OtherLang4 = user_demo.OL4;
    const LangProf4 = user_demo.LP4;
    const OtherLang5 = user_demo.OL5;
    const LangProf5 = user_demo.LP5;


    let params = ["IsParent", "DateOFBirth", "AGE","Gender", "Handedness", "Race", "Ethnicity", "SocioEconomy", "Education", "NativeLang", "OtherLang1", "LangProf1", "OtherLang2", "LangProf2", "OtherLang3", "LangProf3", "OtherLang4", "LangProf4", "OtherLang5", "LangProf5"];
    let demos = [IsParent, DateOFBirth, AGE, Gender, Handedness, Race, Ethnicity, SocioEconomy, Education, NativeLang, OtherLang1, LangProf1, OtherLang2, LangProf2, OtherLang3, LangProf3, OtherLang4, LangProf4, OtherLang5, LangProf5];
    for(i = 0; i < params.length; i++) {
      let sql = `UPDATE Users SET ${params[i]} = ? WHERE Username = ?`;
      db.run(sql, [demos[i], UserID], function(err) {
        if (err) {
          return console.error(err.message);
        }else {
          console.log(`${params[i]} row updated`);
          resolve();
        }
      
      });
    }
  })
}


MDL2_credentials_router.use('/', function(req,res,next) {
  console.log(req.url, "@", Date.now());
  next();
})

MDL2_credentials_router.get('/', (req, res) => {
  res.json({"message":"Accessing MD Level 2 authors Folder Ok"})
})

module.exports = MDL2_credentials_router