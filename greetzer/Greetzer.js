//Mini_Library Greetzer based on jQuery

(function(global, $) { //IMMEDIATELY INVOKED FUNCTION //pass the global object & jQuery($)

    //Define local copy of jQuery
    var Greetzer = function(firstName, lastName, language){
        return new Greetzer.init(firstName,lastName,language);
    };//Trick to never have to always setup the object with the 'new' keyword

    //hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['eng','esp'];

    //informal greetings
    var greetings = {
        eng:'Hello',
        esp:'Hola'
    };

    //formal greetings
    var formalGreetings = {
        eng:'Greetings',
        esp:'Saludos'
    };

    //logger messages
    var logMessages = {
        eng:'Logged in',
        esp:'Está logádó'
    };


    Greetzer.prototype = { //Added methods & prototype just where objects that are being created are pointing at

        fullName: function () {
            return this.firstName + ', ' + this.lastName;
        },

        validate: function () {
            if (supportedLangs.indexOf(this.language) === -1)  {
              throw 'Invalid language';
            }
        },

        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting:function () {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function (formal) {
            var msg;

            //if undefined or null it will be coerced to false.
            if (formal){
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            if (console){
                console.log(msg);
            }

            //'this' refers to the calling obj at execution time
            return this; //<- make it chainable

        },

        log:function () {
            if (console){
                console.log(logMessages[this.language] + ': ' + this.fullName())
            }
            return this; //also chainable
                         //I can call the object then the method then . another method
        },

        setLang:function (lang) {
            this.language = lang;
            this.validate();
            return this;
            
        },
        HTMLGreeting:function (selector,formal) { //accepts selector & formal or not greeting
            if (!$){ //is jQuery loaded?
                throw 'Error jQuery not loaded';
            }
            if (!selector){ //is selector passed?
                throw 'Error missing selector';
            }

            var msg; //determines the message
            if (formal){ //if formal = empty = false.
                msg = this.formalGreeting();
            }
            else{
                msg = this.greeting()
            }

            $(selector).html(msg); //inject msg in the chosen place in the DOM

            return this; //makes it chainable
            
        }


    };

    Greetzer.init = function (firstName, lastName, language) { //function constructor
        var self = this;                                      //that builds an object that
        self.firstName = firstName || '';                     //gives it 3 properties
        self.lastName = lastName || '';                       //if you don't pass anything you get defaults
        self.language = language || 'eng';

        self.validate();
    };

    //Points the function contructor to Greetzer.prototype, jQuery Style.
    //objects created with Greetzer.init point to Greezer.ptototype in its
    //prototype chain
    //trick borrowed from jQuery so we don't have to type the 'new' keyword
    Greetzer.init.prototype = Greetzer.prototype;


    //On the global object Greetzer & G$ will point to function(firstName, lastName, language){
    //         return new Greetzer.init(firstName,lastName,language);
    global.Greetzer = global.G$ = Greetzer;





}(window, jQuery)); //invoke and pass global and jQuery object
//Creates new executing context & gives variables I need to run
//Greetzer ready to be reused by anybody.