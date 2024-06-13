const bills=[100,200,150]
const gst=120;
const totalamounttobepaid=bills.reduce(function(acc,curr){
    console.log(`acc=${acc} and curr=${curr}`)
    return acc+curr;
},120)
console.log(totalamounttobepaid)
//reduce can replicate filter
const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers.reduce((acc, num) => {
  if (num % 2 === 0) acc.push(num);
  return acc;
}, []); // [2, 4]
//reduce can also replicate map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;
}, []); // [2, 4, 6, 8, 10]
