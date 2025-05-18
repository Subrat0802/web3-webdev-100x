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
//     let name: String = String::from("harkirath");

// let name2: String = name;

// print!("{}", name);
// }






fn main(){
    let name:String = String::from("harkirath");
let len: usize = get_len(name); //transfer ownership to another variable
println!("{}", len);
}

fn get_len(s: String) -> usize {
    return  s.len();
}