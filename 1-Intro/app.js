$(document).ready(function(){
    var currentStep = 0;

    $("#step1").hide();
    $("#step2").hide();

    $("#btnstep1").click(function(){
        $("#step1").show();
        $("#step2").hide();

        currentStep = 1;
    });

    $("#btnstep2").click(function(){
        $("#step2").show();
        $("#step1").hide();

        currentStep = 2;
    });

    console.log($("h1").attr("ng-reply"));

})

var person = 'Leo';

//logPerson();

//if you wanted to overwrite person from steves app person you'd have to do it this way

stevesApp.person = person;

//now when calling logperson from steves app it will pull in steve's name not leos; and the code above will not work because log person will not exist in the global namespace

stevesApp.logPerson();