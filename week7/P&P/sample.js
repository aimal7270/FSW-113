const myFirstPromise = new Promise((resolve,reject)=>{
    const condition = true;
    if(condition){
        setTimeout(function(){
            resolve("Promise is resolved!");
        },300);
    } else {
        reject("Promise is rejected!");
    }
});

myFirstPromise
.then((successMsg)=>{
    console.log(successMsg);
})
.catch((errorMsg)=>{
    console.log(errorMsg);
});

const demoPromise = function(){
    myFirstPromise
    .then((successMsg)=>{
        console.log("Success:" + successMsg);
    })
    .catch((errorMsg)=>{
        console.log("Error:" + errorMsg);
    })
}
demoPromise();