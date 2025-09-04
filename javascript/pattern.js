// for (let i = 0; i < 5; i++) {
//     let star="";
//     for (let j = 0; j <= i; j++) {
//       star+="* "
//     }
//     console.log(star);
//   }


// function printallusers(users){
//     for(i=0;i<users.length;i++){
//         console.log(users[i].name+"'s age is "+users[i].age)
//         }
//     }
    
    
// var users =[
//     {name :"vishal",age:20},
//     {name :"shivansh",age:20}
// ];
// printallusers(users);

// function sumToall(m,n){
//     let sum=0
//     for(i=m;i<=n;i++){
//         sum+=i
//     }
//     console.log(sum);
// }

// sumToall(1,10)


// var sum=(m,n)=>(m+n)
// var multiply=(m,n)=>(m*n)

// callback in javascript use to call apis

// function doArithmatic(firstE,secondE,whatTodo){
//     if(whatTodo==sum){
//         return sum(firstE,secondE);
//     }
//     if(whatTodo==multiply){
//         return multiply(firstE,secondE);
//     }
// }

// var answer=doArithmatic(3,5,multiply);
// console.log(answer)



// function printPattern(n){
//     for(i=1;i<=n;i++){
//         let star="";
//         for(j=1;j<=i;j++){
//             star+="*"
//         }
//         console.log(star);
//     }
// }

// printPattern(3);

// const allUsers =[{
//     firstName:"vishal",
//     gender: "male"
//     },
//     {
//         firstName:"yash",
//         gender:"male",
//         metadata:{
//             address:"noida",
//             sports:"balling"
//         }
//     },
//     {
//         firstName:" wanda",
//         gender:"female"
//     }
// ]

// for(i=0;i<allUsers.length;i++){
//     console.log("my name is"+allUsers[i]["firstName"]+" and my gender is "+allUsers[i]["gender"]);
// }

// setTimeout-> function in javascript use to call a function in some time interval

// function greet(){
//     console.log("hello world");
// }

// setTimeout(greet,3*1000)

// set interval -> it is use to make the function run for given time interval
 function greetThem(){
    console.log("hello how are you?");
 }

 setInterval(greetThem,1*1000);