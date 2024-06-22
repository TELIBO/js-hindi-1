function gettodos(resource){
    return new Promise(function(resolve,reject){
    const request=new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{  
    if(request.readyState===4 && request.status=== 200)
        {
            const data=JSON.parse(request.responseText);
            resolve(data);
        }
    else if(request.readyState===4){
        reject("error");
    }})
    request.open('GET',resource);
    request.send();});
}

gettodos('ASYNCJS/product.JSON').then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

