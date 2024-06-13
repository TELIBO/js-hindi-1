(function chai(){
    //named iife
    console.log('db connected')
})();
//global scope pollution defend
((name)=>{
    console.log(`db connected two${name}`)
})('sanjay')
function regularFunc() {
    let localVar = "I require call for execution";
    console.log(localVar); // "I am local"
}
regularFunc();
(function ife(){
    console.log("i donot require a call for execution")
})();