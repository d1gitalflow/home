//gets a new object (the architecture allows us to not have to use the 'new' keyword here.
var g = G$('John','Marston');

//chainable methods + jQuery syntax without the new Operator
g.greet().setLang('esp').greet(true).log();

//When the button gets clicked
//lets use the object on the click of the login button
$('#login').click(function () { //function expression created on the fly

                      //new object gets created
    var loginGreetr = G$('John','Marston');

    $('logindiv').hide(); //hide login on the screen


    //fire off an HTML greeting, passing the '#greeting' as the selector and the
    //type of language(ie: true = formal), and log the welcome
    loginGreetr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log();
});