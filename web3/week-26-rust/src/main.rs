// fn main() {
//     println!("Hello, world!");
//     let ans:u32 = sum(1,2);
//     println!("{}",ans);
//     println!("{}", is_even(10))
// }

// fn sum(a:u32, b:u32) -> u32 {
//     return  a+b;
// }

// fn is_even(a:u32) -> bool {
//     return a%2 == 0
// }

// fn main(){
//     // let name: String = String::from("Harkirat");

//     let name: Vec<i32> = vec![1,2,3];

//     println!("{:?}", name);
// }

// fn main(){
//     for i: i32 in 0..100{
//         println!("{}", i);
//     }
// }

// fn main(){
//      let mut x:i32 = 1;
//      x = 2;

//      println!("{}", x);
// }

// fn main(){
//     let mut x:i32 = 1;

//     x = 1100;

//     create_str();

//     println!("{}", x);

// }

// fn create_str(){
//     let mut name: String = String::from("harkirath");

// let name2: String = name;

// print!("{}", name);
// }

// fn main(){
//     let name:String = String::from("harkirath");
// let len: usize = get_len(name); //transfer ownership to another variable
// println!("{}", len);
// }

// fn get_len(s: String) -> usize {
//     return  s.len();
// }

//Practice

//Number
// fn main() {
//     let mut num: i32 = 124;
//     for i in 0..100 {
//         num += 127;
//     }
//     print!("Number: {}", num)
// }

//===============
//String
// fn main() {
//     let is_male = true;
//     let above_18 = true;

//     if is_male {
//         println!("Youre male");
//     }
//     else{
//         println!("You're not male");
//     }
//     if is_male && above_18 {
//         println!("you're aligible");
//     }
// }

//============
//Array

// fn main() {
//     let arr = [11,12,13,14,15];
//     println!("{}", arr.len());
// }

// fn main() {
//     let arr = [11,12,13,14,15];
//     println!("{}", arr[2]);
// }

// fn main() {
//     let arr = [1,2,3,4,5];
//     println!("{}", arr.len());
//     let mut x = 0;
//     for i in 0..arr.len(){
//         x += i;
//     }

//     println!("{}", x);
// }

//===============

// fn main(){
//     let mut arr = [1,2,3,45];

// }

// vec
// fn main(){
//     let mut xs = vec![12,3,4];
//     print!("{}", xs.len());
//     xs.push(5);
//     print!("{}", xs.len());
// }

// //===========
// fn main() {
//     let mut xs = vec![9,2,3,45];
//     xs.push(65);
//     let mut x = 0;
//     for i in 0..xs.len(){
//        x+=xs[i];
//     //    println!("{}", xs[i]);
//     }
//     println!("{}", x);
//     println!("{}", xs.len());
// }

//-----------------
// pub fn main() {
//     let x = 99;
//     let is_even = is_even(x);
//     if is_even {
//         print!("{} is even", x);
//     } else {
//         print!("{} is odd", x);
//     }
// }

// pub fn is_even(x: i32) -> bool {
//     return x % 2 == 0;
// }

// fn main() {
//     let str = String::from("harkirat singh");
//     println!("First name {}", get_first_name(str))
    
// }

// fn get_first_name(str: String) -> String {
//     let mut fristname = String::from("");
//     for i in str.chars() {
//         if i == ' ' {
//             break;
//         }
//         fristname.push(i)
//     }
//     return fristname;
// }




// revision   

// fn main() {
//     println!("hello world");
//     let ans = 34;
//     println!("{}", ans);
//     println!("{}", is_even(ans));
//     let x = ans;
//     println!("{}", x);
//     let y = x+2;
//     println!("{}", y);
// }

// fn is_even(a: i32) -> bool {
//     return a%2 == 0;
// }


//-----------------

// fn main() {
//     let mut num = vec![1,2,3];
//     println!("{:?}", num);
//     num.push(5);
//     println!("{:?}", num);
// }

//-----------------

// fn main(){
//     let x = 1;
//     println!("{}", x);
// }

//===========

// fn main() {
//     let is_male = true;
//     let is_above_19 = true;

//     if is_male {
//         println!("Youre male");
//     }else{
//         println!("youre not male")
//     }
//     if is_male && is_above_19 {
//         println!("youre legal male");
//     }
    
// }


//-----------------


// fn main() {
//     let greeting = String::from("Subrat");
//     println!("{}", greeting);
// }

//--------------

// fn main() {
//     let arr = [1,2,34,5,6];
//     println!("{:?}", arr);
// }


//--------fn m

// fn main() {
//     let mut x = vec![1,2,34,5,6];
//     x.push(20);
//     println!("{:?}", x);
// }

//------------------



// pub fn main() {
//     let x = 10;
//     let is_even = is_even(x);

//     if is_even {
//         println!("{}", "is even");
//     }else {
//         println!("{}", "is odd");
//     }
// }

// fn is_even(x: i32) -> bool {
//     return x%2 == 0;
// }

//--------------

// fn main() {
//     let x = String::from("subrat");
//     let len = get_len(x);
//     println!("{}", len);
// }   

// fn get_len(x: String) -> usize {
//     return x.len();
// }

//f===============

// fn main(){ 
//     let x = vec![1,2,34,56,7];
//     let mut y = 0;
//     for i in x  {
//         y += i;
//     }

//     println!("{}", y);
// }



//---------------------------------------------------

// fn main() {
//     let str = String::from("Subrat mishra");
//     println!("first name is: {}", get_first_name(str));
// }

// fn get_first_name(str: String) -> String {
//     let mut first_name = String::from("");

//     for c in str.chars() {
//         if c == ' ' {
//             break;
//         }
//         first_name.push(c);
//     }

//     first_name
// }


//----------------

//  fn main() {
//     let name = String::from("Subrat Mishra");
//     println!("{}", first_name(name));
//  }

//  fn first_name(c: String) -> String {
//     let mut first_n = String::from("");

//     for c in c.chars() {
//         if c == ' ' {
//             break;
//         }
//         first_n.push(c);
//     }

//     first_n
//  }



//------------------


// fn main() {
//     let mut x = 5;
//     println!("{}", x);

//     x = 6;
//     println!("{}", x);

// }

//------------

fn main() {
    let str = String::from("Harkirat");
    let len = get_length(&str);
    println!("{} {}", str, len);
}

fn get_length(str: &String) -> usize {
    let len = str.len();
    return len
}
