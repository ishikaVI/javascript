//  async keyword is used to declare an async function 
// async function always returns a promise
async function hello() {
    console.log("hello world");
}
// await keyword is used to wait for a promise to be resolved or rejected
// await can only be used inside an async function
// await pauses the execution of the async function until the promise is resolved or rejected
// await can be used with any promise, not just async functions
async function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data from api");
        }, 2000);
    });
}
// async function to call api and wait for the response 
async function getData() {
    console.log("before api call");
    const data = await api(); // wait for the promise to be resolved
    console.log("after api call", data);
}