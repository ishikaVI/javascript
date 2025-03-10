let newbtn=document.createElement("button");
newbtn.innerText="click me";
console.log(newbtn);

let div=document.querySelector("div");
div.append(newbtn);// adding the button in div at the end inside
// if we have to add it to start we have to use prepend inside

// let div=document.querySelector("div");
// div.before(newbtn);    adds before the node outside
// div.after(newbtn);     adds after the node outside 

let con=document.querySelector("div");
con.remove(newbtn);