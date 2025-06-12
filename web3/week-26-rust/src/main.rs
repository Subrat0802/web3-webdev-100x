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

fn main() {
    let str = String::from("harkirat singh");
    println!("First name {}", get_first_name(str))
    
}

fn get_first_name(str: String) -> String {
    let mut fristname = String::from("");
    for i in str.chars() {
        if i == ' ' {
            break;
        }
        fristname.push(i)
    }
    return fristname;
}
