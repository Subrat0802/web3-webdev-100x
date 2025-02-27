
// function sum(a:number, b:number) : number{ //return function 
//     return a+b;
// }

// const a = sum(4, 6)
// console.log(a);
//----------------

// function greet(name:string): string{ //not returning value showing error
//     // return "Hello" + name
//     console.log("Hello" + name);
// }

// const x = greet("Subrat");
// console.log(x);
//---------------------------------------


// function isEven(num:number) : boolean{
//     if(num%2===0){
//         return true
//     }else{
//         return false
//     }
// }
// const x = isEven(4)
// console.log(x);



//INTERFACES------------------------------------------
// interface UserCheck{
//     name:string,
//     age:number,
//     address:{
//         city:string,
//         country:string,
//         pin:number
//     }
// } 

// let user : UserCheck = {
//     name:"harkirat",
//     age:17,
//     address:{
//         city:"chandigarh",
//         country:"India",
//         pin: 486001
//     }
// }

// function isLegal(user: UserCheck): boolean{
//     return user.age >= 18 
// }
// const legal = isLegal(user);
// console.log(legal);


//------------------------

// interface Address{
//         city?:string,
//         country?:string,
//         pin:number
// }

// interface UserCheck{
//     name:string,
//     age:number,
//     address?:Address
// } 

// interface office{
//     address:Address
// }

// let user : UserCheck = {
//     name:"harkirat",
//     age:17,
//     address:{
//         city:"chandigarh", //this is optional because of question mark on interface city, address
//         country:"India",
//         pin: 486001
//     }
// }
// let user2 : UserCheck = {
//     name:"Subrat",
//     age:17,

// }

// function isLegal(user: UserCheck): boolean{
//     return user.age >= 18 
// }
// const legal = isLegal(user2);
// console.log(legal);


//---------------------------------------

// Assignment 
// interface User{
//     name:string,
//     age:number
// }

// const user:User = {
//     name:"Subrat",
//     age:27
// }

// function isVoter(user:User): boolean{
//     if(user.age >= 18){
//         return true
//     }
//     else{
//         return false    }
// }
// const x = isVoter(user);
// if(x){
//     console.log("voter")
// }
// else{
//     console.log("illegal voter");
// }



//-------------------------------------------------
//Implementing interfaces
// interface Person {
//     name: string;
//     age: number;
//     greet(): void;
// }

// let person: Person = {
//     name:"Subrat",
//     age:27,
//     greet: function(){
//         return "hi"
//     }
// }

// const greeting = person.greet();
// console.log(greeting);

//-----------------------


// interface Person {
//     name: string;
//     age: number;
//     greet(gender:string): void;
// }

// let person: Person = {
//     name:"Subrat",
//     age:27,
//     greet: function(gender){
//         if(gender === "male"){
//             return true
//         }
//         else{
//             return false
//         }
//     }
// }

// const greeting = person.greet("male");
// console.log(greeting);


//-----------------------------------------


// interface Person {
//     name: string;
//     age: number;
//     greet: () => string;
// }

// let person: Person = {
//     name:"Subrat",
//     age:27,
//     greet: function(){
//         return "1"
//     }
// }

// const greeting = person.greet();
// console.log(greeting);



//-----------------------------
// abstract class Shape {
//     abstract name: string;
  
//     abstract calculateArea(): number;
  
//     describe(): void {
//       console.log(`This shape is a ${this.name} with an area of ${this.calculateArea()} units squared.`);
//     }
//   }
// class Rectangle extends Shape {
//     name = "Rectangle";
  
//     constructor(public width: number, public height: number) {
//       super();
//     }
  
//     // Implement the abstract method
//     calculateArea(): number {
//       return this.width * this.height;
//     }
//   }
  
//   // Another subclass implementing the abstract class
//   class Circle extends Shape {
//     name = "Circle";
  
//     constructor(public radius: number) {
//       super();
//     }
  
//     // Implement the abstract method
//     calculateArea(): number {
//       return Math.PI * this.radius * this.radius;
//     }
//   }



//----------------------------------

//TYPES

// interface User{
//     name:string,
//     age:number
// }

// type User = {
//     name:string,
//     age:number
// }

// let user: User = {
//     name:"Subrat",
//     age:24
// }

// function isLigal(user:User): boolean{
//     if(user.age >= 18){
//         return true
//     }
//     else{
//         return false;
//     }
// }
// const x = isLigal(user);
// console.log(x);

///-------------------------------
//INTERSECTION-types
// type Employee = {
//     name: string;
//     startDate: Date;
//   };
  
//   type Manager = {
//     name: string;
//     department?: string;
//   };
  
//   type TeamLead = Employee & Manager;
  
//   const teamLead: TeamLead = {
//     name: "harkirat",
//     startDate: new Date(),
//     department: "Software developer"
//   };
  


// type GoodUser = {
//     name:string,
//     gift:string
// }
// type BadUser = {
//     name:string,
//     ip:string
// }

// type User = GoodUser | BadUser;

// const user : User = {
//     name:"Subrat",
//     ip:"xscsac",
//     gift: "box"
// }