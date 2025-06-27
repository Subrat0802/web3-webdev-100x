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


//=====================+++++++++###########   again


//Traits


// trait Shape {
//     fn area(&self) -> u32;
// }

// struct Rect {
//     width:u32,
//     heigth:u32
// }

// impl Shape for Rect {
//     fn area(&self) -> u32 {
//         return self.width * self.heigth;
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

// fn main(){
//     let r = Rect {
//         width: 10,
//         heigth:20
//     };

//     let cir_a = Circle {
//         radius: 3
//     };
//     let ans_cir = get_area(cir_a);
//     let ans = get_area(r);
//     println!("{} {}", ans, ans_cir);
// }

// fn get_area<T: Shape>(r:T) -> u32 { //genric T is bound to the Shape trait
//     return r.area();
// }


//----------------------------


//procedural macros

// struct User {
//     username:String,
//     password:String,
//     age: u32
// }

// impl User {
//     fn toString(&self) -> String {
//         return self.username.clone();
//     }
// }


// fn main() {
//     let name = User {
//         username: String::from("Subrat"),
//         password: String::from("hello"),
//         age:28
//     };

//     println!("{}", name.username);
// }



//---------------

// #[derive(Debug)]
// struct User {
//     username:String,
//     password:String,
//     age: u32
// }

// fn main() {
//     let x = User {
//         username: String::from("Subrat"),
//         password: String::from("hello"),
//         age:28
//     };

//     println!("{}", x); //basically this x is custom 
                         //struct that not implemnted the Display  trait , 
                         // if we use here string or number that not required
                         // dispaly trait because it implemented the display trait
                         //to prevent this we will use Debug macro (procedural macro)
// }



//--------------------------


// #[derive(Debug)]//use debug macro for user, this is procidural macro and println! is declarative macro
// struct User {
//     username:String,
//     password:String,
//     age: u32
// }

// fn main() {
//     let x = User {
//         username: String::from("Subrat"),
//         password: String::from("hello"),
//         age:28
//     };

//     println!("{:?}", x); //debug
//     // println!("{}", x); //display 
// }



//-----------------------------


// struct User {
//     username: String
// }

// fn main() {
//     let r = User {
//         username: String::from("Subrat")
//     };

//     println!("{}", r.username); //it will print because String is implemented the display, debug trait
//     println!("{}", r); //it will not print because our struct does not implemented the the display, debug trait

// }


//--------------------

//to prevent struct debug display trait error we use Debug trait and that is declarative macro 

// #[derive(Debug)] //this one Debug declrative macro 
// struct User {
//     username: String
// }

// fn main() {
//     let r = User {
//         username: String::from("Subrat")
//     };

//     println!("{}", r.username); //it will print because String is implemented the display, display trait
//     println!("{:?}", r); //now this will print, because we added the Debug macro to our code 

//     //to print r we need to add trait Debug trait, and that is very hard to write traits for every struct different - 2 type
//     // of trait. so we use procedural macros that will add different types of traits in your code base here we use Debug trait


// }

//-----------------------

//Debug and display trait

// #[derive(Debug)]
// struct  User {
//     username: String,
//     age:u32
// }

// fn main(){
//     let u = User{
//         username:String::from("Subrat"),
//         age:28
//     };
//     println!("{}", u.username);
//     println!("{:?}", u);
// }


//--------------

// There is debug trait and debug macros, trait we write use (impl Debug for User {} "this is struct") 
                                                        //from lib, macro just we derive

// There is debug trait and debug macros, trait we write use Debug from lib, macro just we derive 

//-----------------------------


// fn main() {
//     let user1 = String::from("Subrat");
//     let user2 = user1;
//     println!("{}, {}", user1, user2); //this show error because user1 dont have ownership of String value Subrat(
//     //   it exist in heap) and now user1 doesnt have any value because it transfer ownership to user2, now user2 have
//     // the owner hsip of the string Subrat that present in heap memory
// }


//=========-----------

// fn main() {
//     let user1 = String::from("Subrat");
//     let user2 = &user1; //now user2 just borrow the user1 value
//     println!("{}, {}", user1, user2); 
// }

//---------------

// fn main() {
//     let user1 = 1;
//     let user2 = user1;   //here we copy the original variable, it present in stack
//     println!("{}, {}", user1, user2); //now for number it does not give error 
// }


//------------


// fn main() {
//     let user1 = 2;
//     print_it(user1);

//     println!("{}", user1); //in string case this will give error because string, vec, hash store in heap and 
//                            //variable have just ref of heap memory, in case of number and other data type that stored
//                            //in stack the just copy to another variable
// }

// fn print_it(s: u32) {
//     println!("{}", s);
// }

//-----------------

//Copy Clone

fn main() {
    let user1 = 2;
    print_it(user1);

    println!("{}", user1); 
}

fn print_it(s: u32) {
    println!("{}", s);
}