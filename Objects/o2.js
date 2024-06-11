const tinderuser={};
tinderuser.name1="sanjay"
tinderuser.age1=20;
tinderuser.isloggedin1=false;
const regularuser={};
regularuser.name2="vaibhav"
regularuser.age2=30
regularuser.isloggedin2=true
const obj3=Object.assign({},tinderuser,regularuser)
const obj4={...tinderuser,...regularuser}
console.log(obj4)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('isloggedin'))
