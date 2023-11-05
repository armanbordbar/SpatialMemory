let authorID;
let authorPass;
const arrSum = arr => arr.reduce((a,b) => a + b, 0);
let wait = ms => new Promise(resolve => setTimeout(resolve, ms));
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function InsertAuthor() {
    var InsertSection = document.createElement("div");
    InsertSection.className = "container-fluid";
    InsertSection.id = "InfoInsertDiv";
    document.body.prepend(InsertSection);
    var InsertIdDiv = document.createElement("div");
    InsertIdDiv.className = "row mt-5 align-items-center justify-content-center";
    InsertSection.appendChild(InsertIdDiv);
    var InsertIdCol = document.createElement("div");
    InsertIdCol.className = "col-md-3 mt-5";
    InsertIdDiv.appendChild(InsertIdCol);
    var InsertIdMessageP = document.createElement("p");
    InsertIdMessageP.className = "h4 mt-5 p-2 d-flex justify-content-center";
    InsertIdCol.appendChild(InsertIdMessageP);
    var InsertIdMessage = document.createTextNode("Please insert your ID");
    InsertIdMessageP.appendChild(InsertIdMessage);
    var IDinsertBox = document.createElement("input");
    IDinsertBox.type = "text";
    IDinsertBox.className = "form-control d-flex justify-content-center";
    IDinsertBox.id = "SubjID";
    IDinsertBox.placeholder = "ID Here";
    InsertIdCol.appendChild(IDinsertBox);
    
    var InsertPassDiv = document.createElement("div");
    InsertPassDiv.className = "row mt-1 align-items-center justify-content-center";
    InsertSection.appendChild(InsertPassDiv);
    var InsertPassCol = document.createElement("div");
    InsertPassCol.className = "col-md-3 mt-1";
    InsertPassDiv.appendChild(InsertPassCol);
    var InsertPassMessageP = document.createElement("p");
    InsertPassMessageP.className = "h4 mt-5 p-2 d-flex justify-content-center";
    InsertPassCol.appendChild(InsertPassMessageP);
    var InsertPassMessage = document.createTextNode("Please insert your Password");
    InsertPassMessageP.appendChild(InsertPassMessage);
    var PassinsertBox = document.createElement("input");
    PassinsertBox.type = "password";
    PassinsertBox.className = "form-control d-flex justify-content-center";
    PassinsertBox.id = "SubjPass";
    PassinsertBox.placeholder = "Password Here";
    InsertPassCol.appendChild(PassinsertBox);
    var SubmitButtonDiv = document.createElement("div");
    SubmitButtonDiv.className = "h5 p-md-4 w-30 d-flex justify-content-center";
    var SubmitButton = document.createElement("button");
    SubmitButton.type = "button";
    SubmitButton.id = "submit";
    SubmitButton.className = "btn btn-primary";
    SubmitButtonDiv.appendChild(SubmitButton);
    InsertPassCol.appendChild(SubmitButtonDiv);
    var SubmitMessage = document.createTextNode("SUBMIT");
    SubmitButton.appendChild(SubmitMessage);
    this.id = InsertSection.id
}

function InsertUser() {
    var InsertSection = document.createElement("div");
    InsertSection.className = "container-fluid";
    InsertSection.id = "InfoInsertDiv";
    document.body.prepend(InsertSection);

    var InsertEmailDiv = document.createElement("div");
    InsertEmailDiv.className = "row mt-1 align-items-center justify-content-center";
    InsertSection.appendChild(InsertEmailDiv);
    var InsertEmailCol = document.createElement("div");
    InsertEmailCol.className = "col-md-3 mt-1";
    InsertEmailDiv.appendChild(InsertEmailCol);
    var InsertEmailMessageP = document.createElement("p");
    InsertEmailMessageP.className = "h4 mt-5 p-2 d-flex justify-content-center";
    InsertEmailCol.appendChild(InsertEmailMessageP);
    var InsertEmailMessage = document.createTextNode("Please insert subject email");
    InsertEmailMessageP.appendChild(InsertEmailMessage);
    var EmailinsertBox = document.createElement("input");
    EmailinsertBox.type = "email";
    EmailinsertBox.className = "form-control d-flex justify-content-center";
    EmailinsertBox.id = "SubjEmail";
    EmailinsertBox.placeholder = "Subject email Here";
    InsertEmailCol.appendChild(EmailinsertBox);

    var InsertIdDiv = document.createElement("div");
    InsertIdDiv.className = "row mt-1 align-items-center justify-content-center";
    InsertSection.appendChild(InsertIdDiv);
    var InsertIdCol = document.createElement("div");
    InsertIdCol.className = "col-md-3 mt-1";
    InsertIdDiv.appendChild(InsertIdCol);
    var InsertIdMessageP = document.createElement("p");
    InsertIdMessageP.className = "h4 mt-5 p-2 d-flex justify-content-center";
    InsertIdCol.appendChild(InsertIdMessageP);
    var InsertIdMessage = document.createTextNode("Please insert subject ID");
    InsertIdMessageP.appendChild(InsertIdMessage);
    var IDinsertBox = document.createElement("input");
    IDinsertBox.type = "text";
    IDinsertBox.className = "form-control d-flex justify-content-center";
    IDinsertBox.id = "SubjID";
    IDinsertBox.placeholder = "Subject ID Here";
    InsertIdCol.appendChild(IDinsertBox);
    
    var SubmitButtonDiv = document.createElement("div");
    SubmitButtonDiv.className = "h5 p-md-4 w-30 d-flex justify-content-center";
    var SubmitButton = document.createElement("button");
    SubmitButton.type = "button";
    SubmitButton.id = "submit";
    SubmitButton.className = "btn btn-primary";
    SubmitButtonDiv.appendChild(SubmitButton);
    InsertIdCol.appendChild(SubmitButtonDiv);
    var SubmitMessage = document.createTextNode("SUBMIT");
    SubmitButton.appendChild(SubmitMessage);
    this.id = InsertSection.id
}

let permission1 = false;
let permission2 = false;
let AuthorInfoPage;
$(document).ready(function() {
    AuthorInfoPage = new InsertAuthor();
    $("#submit").click(function() {
        if(document.getElementById("SubjID").value == '') {
            alert('You forgot your ID. Please insert');
            permission1 = false;
        }else if(document.getElementById("SubjID").value != ''){
            authorID = document.getElementById("SubjID").value;
            permission1 = true;
        }
        if(document.getElementById("SubjPass").value == '') {
            alert('You forgot your password. Please insert');
            permission2 = false;
        }else if(document.getElementById("SubjPass").value != ''){
            authorPass = document.getElementById("SubjPass").value;
            permission2 = true;
        }
        if(permission1 && permission2) {
            SendTheAuthorInfo(authorID, authorPass);
        }
    })
})

async function SendTheAuthorInfo(id, pass)  {
    //TableName = Subject ID//
    const author_credentials = { id, pass };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(author_credentials)
    };
    const confirm_feedbk = await fetch('/MD/LEVEL2/Credentials/authors', options);
    const validate_feedbk = await confirm_feedbk.json();
    if(validate_feedbk.status == 'exists') {
        alert('you are in');
        AddUser();
    }else if(validate_feedbk.status == 'nonexists'){
        alert('Your credentials are wrong');
    }else {
        alert('something is going wrong');
    }
}

var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
let canI1 = false;
let canI2 = false;
let canI3 = false;
function AddUser() {
    let UserEmail;
    let UserID;
    let UserPass;
    document.getElementById(AuthorInfoPage.id).remove();
    $(document).ready(function() {
        UserInfoPage = new InsertUser();
        $("#submit").click(function() {
            if(document.getElementById("SubjEmail").value == '') {
                alert('You forgot user email. Please insert');
                canI1 = false;

            }else if(document.getElementById("SubjEmail").value != ''){
                if(!email_regex.test($("#SubjEmail").val())) {
                    alert('email seems incorrect. Try again!');
                    canI1 = false;
                } else {
                    UserEmail = document.getElementById("SubjEmail").value;
                    canI1 = true;
                }
            }
            if(document.getElementById("SubjID").value == '') {
                alert('You forgot user ID. Please insert');
                canI2 = false;
            }else if(document.getElementById("SubjID").value != ''){
                UserID = document.getElementById("SubjID").value;
                canI2 = true;
            }
            if(canI1 && canI2) {
                SendTheUserInfo(UserEmail, UserID);
            }
            
        })
    })
}

async function SendTheUserInfo(email, id)  {
    
    const user_credentials = { email, id }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_credentials)
    };
    const confirm_feedbk = await fetch('/MD/LEVEL2/Credentials/users', options);
    const validate_feedbk = await confirm_feedbk.json();
    if(validate_feedbk.status == "noexists") {
        alert('User registration finished');
        document.getElementById(UserInfoPage.id).remove();
    }else if(validate_feedbk.status == "exists"){
        alert('The user exists in the database');
    }else if(validate_feedbk.status == "exists&completed"){
        alert('The user has already taken the experiment');
    }else {
        alert('something is going wrong');
    }
    console.log(validate_feedbk);
}