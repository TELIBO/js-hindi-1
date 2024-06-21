let stocks={
    fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
}
let order=(fruit_name,call_production)=>{
    setTimeout(function(){
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production();
    },2000)
}
//callback hell
let production=()=>{
setTimeout(function(){
    console.log("production has started")
    setTimeout(function(){
        console.log("the fruit has been chopped") 
        setTimeout(function(){
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
            setTimeout(function(){
                console.log("the machine has started")
                setTimeout(function(){
                    console.log(`Icecream was placed on ${stocks.holder[0]}`)
                    setTimeout(function(){
                        console.log(`${stocks.toppings[0]} was added`)
                        setTimeout(
                        function(){
                        console.log("serve icecream") 
                        },2000)
                    },3000)
                },2000)
            },1000)
        },1000)
    },2000)
},0);
}
order(0,production);