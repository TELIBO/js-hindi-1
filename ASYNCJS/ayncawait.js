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
//error handling
async function fetchData(url) {
    try {
        const response = await fetch(url);

        // Check if the response status is not OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.error("An error occurred:", error.message);
    } finally {
        console.log("Fetch attempt finished.");
    }
}

// Example usage
const apiURL = "https://api.example.com/data";
fetchData(apiURL);

