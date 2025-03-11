// callback

function getData(dataId, getnextData) {
    //2s=2000ms
    setTimeout(() => {
        console.log("data", dataId);
        if (getnextData) {
            getnextData();
        }
    }, 2000);
}

getData(1);
getData(2);
getData(3);

// known as callback hell

getData(1, () => {
    getData(2, () => {
        getData(3);
    });
})

// promises start simple promise
let promise=new Promise((resolve,reject) =>{
    console.log("i am a promise");
     // resolve("your order/command is running ");
     reject(" some error has been occurred");
})

function getData(dataId, getnextData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("data", dataId);
                resolve("worked");
                if (getnextData) {
                   getnextData();
                }
            }, 5000);
        })
     }
     let finalVal=getData(123);

     // function for using the promises 
  
     function getData2(dataId, getnextData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("data", dataId);
                resolve("worked");
                if (getnextData) {
                   getnextData();
                }
            }, 5000);
        })
     }
     let finalVal1=getData(123);
     Promise.then((res)=>{ // res is result parameter created by js
        console.log("success" , res);
     })

     /* for reject we need to write
     Promise.catch((err)=>{ // err is error parameter created by js
        console.log("error",err);
        }) */

        let finalVal3=getData(123);
     Promise.then((res)=>{ 
        console.log("success" , res);
     })
