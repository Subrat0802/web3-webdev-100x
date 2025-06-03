// trait Shape {
//     fn area(&self) -> u32;
// }

// struct Rect {
//     width:u32,
//     height:u32
// }

// impl Shape for Rect {
//     fn area(&self) -> u32 {
//         return self.width * self.height;
//     }
// }

// fn main() {
//     let r = Rect {
//         width: 10,
//         height: 10
//     };
//     get_area(r);
// }

// fn get_area(s: impl Shape) -> u32 {
//     return s.area();
// }



// //---------macros

// macro_rules! say_hello {
//     () => {
//         println!("helo")
//     };
// }


// fn main() {
//     say_hello!()
// }


//=============-----------lecture 29 again


// trait Shape {
//     fn area(&self) -> u32;
// }

// struct Rect {
//     width:u32,
//     height:u32
// }

// impl  Shape for Rect {
//     fn area(&self) -> u32 {
//         return self.width * self.height
//     }
// }

// struct Circle {
//     radius: u32
// }

// impl Shape for Circle {
//     fn area(&self) -> u32 {
//         return self.radius * self.radius;
//     }
// }

// fn main() {
//     let r = Rect {
//         width:10,
//         height:20
//     };

//     let c = Circle{radius: 10};
//     get_area(c);
//     get_area(r);
// }

// fn get_area(s: impl Shape) -> u32 {
//     return s.area();
// }


//--annotation===============


//macro
// macro_rules! say_hello {
//     () => {
//         println!("Hello, world!");
//     };
// }

// fn main() {
//     say_hello!();  // Expands to: println!("Hello, world!");
// }

//-------------declerative macro

// macro_rules! say_hello {//this is decelartive macro
//     () => {
//         println!("Hello, world!"); 
//     };
// }

// fn main() {
//     say_hello!();  // Expands to: println!("Hello, world!");
// }


//-0------------ Procedural macro

// use std::fmt::format;
// #[derive(Serialize, Deserialize)]
// struct User {
// 	username: String,
// 	password: String,
// 	age: u32
// }

// impl User {
//     fn to_string(&self) -> String {
//         format("User is {}", self.username);
//     }
// }

// fn main() {

// }

//--------------


// #[derive(Debug)]
// struct User {
// 	username: String,
// 	password: String,
// 	age: u32
// }

// fn main() {
//     let u = User {
//         username:String::from("Subrat"),
//         password:String::from("Sub"),
//         age:28
//     };

//     print!("{:?}", u); //debug
//     print!("{}", u); //display

// }

//=-------------------

// #[derive(Debug)] //this is procedural macro
// struct User {
// 	username: String,
// 	password: String,
// 	age: u32
// }

// fn main() {
//     let u = User {
//         username:String::from("Subrat"),
//         password:String::from("Sub"),
//         age:28
//     };

//     print!("{:?}", u); //debug
//     // print!("{}", u); //display

// }


//----------------------

//debug and dispaly macro

// use std::fmt::Display;
// #[derive(Debug)]
// struct  User {
//     username:String,
//     age:u32
// }

// // impl Display for User {
// //     fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result{
// //         write!(f, "this is the user struct with age {}", self.age)
// //     }
// // }

// fn main() {
//     let  u = User {
//         username:String::from("Subrat"),
//         age: 28
//     };

//     println!("{}", u.username);
//     println!("{}", u.age);

//     println!("{:?}", u);
// }

//--------------------



// use std::fmt::Display;
// #[derive(Debug)]
// struct  User {
//     username:String,
//     age:u32
// }

// fn main() {
//     let  u = User {
//         username:String::from("Subrat"),
//         age: 28
//     };

//     println!("{}", u.username);
//     println!("{}", u.age);

//     println!("{:?}", u);
// }


// //--------------------  copu clone macro
// #[derive(Debug, Copy, Clone)]

// struct User {
//     is_male: bool,
//     age: u32,
//     name: String
// }
// fn main() {
//     let u1 = User {
//         is_male: true,
//         age: 30,
//         name: String::from("Subrat")
//     };

//     let u2: User = u1.clone();

//     print!("{:?} {:?}", u1, u2);
// }

//-- 


fn main() {
}