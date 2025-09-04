

function findSum(n){
let ans=0;
for(i=1;i<=n;i++){
    ans+=i;
}
return ans;
}
function sum(){
    console.log(findSum(500))
}

setTimeout(sum,1000)
console.log("hello how are you")