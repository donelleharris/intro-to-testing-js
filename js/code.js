// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
};
function sayHello(input){
    // if (input === "Alex"){
    //     return "Hello, Alex!"
    // } else if (input === "Pat") {
    //     return "Hello, Pat!"
    // }
    // else {return "Hello, Jane!";}
    if(typeof input === 'boolean') {
        return "Hello, World!"
    } else {return "Hello, " + input + "!"}
};