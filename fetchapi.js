// fetch api provides a interface for fetching resources across the network
// fetch api is a promise based api
// fetch api is used to make network requests to servers
// fetch api is used to fetch data from a url
//it uses response and request objects to handle the data
// fetch() method is used to fetch data
let URL="https://jsonplaceholder.typicode.com/posts/1";
let promise=fetch(URL);
console.log(promise);
/// async function to fetch data from api
async function fetchData() {
    console.log("before api call");
    const response = await fetch(URL); // wait for the promise to be resolved
    const data = await response.json(); // wait for the promise to be resolved
    console.log("after api call", data);
    let resdata= await response.json();
    console.log(resdata);
}
// ajax is asynchronous javascript and xml 
// ajax is used to send and receive data from a server asynchronously
// ajax is used to update a web page without reloading the page

// json is a lightweight data interchange format
// json is easy for humans to read and write    
//json stands for javascript object notation