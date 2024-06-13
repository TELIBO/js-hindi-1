 function say(Str1){
   return Str1;
 }
 console.log(say("sanjay"))
function ccp(...num1){
    return num1;
}
console.log(ccp(200,400,400))
function oop(ayobject){
   return `username is ${ayobject.username}`
}
const o1={
    username:"sanjay"
}
console.log(oop(o1))
function one(){
  const username="hitesh"
  function two(){
    const website="youtube"
    console.log(username)
  }
  //console.log(website) is wrong
  two();
}
one()
console.log(addone(5))
function addone(num){
  return num+1;
}
//addtwo(5) function if stored in variable cannot be accessed before initialized
const addtwo=function(num){
  return num+2;
}