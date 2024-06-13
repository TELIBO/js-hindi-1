const mysym=Symbol("key1")
const jsuser={
    name:"sanjay",
    "fullname":"sajnani",
    [mysym]:"mykey1",
    age:20,
    location:"aburoad",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastlogindays:["monday","tuesday"]
}
console.log(jsuser[mysym])
console.log(jsuser["fullname"])
jsuser.greeting=function(){
    console.log(`hello user,${this.fullname}`)
}
jsuser.greeting()

