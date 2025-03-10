class toyotaCar{
    constructor(brand){
        console.log("this is a new object");
        this.brand=brand;
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

   // setBrand(brand){
     //   this.brand=brand;
    // }
}

let fortuner=new toyotaCar();


let lexus=new toyotaCar();
// lexus.setBrand("lexus");  don't have to write the setbrand code simple we can use constructor

class person{
    constructor(name){
        console.log('the constructor has be worked');
        this.name=this.name;
    }
    eat(){
        console.log('person is going to eat');
    }
    happy(){
        console.log('person is happy to work now');
    }
}
class worker extends person{
    constructor(name){
        super.name();
        console.log('the name of the person is taken');
    }
    work(){
        super.eat();
        console.log('we are working');
    }
}

let perobj = new person("priya");
