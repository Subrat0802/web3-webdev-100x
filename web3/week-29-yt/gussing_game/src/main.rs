//------------------lecture 2 --------------------

// use rand::Rng;
// use std::cmp::Ordering;
// use std::io;

// fn main() {
//     println!("Guess the number!");

//     let secret_number: i32 = rand::thread_rng().gen_range(1..=100);

//     loop {
//         println!("Genrated number: {secret_number}");

//         println!("Please input your guess:");

//         let mut guess = String::new();

//         io::stdin()
//             .read_line(&mut guess)
//             .expect("Failed to read user input");

//         let guess: i32 = match guess.trim().parse() {
//             Ok(num) => num,
//             Err(_) => {
//                 println!("Please enter valid number.");
//                 continue;
//             },
//         };

//         match guess.cmp(&secret_number) {
//             Ordering::Equal => {
//                 println!("You won");
//                 break;
//             },
//             Ordering::Greater => println!("Value is greater"),
//             Ordering::Less => println!("value is less"),
//         }
//     }
// }

//----------------------lecture 3 -------------------------
////mut
// fn main() {
//     let mut x = 5;
//     println!("The value of x is: {x}");
//     x = 6;
//     println!("The value of x is: {x}");
// }

//---------------
// fn main() {
//     let mut x = 5;
//     println!("The value of x is: {x}");

//     const PI: u8 = 20; //type of const must be annotate
//     println!("{PI}");

//     x = 6;
//     println!("The value of x is: {x}");
// }

//constants
// fn main() {
//     const AGE: u32 = 23;
//     println!("{AGE}");
//     const THREE_HOUR: u32 = 60*60*3 + AGE; //const only change or add if another value is also const
//     println!("{THREE_HOUR}")
// }

// fn magical() {

// }

////--------

// fn main() {
//     const ONE_HOUR: u32 = 60*60;  //this will constent
//     let time = ONE_HOUR * 3;
//     println!("{time}")
// }

//Shadowing
// fn main() {
//    let apple = 10; //if i mutate the value then in case only change the value not change the data type

//    let apple = true; //tis is shadowing; in shadowing i can change the data type

//    let count = 30;
//    let count = count + 1;  //after adding value tjis variable will born.
//    println!("{count}");

// }

//-----------

// fn main() {
//     let x = 5;
//     let x = 5 + 1;

//     {
//         let x = x*2;
//         println!("inside scope the value of x is: {x}");
//     }

//     println!("Outside scope the value of x is: {x}");
// }

//------

// fn main() {
//     let mut age = 10;
//     age = age+1; //here age is mutable

//     let age = age;  //shadowing

//     age = age + 1 //here age is immutable
// }

//------------------------lecture 4 DATA TYPE -----------------------

// fn main() {

// let a = 255_u8;
// let b = 1_00_00_000;

//integer overflow
//i8 range = -128 to 127
//u8 range = 0 to 255
// let a:u8 = 256 //integer overflow

// let a = random() + 100;   //work on --release mode //44
// println!("{a}");

// }

// fn random() -> u8 {
//     200
// }

// fn main(){
// let my_f64: f64 = 2.0476325786435465438687;
// let my_f34: f32 = 2.0476325786435465438687;

// println!("{my_f64}");
// println!("{my_f34}");

// let x = 5/2;
// println!("{x}"); //2

// let str = 's';
// let str2 = "subrat";
// }

//tuples

// fn main() {
//     let piyush = (32, false, 1_00_00_000);

//     let (x, y, z) = piyush;

//     println!("0th value is {}", piyush.0);
//     println!("1th value is {}", piyush.1);
//     println!("2nd value is {}", piyush.2);

//     println!("{x}");
//     println!("{y}");
//     println!("{z}");

// }

// //arrays
// fn main(){
//     let a = [1,2,3,4,5]; //there are fixed numbers //or same data type value al are homogenious
//     // let b = [10; 5]; //[10, 10, 10, 10, 10]

//     println!("Value is {}", a[random()]);

// }

// fn random() -> usize {
//     7
// }

//lecture-5------------------------------

// fn main() {
//     let x = 20;
//     my_function(x); //argumets
// }

// fn my_function(x: i32) { //parameters
//     println!("Hello from my function {x}");
// }

// fn main() {
// //     let y = {
// //         let x = 3; //here is ; thats why this is statement
// //         x + 1  //if here i add ; then this become statement and statement does not return any value thats why not here add ; to make this expression
// //     };

// //     println!("The value of y is: {y}");
//     // let y = add(2,3);
//     // println!("value of add: {y}");
//     let y = is_even(5);
//     println!("value of y is: {y}");
// }

//fn statement does not return any value let x=a+b this is statement
//fn expression returns value

// fn add(x:i32, y:i32) -> i32{
//     x+y  //make this expression
// }

// fn is_even(x: i32) -> bool {
//     if x % 2 == 0 {
//         return true;  //early return
//     };
//     println!("The number is odd");
//     false
// }

//------------lecture - 6 -------------------------
//control flow in rust
// fn main() {
//     let number = 3;

//     if number < 5 {
//         println!("condition was true");
//     } else {
//         println!("condition was false");
//     }
// }

//===========

// fn main() {
//     let number = 3;

//     if number {
//         println!("number was three");
//     }
// }

//----------------

// fn main() {
//     let number = 6;

//     if number % 4 == 0 {
//         println!("number is divisible by 4");
//     } else if number % 3 == 0 {
//         println!("number is divisible by 3");
//     } else if number % 2 == 0 {
//         println!("number is divisible by 2");
//     } else {
//         println!("number is not divisible by 4, 3, or 2");
//     }
// }

//--------------------

// fn main() {
//     let y = is_even(3);
//     println!("Value of y is {y}");

//     let x: i32 = if y {10} else {20};
//     println!("x = {x}");

// }

// fn is_even(x: i32) -> bool {
//     if x % 2 == 0 {
//         return true;
//     }
//     println!("the number is not even");
//     false
// }

//------------------------

// fn main(){
// loop {
//     println!("hello from main fn");
// }

//---------

// let mut num = 0;

// loop {
//     num = num + 1;
//     println!("Value of number is {num}");

//     if num == 10 {
//         break;
//     }
// }
// println!("this is an end");

//==================

// let mut num = 1;

// loop {

//     println!("Value of number is {num}");

//     if num == 5 {
//         continue;
//     }

//     if num == 10 {
//         break;
//     }

//     num = num + 1;
// }
// println!("this is an end");

//-----------------

// let mut num = 1;

// let result = loop {

//     println!("Value of number is {num}");

//     if num == 10 {
//         break 70;
//     }

//     num = num + 1;
// };
// println!("this is an end {result}");

//===============

// let mut number = 3;

// while number != 0 {
//     println!("{number}!");

//     number -= 1;
// }

// println!("LIFTOFF!!!");

//--------------------

// let a = [10, 20, 30, 40, 50];
// let mut index = 0;

// while index < 5 {
//     println!("the value is: {}", a[index]);

//     index += 1;
// }

//------------------

// let a = [10, 20, 30, 40, 50];

// for element in a {
//     println!("the value is: {element}");
// }

//-------------

// for x in (1..=10).rev() {
//     println!(" value of x is :{x}");
// }
// }

//-------------lectur 7 -----  memory management Ownership in rust

// fn main() {
// let s = "Hello world";
// s.push_str("heleloo");
// println!(s);

// {
//     let mut x = "Hey from xscope";
// }

//--------

// let mut s = String::from("Hello");
// s.push_str(", world");

// println!("{s}");

//-------------

// let mut x = 5;
// let y = x; //copy
// x = 10;

// println!("x is {x} y is {y}");

//---------------------

// let s1 = String::from("i am x");

// let s2 = s1;

// println!("s1 is {s2}");  //we can notuse s1 here because s1 i invalid. and in this cas only s2 will clear the memory.

//-------------------

// let s1 = String::from("i am x");

// let mut s2 = s1.clone(); //clone create new memory in heap
// s2.push_str("ckbc");
// println!("s1 is {s2}");
// println!("s1 is {s1}");

// }

//=====================

//-------------------------

// fn main() {
//     let num = 10;
//     let result = add(num);
//     let s = String::from("Subrat mishra");

//     let s2 = take_ownership(s);  //here this takes ownership of the variable, now after that we can not use this variable in this scope beacuse another scope that use this variable will use and terminate this variable

//     println!("Num is {num} and result = {result}");
//     println!("value of name is {s2}");
// }

// fn take_ownership(s: String) -> String{
//     println!("inside ownership {s} ");
//     s
// }

// fn add(x :u32) -> u32 {
//     x + 10
// }

//======================

// fn main() {
//     let num = 10;
//     let result = add(num);
//     let s = String::from("Subrat mishra");

//     let s2 = take_ownership(s);  //here this takes ownership of the variable, now after that we can not use this variable in this scope beacuse another scope that use this variable will use and terminate this variable

//     println!("Num is {num} and result = {result}");
//     println!("value of name is {s2}");
// }

// fn take_ownership(s: String) -> String{
//     println!("inside ownership {s} ");
//     s
// }

// fn add(x :u32) -> u32 {
//     x + 10
// }

//---------

//  fn main() {
//     let s = String::from("Subrat mishra");

//     let (s1, len)= cal_length(s);

//     println!("the length of{s1} is {len}");

//  }

//  fn cal_length(s: String) -> (String, usize) {
//     let result = s.len();
//     (s, result)
//  }

//----------lecture - Referance and borrowing

// fn main() {
//     let s1 = String::from("Subrat mishra");

//     let len = cal_length(&s1); //&referance = borrowing

//     println!("the length of{s1} is {len}");
// }

// fn cal_length(s: &String) -> usize {
//     let result = s.len();
//     result
// }

//---------------

// fn main() {
//     let mut s1 = String::from("Subrat mishra");

//     let len = cal_length(&mut s1);

//     println!("the length of{s1} is {len}");
// }

// fn cal_length(s: &mut String) -> usize {
//     s.push_str("Hello ");
//     s.len()
// }


//------------

// fn main() {
//     let mut s1 = String::from("subrat");
//     let s2 = &mut s1;
   
//     s2.push_str("Bye");

// }



// fn main() {
//     let mut s = String::from("Subrat");

//     let r1 = &s;
//     let r2 = &s;

//     println!("{} {}", r1, r2);

//     let r3 = &mut s;  //no problem here i can borrow ref s because r1 and r2 are the out of scope

//     println!("{}", r3);

// }



// -----------lecture 9 Slice ---------\


// fn main(){
//     let s = String::from("hello world");
//     let res = find_first_word( &s);

//     println!("for string {s} Result is {res}");
// }

// fn find_first_word(input: &String) -> usize {
//     let s = input.as_bytes();

//     for(i, &item) in s.iter().enumerate(){
//         if item == b' ' {
//             return i;
//         }
//     }
//     s.len()
// }


//------------------------

// fn main(){
//     let mut s = String::from("hello world");
    
//     let hello = &s[0..5];
//     let world = &s[6..11];

//     s.clear();

//     println!("Hello = {hello}");
//     println!("world = {world}");
// }

// fn find_first_word(input: &String) -> usize {
    let s = input.as_bytes();

    for(i, &item) in s.iter().enumerate(){
        if item == b' ' {
            return i;
        }
    }
    s.len()
}


//---------------------

// fn main(){
//     let s = String::from("hello world");
//     let res = find_first_word( &s);

//     println!("for string {s} Result is {res}");
// }

// fn find_first_word(input: &String) -> usize {
//     let s = input.as_bytes();

//     for(i, &item) in s.iter().enumerate(){
//         if item == b' ' {
//             return &input[..i];
//         }
//     }
//     &input[..];
// }