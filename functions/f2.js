const user={
    username:"hitesh",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}
user.welcomemessage()
user.username="sanjay"
user["welcomemessage"]()
console.log(this)
function chai(){
    let username="sanjay"
    console.log(this)
}
chai()
//that means this cant be use to access property of function but can be used to access the property of current context
//arrow function
const heroes=()=>(this);
const sum=(num1,num2)=>(num1*num2)
console.log(heroes())
console.log(sum(8,9))
let sm=0;
let ar=[1,2,3,4,5]
function add(num1,num2){
    sm=sm+num1+num2;
    return sm;
}
ar.forEach(add)
console.log(sm);

