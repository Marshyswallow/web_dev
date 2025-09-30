// const currentDate=new Date();
// console.log(currentDate.getMonth()+1);
// console.log(currentDate.getDay())
// console.log(currentDate.getFullYear())


function sum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

const beforeDate=new Date();
const beforetimeInMs=beforeDate.getTime();

sum(900000)

const afterTime=new Date();
const afterTimeinMs=afterTime.getTime();

console.log(afterTimeinMs-beforetimeInMs)