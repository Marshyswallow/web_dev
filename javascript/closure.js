function outer(){
  let closure=4;
  return function(){
    closure++;
    return closure;
  }
}


let increment=outer();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

// closure is function which retains the memory of outer function;