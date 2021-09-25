(function(){
'use strict';
    
angular.module('mainApp')
.controller('mainAppController', mainAppController);

mainAppController.$inject = [];
function mainAppController(){

    this.sayHello = function(){
        console.log("hello there!!");
        this.clicked = {
            'clicked': true
        };

    }

    this.sayHello2 = function(){
        console.log("hello there!!");
        this.clicked = {
            'clicked': false
        };

    }
}
    
})();