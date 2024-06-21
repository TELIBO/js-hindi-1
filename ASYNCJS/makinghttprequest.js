const request=new XMLHttpRequest();
//get to get data
//post to send data
//pull to update data
request.addEventListener('readystatechange',()=>{
    // console.log(request,request.readyState);
    if(request.readyState===4 && request.status=== 200)
        {
            console.log(request.responseText);
        }
    else if(request.readyState===4){
        console.log('could not fetch the data')
    }
})
//when request is succesful status is 200
// when there is client side error 400's status are there
// when server side error 500's status code come
request.open('GET','https://jsonplaceholder.typicode.com/todos/');
request.send();