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

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    var required,msg,id,ext,name,email,department;
    required = "<span>Required Field<span>";
    


    // GET THE VALUES FROM THE TEXT BOXES

    id = $("id").value;
    name = $("name").value;
    ext = $("extension").value;
    email = $("email").value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    // CREATE THE DELETE BUTTON

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

});

// DELETE EMPLOYEE