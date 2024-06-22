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
//so to use inner function as property you should make outer function return an object
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