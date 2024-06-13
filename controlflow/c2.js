const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num);
}
const map=new Map();
map.set('rajasthan',"IN")
map.set('new york','america')
console.log(map)
for(const [countries,value] of map){
    console.log(countries,":-",value);
}
const mobject={
    "game1":"nfs",
    "game2":"cod"
}
for(const key in mobject ){
    console.log(mobject[key])
}
const array=["chuchuk","gadi","badi","majedar","hai"]
let s="";
array.forEach( function(str){
     s=s+" "+str;
     console.log(s);
})
const objo=[
    {
        name:"sanjay",
        age:20
    },
    {
        name:"vishal",
        age:13
    },
    {
        name:"vipul",
        age:25
    }
]
objo.forEach( function(obj){
    console.log(obj.name+">"+obj.age)
})
//foreach do not return any value
const ageofhumans=(objo.filter( (ag)=> ag.age===20))
console.log(ageofhumans);

const rew=[1,2,3,4,5,6,7,8,9]
const r=rew.filter( (num)=>num>5)
console.log(r)

let q=[1,2,3,4]
const newnums=q
.map((nums)=> nums+10)
.map((nums)=> nums*10)
.filter((nums)=> nums>120)

q.forEach(function(num,index){
    q[index]=num+10;
})
console.log(q)
console.log(newnums)



