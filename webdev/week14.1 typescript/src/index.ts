// let x: number | string = 1;

// x = "Subrat"

// console.log(x);


//write a function
// function nmeFun(name: string){
//     console.log("Hello ", name)
// }

// nmeFun("Subrat")



//sum number 
// function sum(a:number, b:number){
//     console.log(a+b);
// }

// sum(2, 4)


//write code of age adult or not
// function adult(a:number){
//     if(a > 18){
//         return "Adult"
//     }else if(a === 18){
//         return("just 18");
//     }else{
//         return("Below 18")
//     }
// }

// const a = adult(19);
// console.log(a);


//delay function

// function delayFun(){
//     setTimeout(() => {
//         run();
//     }, 3000);
// }

// console.log("HI")
// delayFun()

// function run(){
//     console.log("Hi there")
// }

// function delayedCall(fn: () => void){
//     setTimeout(fn, 1000);
// }

// delayedCall(function(){
//     console.log("hello");
// })


//-------------

// function delayedCall(anotherFN: (a:string) => void){
//     setTimeout(anotherFN, 1000);
// }

// function greet(name:String){
//     console.log("Hello", + name);
// }

// delayedCall(greet);



function greet(user:{
    name:String,
    age:number
}){
    console.log("hello" + user.name);
}

greet({
    name:"Subrat",
    age:21
})

interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}