// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
};
const sayHello = function (input){
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
const isFive = function(input){
    return Number(input) === 5
}
const isEven = function(input){
    return input % 2 === 0
}