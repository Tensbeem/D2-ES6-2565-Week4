// 1.Declarating Regular Function
function sayAsign(){
    console.log("Welcome to Thailand")
}

// 2.Annonymous Function : First class Function
// Can be assigned as a value to a variable
let sayHello = function(){
    return function(){
        console.log("Welcome to Annonymous")
    }
}

// 3.passed as an argument to other functions
function addName(callback,name){
    callback()
    console.log(message)
    console.log(name)
}

// Call Function
// sayAsign();
// sayHello();
addName(sayHello,"Mark Zakerberg");