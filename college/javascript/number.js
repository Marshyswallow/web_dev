// console.log(parseInt("42"));
// console.log(parseInt("ndknb42mcnknk"))
// console.log(parseInt("45fnjfijf"))


// console.log(parseFloat("3.14"))
// console.log(parseFloat(36.45))
// console.log(parseFloat(48))

// const initialArr=[1,2,3,4]
// initialArr.pop()
// console.log(initialArr)
// initialArr.push("vishal")
// console.log(initialArr)
// initialArr.unshift(0)
// console.log(initialArr)


// const arr1=[1,2,3,4]
// const arr2=[5,6,7,8]
// console.log(arr1.concat(arr2))
// function logThing(str){
//     console.log(str)
// }
// arr1.forEach(logThing)

class Animal{
    constructor(name,legcount,speaks){
        this.name=name;
        this.legcount=legcount
        this.speaks=speaks
    }
    speak(){
        console.log("hi there "+this.speaks)
    }
}

let dog=new Animal("dog",4,"barks")
dog.speak()