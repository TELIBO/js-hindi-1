// every async function is a promise
// await is used before promise
const todo= async function(){
    let arr={};
    const response=await fetch('product.json');
    if(response.status!==200){
        throw new Error("request rejected");
    }
    const data1=await response.json();
    const response2=await fetch('user.json');
    if(response2.status!==200){
        throw new Error("request rejected");
    }
    const data2=await response2.json();
    const response3=await fetch('weather.json');
    if(response3.status!==200){
        throw new Error("request rejected");
    }
    const data3=await response3.json();
    arr={
        product:data1,
        user:data2,
        weather:data3
    };
    return arr;
}

todo().then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})
