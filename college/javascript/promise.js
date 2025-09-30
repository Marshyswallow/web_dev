function Fetchdata(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let success=false;
        if(success){
          resolve("data fetched successfully");
        }else{
          reject("erroe fetching data")
        }
      },3000)
    })
}

Fetchdata()
        .then((data)=>console.log(data))
        .catch((data)=>console.error(data))