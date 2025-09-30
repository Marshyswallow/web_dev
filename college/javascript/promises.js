// // ugly way

//  const fs= require('fs')

// // function Vishalreadfile(cb){
// //     fs.readFile("a.text" ,"utf-8" ,function(err,data){
// //         cb(data);
// //     });
// // }

// // function onDone(data){
// //     console.log(data)
// // }

// // Vishalreadfile(onDone);

// // my own asynchronous function
// function vishalReadFile() {
//     return new Promise (function (resolve) {
//     fs. readFile("a.text", "utf-8", function(err, data) {
//     resolve(data);
//         });
//       })
//     }
//     // callback function to call
// function onDone(data) {
//     console. log(data)
// }
//     // Its just syntactic sugar
//     // Still uses callbacks under the hood
// vishalReadFile( ).then(onDone);

const cart=["shoes","pants","kurta"];
const promise= createOrder(cart)

promise
.then(function(orderId){
    console.log(orderId);
})
.catch(function(err){
    console.log(err.message);
})

function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err=new Error("cart is not valid");
        }

        const orderId="12345"
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000)
        }
    });

    return pr;
}

function validateCart(cart){
    return true;
}