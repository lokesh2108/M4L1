// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
var $ = function(id){
    "use strict";
    return window.document.getElementById(id);
};
var form = $("addForm");
var empTable = $("employees");
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
//var empcount = $("empCount");
var c = 0;
// empcount.innerHTML = "(" + c + ")";


// function addmulti(id,nam,ext,email){


// var distable = $("employees");
//     var row = distable.insertRow(-1);
//     var cell = row.insertCell(-1);
//     cell.innerHTML = id;
//     cell = row.insertCell(-1);
//     cell.innerHTML = nam;
//     cell = row.insertCell(-1);
//     cell.innerHTML = ext;
//     cell = row.insertCell(-1);
//     cell.innerHTML = email;
//     cell = row.insertCell(-1);
// //     var deleteButton = document.createElement("BUTTON");
// //     deleteButton.innerHTML = "Delete";
// //     deleteButton.setAttribute("class","del");
// //     deleteButton.setAttribute("onclick", "deleteEmployee(this);");
// //     cell.appendChild(deleteButton);
// }
// ADD EMPLOYEE

form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES

    var id = $("id").value;
    var nam = $("name").value;
    var ext = $("extension").value;
    var email = $("email").value;
    var depart = $("department").value;

    //window.document.log(id); 

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cId = row.insertCell(0);
    let cName = row.insertCell(1);
    let cExt = row.insertCell(2);
    let cEmail = row.insertCell(3);
    let cDept = row.insertCell(4);
    let cDelete = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let TextNID = document.createTextNode(id);
    cId.appendChild(TextNID);

    let TextNName = document.createTextNode(nam);
    cName.appendChild(TextNName);

    let TextNExt = document.createTextNode(ext);
    cExt.appendChild(TextNExt);

    let TextNEmail = document.createTextNode(email);
    cEmail.appendChild(TextNEmail);

    let TextNDept = document.createTextNode(depart);
    cDept.appendChild(TextNDept);


    // CREATE THE DELETE BUTTON
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm  del";
    let textNDelete = document.createTextNode("X");
    deleteButton.appendChild(textNDelete);
    cDelete.appendChild(deleteButton);


    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX

    $("id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    $("empCount").innerHTML = "(" + ++c + ")";


});

// DELETE EMPLOYEE

empTable.addEventListener("click", (e) => {
    if (e.target.classList.contains('del')){
        if(confirm("Do you want to delete this employee detail?")) {
            empTable.deleteRow(e.target.parentNode.parentNode.rowIndex);
            $("empCount").innerHTML = "(" + --c + ")";
            $('id').focus();
        };
    }
});