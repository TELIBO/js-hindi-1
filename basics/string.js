let a="sanjay";
let b=a;
b="sanj";
console.log(a);
let ar=["mango","banana"];
let br=ar;
br.push("pineapple");
console.log(br);
let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString())
console.log(typeof mydate);
let mycreateddate=new Date("2024-06-10")
console.log(mycreateddate.toDateString());
let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(mycreateddate.getTime());
let bool=(myTimeStamp<mycreateddate.getTime())
console.log(bool);
console.log(mydate.toLocaleString('default',{
    weekday:"long"
}));
console.log(mydate.toLocaleString());