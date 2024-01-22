
// const fnc = ()=>{
//     const timer = setTimeout(()=>{
//         console.log("This is call back function")
//     },2000)
// }
// fnc()



let promise = new Promise((res,rej)=>{
  let condition = true;
  if(condition){
    res("Promise is resolved")
  }else{
    rej("Promise if rejected")
  }
})

promise.then((message)=>{
  console.log(message)
})

promise.catch((message)=>{
  console.log(message)
})
let arr = [1,2,3]

arr.forEach((a)=>{
  console.log(a+1)
})
let obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(`Property ${key} is ${obj[key]}`);
}