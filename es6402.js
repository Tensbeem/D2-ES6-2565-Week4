// 3.First class function
function sayHello(){
    return function(){
        console.log("Hi")
    }
}
// 1-Using a variable
// const message = sayHello();
// message()
// 2-Using double parentheses
sayHello()()