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


struct Point<T, U> {
  x: T,
  y: U
}

impl <T, U> Point<T, U> {
    fn new(x: T, y: U) -> Self{ 
      Self {x, y}
    }

    fn mixup<X, Y>(&self, point: Point<X, Y>){

    }

}



fn main(){
   let point_a = Point::new(4, 5.5);
   let point_b = Point::new(4.8, 8.0);
}