//Mini_Library Greetzer based on jQuery

(function(global, $) { //IMMEDIATELY INVOKED FUNCTION //pass the global object & jQuery($)

    //Define local copy of jQuery
    var Greetzer = function(firstName, lastName, language){
        return new Greetzer.init(firstName,lastName,language);
    };//Trick to never have to always setup the object with the 'new' keyword


    //TEMP: empty for now
    Greetzer.prototype = {};//prototype just where objects that are being created are pointing at

    Greetzer.init = function (firstName, lastName, language) { //function constructor
        var self = this;                                      //that builds an object that
        self.firstName = firstName || '';                     //gives it 3 properties
        self.lastName = lastName || '';                       //if you don't pass anything you get defaults
        self.language = language || 'eng';
    };

    //Points the function contructor to Greetzer.prototype, jQuery Style.
    //objects created with Greetzer.init point to Greezer.ptototype in its
    //prototype chain
    Greetzer.init.prototype = Greetzer.prototype;


    //On the global object Greetzer & G$ will point to function(firstName, lastName, language){
    //         return new Greetzer.init(firstName,lastName,language);
    global.Greetzer = global.G$ = Greetzer;





}(window, jQuery)); //invoke and pass global and jQuery object
//Creates new executing context & gives variables I need to run
//Greetzer ready to be reused by anybody.