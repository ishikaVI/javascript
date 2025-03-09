console.dir(document); // used for viewing all the documents present in the code
document.getElementById("header");
console.log(document.body);
document.getElementsByClassName("area");
console.log(document.body);
console.dir(header);
console.log(header);
document.getElementsByTagName("p");

// query selector returns a nodelist

let firstel=document.querySelector("p"); // selecting the first element
console.dir(firstel);
let allel=document.querySelectorAll("#header","p",".area");  // for selecting all the elements from the code
console.dir(allel);

console.dir(document.body.firstChild); // used for having a childclass

let div=document.querySelector("div");
console.dir(div);

// DOM properities
// innerText / innerHTML / tagName /textContent= used for veiwing the hidden content

// starting with the attributes

let have=div.getAttribute("new");
console.log(have);