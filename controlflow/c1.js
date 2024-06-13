if(2=="2")
    {
        console.log("this check only value")
    }
if(2!=="2")
    {
        console.log("this check datatype also")
    }
//&& and ,|| or
// switch(key){
//     case value:
//     break;
//     default:
//     break;
// }
const month=3;
switch(month){
    case 1:
        console.log("jan")
    break;
    case 2:
        console.log("feb")
    break;
    case 3:
        console.log("march")
    break;
    case 4:
        console.log("april")
    break;
    case 5:
        console.log("june")
    break;
    default:
        console.log("other")
    break;
}
//falsy values
//false,0,-0,bigint 0n,"",null,undefined,nan
//truthy value(all none falsy values)
//"0",'false'," ",{},[],function(){}
const userlength=[];
if(userlength.length==0){
    console.log("array empty")
}
const userobject={}
if(Object.keys(userobject).length==0){
    console.log("object is empty")
}
// nullish coaleshing operator(??):null undefined
let val1=null??10;
let val2=undefined??10;
console.log(val1+","+val2);
//terniary operator
const iceteaprice=100
iceteaprice>=80?console.log("more than 80"):console.log("less than 80")