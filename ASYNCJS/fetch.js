 fetch('product.json').then((response)=>{
     console.log(response)
     return response.json()//response.json is also a promise
 }).then((data)=>{
     console.log(data)
 }).catch((err)=>{
     console.log(err)
 })
 //fetch is like combination of promise and http request 
 