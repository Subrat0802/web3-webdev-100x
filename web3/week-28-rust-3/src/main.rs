// use chrono::{Utc, Local};

// fn main() {
//     let utc = Utc::now();
//     let local_time = Local::now();
//     print!("{}", utc);
//     print!("{}", local_time);
// }

// fn main(){

// }

// fn sum_u32(a: u32, b: u32) -> u32 {
//     return a+b;
// }

// fn sum_f32(a: f32, b: f32) -> f32 {
//     return a+b;
// }

//genrics== Traits-----------------

// fn main(){
//     print!("{}", sum(1, 2));
// }

// fn sum(a:u32, b:u32) -> u32 {
//     return a+b;
// }

// /--------------------

// fn main(){
//     print!("{}", sum_f32(1, 2));
// }

// fn sum(a:u32, b:u32) -> u32 {
//     return a+b;
// }

// fn sum_f32(a:f32, b:f32) -> f32 {
//     return a+b;
// }
//here both fn doing the same thing there is code duplicaton to prevent this we use generics

// generic ------------------
// fn main() {
//     let s1 = sum(1.1, 2.2);
//     let s2 = sum(1, 2);
//     let s3 = sum(1.0, 2.0);

//     print!("{}", s1);
// }

// fn sum<T>(a: T, b: T) -> T {
//     return a + b;
// }

//-----------------
//Traits ex.
// fn main() {
//     let s1 = sum(1.1, 2.2);
//     let s2 = sum(1, 2);
//     let s3 = sum(1.0, 2.0);

//     print!("{}", s1);
// }

// fn sum<T: std::ops::Add<Output = T>>(a: T, b: T) -> T {  //add traits : std::ops::Add<Output = T>
//     return a + b;
// }

// /----/.............

// fn main() {
//     let s1 = sum(1.1, 2.2);
//     let s2 = sum(1, 2);
//     let s3 = sum(1.0, 2.0);
//     let s4 = sum(false, false);  //throw error because trait is Add

//     print!("{}", s1);
// }

// fn sum<T: std::ops::Add<Output = T>>(a: T, b: T) -> T {  //add traits
//     return a + b;
// }

//------------------

// struct User{
//     username: String
// }
// fn main() {
//     let u = User {
//         username: String::from("Subrat")
//     };
//     print_variable(1);
//     print_variable(1.0);
//     print_variable(String::from("asdfds"));
//     print_variable(u);

// }

// fn print_variable<T: std::fmt::Display>(a:T) {
//     println!("{}", a);
// }

//---------------

// fn main() {

//     print_variable(1);
//     print_variable(1.0);
//     print_variable(String::from("asdfds"));
// }

// fn print_variable<T: std::fmt::Display>(a:T) {
//     println!("{}", a);
// }

//================

// fn main(){
//     let x = biggest_element(2,3);
//     print!("{}",x);
// }

// fn biggest_element<T: Ord>(a: T, b: T) -> T {   //ord: ordering
//     if a > b {
//         return a;
//     }
//     return b;
// }

//---------------
//generic over structs
//one
// struct Rect<T> {
//     width: T,
//     height: T
// }

//  // wrote saperate fns
// impl  Rect<f32> {
//     fn area(&self) -> f32 {
//         return  self.width * self.height;
//     }
// }

// impl  Rect<u32> {
//     fn area(&self) -> u32 {
//         return  self.width * self.height;
//     }
// }

// fn main() {
//     let r = Rect {
//         width: 10,
//         height: 20
//     };
//     let r1 = Rect {
//         width: 10.0,
//         height: 20.0
//     };

//     print!("{}", r.area());
//     print!("{}", r1.area());

// }

//-----------

// struct Rect<T> {
//     width: T,
//     height: T
// }

// impl<T> Rect<T> {
//     fn area(&self) -> T {
//         return  self.width * self.height;
//     }
// }

// fn main() {
//     let r = Rect {
//         width: 10,
//         height: 20
//     };
//     let r1 = Rect {
//         width: 10.0,
//         height: 20.0
//     };

//     print!("{}", r.area());
//     print!("{}", r1.area());

// }

//---------------------------------
// #[derive(Copy, Clone)]
// struct Rect<T> {
//     width: T,
//     height: T
// }

// impl<T: std::ops::Mul<Output = T> + Copy> Rect<T> {
//     fn area(&self) -> T{
//         return self.width * self.height;
//     }
// }

// fn main() {
//     let r = Rect{
//         width:10,
//         height: 10
//     };

//     print!("{}", r.area());
// }

//-----------------------------
// //generics over enum
// fn main(){
//     let x = Some(2);

//     match x {
//         Some(Val) => println!("{}", val);

//     }

// }

//----------------------------
//Traits

//--------------youtube generics

// fn main() {
//   let list = vec![1,2,3,4,6];
//   let list_2 = vec![1.4,2.7,3.6,4.0,6.9];
//   let l = largest_f64(&list_2);
//   let k = largest_i32(&list);
//   println!("The largest number is {l} or {k}");
// }

// fn largest_i32(list: &[i32]) -> &i32 {
//   let mut result = &list[0];

//   for item in list{
//     if item > result {
//       result = item;
//     }
//   }

//   result
// }

// fn largest_f64(list: &[f64]) -> &f64 {
//   let mut result = &list[0];

//   for item in list{
//     if item > result {
//       result = item;
//     }
//   }

//   result
// }

//===========================

// struct User {
//   email: String
// }
// fn main() {
//   let list = vec![1,2,3,4,6];
//   let list_2 = vec![1.4,2.7,3.6,4.0,6.9];

//   let users = vec![
//     User {
//       email: String::from("subrat@gmail.com")
//     },
//     User {
//       email: String::from("subrat@gmail.com")
//     }
//   ]

//   let l = largest(&list); //you can only pass arguments that can use operators and that is generics

//   println!("The largest number is {l}");
// }

// fn largest<T: std::cmp::PartialOrd>(list: &[T]) -> &T {
//   let mut result = &list[0];

//   for item in list{
//     if item > result {
//       result = item;
//     }
//   }

//   result
// }

//---------------------------------------

//use generics in structs

// struct Point<T, U> {
//   x: T,
//   y: U
// }
// fn main(){
//    let point_a = Point {x:20, y:3};
//    let point_b = Point {x:2.2, y:5};
// }

//0------------
// struct Point<T, U> {
//   x: T,
//   y: U
// }

// impl <T, U> Point<T, U> {
//     fn new(x: T, y: U) -> Self{
//       Self {x, y}
//     }

// }
// fn main(){
//    let point_a = Point::new(4, 5.5);
//    let point_b = Point::new(4.8, 8);
// }

//----------------------------
// struct Point<T, U> {
//   x: T,
//   y: U
// }

// impl <T, U> Point<T, U> {
//     fn new(x: T, y: U) -> Self{
//       Self {x, y}
//     }

// }

// impl Point<f64, f64> {
//     fn calculate_distance(&self) -> f64 {
//       4.0
//     }
// }

// fn main(){
//    let point_a = Point::new(4, 5.5);
//    let point_b = Point::new(4.8, 8.0);

//    point_b.calculate_distance();
// }

//------------------------

// #[derive(Debug)]
// struct Point<T, U> {
//   x: T,
//   y: U
// }

// impl <T, U> Point<T, U> {
//     fn new(x: T, y: U) -> Self{
//       Self {x, y}
//     }

//     fn mixup<X, Y>(self, point: Point<X, Y>) -> Point<T, Y> {
//       Point{
//         x: self.x,
//         y: point.y
//       }
//     }

// }

// fn main(){
//    let point_a = Point::new(4, 5.5);
//    let point_b = Point::new(4.8, 8.0);

//    let point_c = point_a.mixup(point_b);
//    print!("Point c = {point_c:?}");
// }

//---------------------lecture 28 again

// use chrono::prelude::*;

// fn main() {
//    let utc = Utc::now();
//    let local = Local::now();
//    print!("{} {}", utc, local);
// }

//===============

// use dotenv::dotenv;
// use std::env;

// fn main() {
//   dotenv().ok();
//   let var = env::var("REDIS_ADDRESS");

//   match var {
//     Ok(str) => println!("{}", str),
//     Err(_err) => println!("{}", "Error while reading variable")
//   }
// }

//--------------------

// use dotenv::dotenv;
// use std::env;

// fn main() {
//   dotenv().ok();
//   let var = env::var("REDIS_ADDRESS").unwrap();
//   println!("{}", var);
// }

//=--------------- Generics

// fn main() {

// }

// fn sum_u32(a: u32, b:u32) -> u32 {
//   a + b
// }

// fn sum_f32(a: f32, b:f32) -> f32 {
//   a + b
// }

//----------------

// fn main() {
//   let a = 10;
//   let b = 20;

//   let res = sum(a, b);
//   println!("{}", res);
// }

// fn sum<T: std::ops::Add<Output = T>>(a: T, b:T) -> T { //that is trait bound std::ops::Add<Output
//   a + b
// }

//================

// fn main() {
//   let a = 10;
//   let b = 20;

//   let res = sum(a, b);

// }

// fn sum<T>(a: T, b:T){ //this will not print values because `T` doesn't implement `std::fmt::Display` there is T doesnt have display trait
//   print!("{}", a);
//   print!("{}", b);
// }

//----------------------

// fn main() {
//   let a = 10;
//   let b = 20;

//   let res = sum(a, b);

// }

// fn sum<T: std::fmt::Display>(a: T, b:T){ //now this will not show the error because we added the trait with genrics
//   print!("{}", a);
//   print!("{}", b);
// }

//----------------

// struct User {
//   username: String
// }
// fn main() {
//   let u1 = User {
//     username:String::from("Subrat")
//   };
//   let u2 = User {
//     username:String::from("Mishra")
//   };

//   sum(1, 2); //this will work because number empliment the Display Trait
//   sum(String::from("subrat"), String::from("mishra")); //this will work because String empliment the Display Trait

//   sum(u1, u2); //this will show errro because User does not implement the Dispaly Trait

// }

// fn sum<T: std::fmt::Display>(a: T, b:T){ //this will not print values because `T` doesn't implement `std::fmt::Display` there is T doesnt have display trait
//   print!("{}", a);
//   print!("{}", b);
// }

//---------------------  Genrics over structs
// struct Rect<T> {  ////genric struct
//     width: T,
//     height: T,
// }

// impl Rect<f32> {
//     fn area(&self) -> f32 {
//       return self.width * self.height
//     }
// }

// impl Rect<u32> {
//     fn area(&self) -> u32 {
//       return self.width * self.height
//     }
// }



// fn main() {
//   let r = Rect {
//     width: 10,
//     height: 20
//   };

//   let r1 = Rect {
//     width: 10.0,
//     height: 30.9
//   };

//   println!("{}", r.area());
//   println!("{}", r1.area());
// }


// //--------------------

// #[derive(Copy, Clone)]
// struct Rect<T> {
//     width: T,
//     height: T,
// }

// impl<T: std::ops::Mul<Output = T> + Copy> Rect<T> {
//     fn area(&self) -> T {
//       return self.width * self.height
//     }
// }

// fn main() {
//   let r = Rect {
//     width: 10,
//     height: 20
//   };

//   let r1 = Rect {
//     width: 10.0,
//     height: 30.9
//   };

//   println!("{}", r.area());
//   println!("{}", r1.area());
// }



//----------+++++++++++##########AGAIN
//External packages
// use chrono::{Utc, Local};

// fn main() {
//   let utc = Utc::now();
//   let local = Local::now();
//   println!("{}", utc);
//   println!("{}", local);

// } 


//------------------


// use std::env;

// use dotenv::dotenv;

// fn main() {
//   dotenv().ok();


//   //============
//   // let var = env::var("REDIS");
//   // match var {
//   //   Ok(str) => println!("{}", str),
//   //   Err(_e) => println!("Error while reading variable")
//   // }
//   //==============


//   //-==============
//   // let var = env::var("REDIS").unwrap(); //hoga heee if you are sure about it 
//   // println!("{}", var);
//   //=================


//   //===============
//   let var = env::var("REDIS");
//   println!("{:?}", var);
//   //================
// } 




//=======-----------------------
//Generics
// fn main(){

// }

// fn sum_u32(a:u32, b:u32) -> u32 {

// }

// fn sum_f32(a:f32, b:f32) -> f32 {

// }

//why we wrote same fn for sum just because of variable type f32 or u32.


// //=--------------------------
// fn main(){

// }

// fn sum_u32<T>(a:T, b:T) -> T {  //input is generic type
//   return a+b;  //here throw an error because function get any type of argument it can be sstring bool anything thats why plus operator throw error

// }



//--------------------


// use std::ops::Add;
// fn main(){
//   print!("{}", sum_u32(1,3));
// }

// fn sum_u32<T: Add<Output = T>>(a:T, b:T) -> T {  //add trait to add number now fn know, add generics. but these generics cant be string they only be a numbers, because traits Ad cant wrote for strings
//   return a+b; 
// }


//-------------------



// use std::ops::Add;

// struct User  {
//   name: String
// }

// fn main(){

//   let user1 = User {
//     name:String::from("Subrat")
//   };
//   let user2 = User {
//     name:String::from("aman")
//   };

//   print!("{}", sum_u32(1,3));

//   print!("{}", sum_u32(user1,user2)); //here we cant even pass user1 or user 2 because its struct hasent implement Add trait for the struct.
// }

// fn sum_u32<T: Add<Output = T>>(a:T, b:T) -> T {  //add trait to add number now fn know, add generics. but these generics cant be string they only be a numbers, because traits Ad cant wrote for strings
//   return a+b; 
// }


//----------------------------------


// use std::ops::Add;

// fn main(){
//   display_element(1,3); 
// }

// fn display_element<T: std::fmt::Display>(a:T, b:T) {  //Add here dispaly trait 

//   println!("{}", a);  //error =>  `T` doesn't implement `std::fmt::Display` trait
//   println!("{}", b);  //error =>  `T` doesn't implement `std::fmt::Display` trait

// }


//-============-----------

// fn main(){
//   display_element(1,3); 
//   display_element(String::from("harkirath"),String::from("Mishra"));  //this will also works because string implents the dispaly trait
// }

// fn display_element<T: std::fmt::Display>(a:T, b:T) {  //Add here dispaly trait 

//   println!("{}", a);  
//   println!("{}", b);  

// }



//------------------------

// struct User {
//   username: String
// }
// fn main(){
//   let u1 = User {
//     username:String::from("Subrat")
//   };
//   let u2 = User {
//     username:String::from("aman")
//   };
//   display_element(1,3); 
//   display_element(String::from("harkirath"),String::from("Mishra"));  //this will also works because string implents the dispaly trait
//   display_element(u1, u2); //this show error because for struct doesnt implemented the dispaly trait
// }

// fn display_element<T: std::fmt::Display>(a:T, b:T) {  //Add here dispaly trait 

//   println!("{}", a);  
//   println!("{}", b);  

// }



//-------------------------

// fn main(){
//   display_element(1,3); 
//   display_element(String::from("harkirath"),String::from("Mishra"));  //this will also works because string implents the dispaly trait
//  }

// fn display_element<T: std::fmt::Display>(a:T, b:T) {  //Add here dispaly trait 

//   println!("{}", a);  
//   println!("{}", b);  

// }



//after ghode khull gaye

// fn main() {
//   let s = sum(1.1, 2.2); //this throw error because sum fun expects u32 or u32 but we pass f32 f32 float number 
// }

// fn sum(a: u32, b:u32) -> u32 {
//   a+b
// }


//-------------------------

// fn main() {
//   let s = sum(1.1, 2.2); 
//   let s1 = sum(1, 2); 
//   let s2 = sum(1.1, 2.2);  
// }

// fn sum<T: std::ops::Add<Output = T>>(a: T, b:T) -> T { //bound to a specific trait
//   a+b
// }


//--------------


// fn main() {
//   print_variable(12);
//   print_variable(String::from("Subrat"));
//   print_variable(10.22);
// }
// fn print_variable<T>(a:T) {  //`T` doesn't implement `std::fmt::Display`
//   println!("{}", a); 
// }


//----------------------

// fn main() {
//   print_variable(12);
//   print_variable(String::from("Subrat"));
//   print_variable(10.22);
// }
// fn print_variable<T: std::fmt::Display>(a:T) {  //`T` doesn't implement `std::fmt::Display`
//   println!("{}", a); 
// }



//-----------------------

//Generics over structs
 
// struct Rect {
//   width: u32,
//   height: u32
// }

// impl Rect {
//     fn area(&self) -> u32 {
//       self.width * self.height
//     }
// }
 
// fn main() {
//   let x = Rect {
//     height: 10,
//     width: 20
//   };
//   let x1 = Rect {  //this gives error because struct element types are u32 and we passong float numbers
//     height: 2.4,
//     width: 3.1
//   }

//   println!("{} {}", x.height, x.width);
//   println!("{}", x.area());
// }


//=---------------------



// struct Rect<T> {
//   width: T,
//   height: T
// }

// impl Rect<u32> {
//     fn area(&self) -> u32 {
//       self.width * self.height
//     }
// }

// impl Rect<f32> {
//     fn area(&self) -> f32 {
//       self.width * self.height
//     }
// }
 
// fn main() {
//   let x = Rect {
//     height: 10,
//     width: 20
//   };
//   let x1 = Rect { 
//     height: 2.4,
//     width: 3.1
//   };

//   println!("{} {}", x.height, x.width);
//   println!("{} {}", x1.height, x1.width);

//   println!("{}", x.area());
//   println!("{}", x1.area());
// }

//there is repetition of code to prevent this -> 

//------------------------


// struct Rect<T> {
//   width: T,
//   height: T
// }

// impl<T> Rect<T> {
//     fn area(&self) -> T {
//       self.width * self.height
//     }
// }
 
// fn main() {
//   let x = Rect {
//     height: 10,
//     width: 20
//   };
//   let x1 = Rect { 
//     height: 2.4,
//     width: 3.1
//   };

//   println!("{} {}", x.height, x.width);
//   println!("{} {}", x1.height, x1.width);

//   println!("{}", x.area());
//   println!("{}", x1.area());
// }



//--------------------------




// struct Rect<T, U> {
//   width: T,
//   height: U
// }

// impl Rect<u32, u32> {
//     fn area(&self) -> u32 {
//       self.width * self.height
//     }
// }

// impl Rect<i32, f64> {
//     fn area(&self) -> f64 {
//       self.width as f64 * self.height    }
// }
 
// fn main() {
//   let x = Rect {
//     width: 20,
//     height: 10.1    
//   };

//   println!("{}", x.area());
// }



//=---------------------------

// #[derive(Copy, Clone)]
// struct Rect<T> {
//   width: T,
//   height: T
// }

// impl <T: std::ops::Mul<Output = T> + Copy> Rect<T> {
//     fn area(&self) -> T {
//       self.width * self.height    }
// }
 
// fn main() {
//   let x = Rect {
//     width: 20.3,
//     height: 10.4   
//   };

//   println!("{}", x.area());
// }



//-----------------

//Generics over Enum




//----------------------


//Traits

