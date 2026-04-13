/*
    Author: Dominic Romero
    Course: CIS33DA 17925
    Lesson: 11
*/

// This statement sets the last modified date of the document in the footer
document.getElementById("lastModified").innerHTML = document.lastModified;

// This function displays an alert when the form is submitted
function formSubmit() {
    alert("Form submitted!");
}   

// This function shows the reset message when the form is reset
function formReset() {
    document.getElementById("resetMessage").style.visibility = "visible";
} 