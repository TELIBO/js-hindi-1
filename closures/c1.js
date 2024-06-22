//closure are used for state management like t declare aglobal variable inside a function so that it is safe ,in simple words inner function can acces the variables of outer function
function counter(){
    let counter=0;
    function cplus(){
        counter++;
        console.log(counter);
    }
    return {cplus};
}
const count=counter();
count.cplus();
count.cplus();
console.log(count);
//so to use inner function you should make outer function return an object and then use inner function as a property
function game(){
    let point=0;
    function increasepoints(){
        point=point+2;
        console.log(point);
    }
    function decreasepoints(){
        point--;
        console.log(point);
    }
    return {inc:increasepoints,dec:decreasepoints};
}
const gamepoint=game();
gamepoint.inc();
gamepoint.dec();