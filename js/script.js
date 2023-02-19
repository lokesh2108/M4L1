// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
var $ = function(id){
    "use strict";
    return window.document.getElementById(id);
};
var addEmpForm = $("addForm");
var empTable = $("employees");
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var empcount = $("empCount");
var c = 0;
empcount.innerHTML = "(" + c + ")";


function addmulti(id,nam,ext,email){


var distable = $("employees");
    var row = distable.insertRow(-1);
    var cell = row.insertCell(-1);
    cell.innerHTML = id;
    cell = row.insertCell(-1);
    cell.innerHTML = nam;
    cell = row.insertCell(-1);
    cell.innerHTML = ext;
    cell = row.insertCell(-1);
    cell.innerHTML = email;
    cell = row.insertCell(-1);
    var deleteButton = document.createElement("BUTTON");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("class","del");
    deleteButton.setAttribute("onclick", "deleteEmployee(this);");
    cell.appendChild(deleteButton);
}
// ADD EMPLOYEE

$("addForm").addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES

    id = $("id").value;
    nam = $("name").value;
    ext = $("extension").value;
    email = $("email").value;

    //window.document.log(id); 

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    // $("but").addEventListener("click",function(e) {
    //     e.preventDefault();
    //     addmulti(id,nam,ext,email);
    // });
    addmulti(id,nam,ext,email);
    //addmulti();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    // CREATE THE DELETE BUTTON

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

});

// DELETE EMPLOYEE