//solving the global namespace problem

var person = 'steve';
//calling this function in another js doc like app.js where it has it's own 'person' variable will log the other 'person' variable; so it will not log steve but leo
function logPerson() {
    console.log(person);
    
}

//this can be solved by creating an object and making all the code part of that object

var stevesApp = {};

stevesApp.person = 'steve';

stevesApp.logPerson = function() {
    console.log(stevesApp.person);
    
}