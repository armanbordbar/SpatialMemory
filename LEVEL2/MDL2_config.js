const express = require("express");
const path = require('path');
var sqlite3 = require('sqlite3').verbose();
MDL2_router = express.Router();
var MDL2_credentials_router_path = path.join(__dirname + '/Credentials/Credentials_Router.js');
var MDL2_credentials_router = require(MDL2_credentials_router_path);
console.log(MDL2_credentials_router_path);
MDL2_router.use('/Credentials', MDL2_credentials_router);
MDL2_router.use(express.json({ limit: '10mb'}));
var MDL2_path = path.join(__dirname + '/ExpMain');
console.log(MDL2_path);

MDL2_router.use(express.static(MDL2_path));

var { PythonShell } = require("python-shell");
MDL2_router.post('/ExpSeq', (request, response) => {
  const MyReq = request.body;
  console.log(MyReq);
  var pythonOptions = {
    mode: 'json',
    scriptPath: __dirname,
    pythonPath: '/usr/bin/python'
}
var pyshell = new PythonShell("/BlockOrdering.py", pythonOptions);
var pythonData = new Object();
pyshell.on('message', function (message) {
  pythonData = JSON.stringify(message);
}); 
pyshell.end(function (err) {
  if (err) {
    throw err
  }
  console.log("Stimuli sequence is created");
  response.json(pythonData);
});
})

let data = {};
MDL2_router.post('/ExpData', (req, res) => {
  data = req.body;
  
  res.json({
    "status": "Receiving MD Level 2 Experiment Results with Success",
  });
  InsertData2Table(data);
})

const fs = require('fs');
var sqlite3 = require('sqlite3').verbose();

function InsertData2Table(data) {
  console.log(data.TableName);
  let StatusOFexperiment = data.status;
  let runs = data.ResultsArray.length;
  let UserTableName = data.TableName
  console.log(runs);
  console.log(StatusOFexperiment);
  
const RESULTS_DBSOURCE = path.join(__dirname + '/MD_Results_db.sqlite');
let MD_Results_DB;
    MD_Results_DB = new sqlite3.Database(RESULTS_DBSOURCE, (err) => {
      if (err) {
        // Cannot open database
        console.error(err.message);
        throw err
      } else {
        MD_Results_DB.serialize(function() {
          MD_Results_DB.run("begin transaction");
          MD_Results_DB.run(`drop table if exists ${UserTableName}`);
          MD_Results_DB.run(`create table ${UserTableName} (Difficulty INTEGER, CorrectSide TEXT, WrongSide TEXT, IfRespond TEXT, subResponse TEXT, ReactionTime DOUBLE)`);
            for (let i = 0; i < runs; i++) {
              MD_Results_DB.run(`insert into ${UserTableName} values (?, ?, ?, ?, ?, ?)`, data.ResultsArray[i].Difficulty, data.ResultsArray[i].CorrectSide, data.ResultsArray[i].WrongSide, data.ResultsArray[i].IfRespond, data.ResultsArray[i].subResponse, data.ResultsArray[i].ReactTime);
                }
                MD_Results_DB.run("commit");
        });
        MD_Results_DB.close(function() {
          // sqlite3 has now fully committed the changes
          console.log('Results are in a Table');
      });
    }
    });
      const USRDB2SetStatus = path.join(__dirname + '/Credentials/user_db.sqlite');
      userDB2Complete = new sqlite3.Database(USRDB2SetStatus, (err) => {
      if (err) {
    // Cannot open database
        console.error(err.message);
        throw err
      } else {
        let sql = `UPDATE Users SET ExpStatus = ? WHERE Username = ?`;
      userDB2Complete.run(sql, [StatusOFexperiment, UserTableName], function(err) {
        if (err) {
          return console.error(err.message);
        }else {
          console.log("Completion status of the user experiment updated");
        }
      }) 
    }   
  });
  }



MDL2_router.use('/', function(req,res,next) {
  console.log(req.url, "@", Date.now());
  next();
})

  MDL2_router.get('/', (req, res) => {
  res.json({"message":"Accessing MD Level 2 Folder Ok"})
  })
module.exports = MDL2_router
