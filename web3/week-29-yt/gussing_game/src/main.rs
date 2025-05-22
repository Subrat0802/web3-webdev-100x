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

fn main() {
//     let y = {
//         let x = 3; //here is ; thats why this is statement
//         x + 1  //if here i add ; then this become statement and statement does not return any value thats why not here add ; to make this expression 
//     };

//     println!("The value of y is: {y}");
    // let y = add(2,3);
    // println!("value of add: {y}");
    let y = is_even(5);
    println!("value of y is: {y}");
}

//fn statement does not return any value let x=a+b this is statement
//fn expression returns value


// fn add(x:i32, y:i32) -> i32{
//     x+y  //make this expression
// }

fn is_even(x: i32) -> bool {
    if x % 2 == 0 {
        return true;  //early return
    };
    println!("The number is odd");
    false
}