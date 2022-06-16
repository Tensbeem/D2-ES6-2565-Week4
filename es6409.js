// Outer function
function greet(){
    let name = "Jhon"
    // Inner Function
    function displayName(){
        // Closure: accessing name variable
        console.log(`Hi : ${name}`)
    }
    // displayName()
    return displayName
}

// greet()
const g1 = greet()
g1()