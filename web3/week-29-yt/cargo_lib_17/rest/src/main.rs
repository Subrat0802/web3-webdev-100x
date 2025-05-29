// fn main() {
//     let mut vec = Vec::new();
//     let mut vec1 = vec![1,2,3,4];

//     vec.push(1);
//     vec.push(2);

//     vec1.push(12);

//     println!("vec = {:?}", vec);
//     println!("vec = {:?}", vec1);
// }

//---------

// fn main() {

//     let vec1 = vec![1,2,3,4];

//     println!("vec = {:?}", vec1);
// }

// fn main() {
//     let v = vec![1, 2, 3, 4, 5];

//     let third: &i32 = &v[2];
//     println!("The third element is {third}");

//     let third: Option<&i32> = v.get(2);
//     match third {
//         Some(third) => println!("The third element is {third}"),
//         None => println!("There is no third element."),
//     }
// }

// use std::collections::btree_map::Values;

// #[derive(Debug)]
// enum SpreadsheetCell {
//     Int(i32),
//     Float(f64),
//     Text(String),
// }
// fn main() {
//     let row: Vec<SpreadsheetCell> = vec![
//         SpreadsheetCell::Int(3),
//         SpreadsheetCell::Text(String::from("blue")),
//         SpreadsheetCell::Float(10.12),
//         SpreadsheetCell::Int(4),
//         SpreadsheetCell::Text(String::from("red")),
//         SpreadsheetCell::Float(10.12),
//     ];

//     println!("My vec = {:#?}", row);


//     match row.get(1) {
//         Some(SpreadsheetCell::Int(value)) => println!("The value is int {value}"),
//         Some(_) => println!("This is some other value"),
//         None => println!("None")
//     }
// }



//---------------


// fn main() {
//     let mut hello = String::from("hello");

//     hello.push_str(" in hindi");

//     hello.push('.');

//     println!("{}", hello);

// }
//============lecture 20


// fn main() {
//     use std::collections::HashMap;
//     let mut scores = HashMap::new();

//     scores.insert(String::from("Blue"), 10);
//     scores.insert(String::from("Yellow"), 50);

//     let score = scores.get(&String::from("Blue")).unwrap_or(&0);
//     println!("Score = {score}");
// }



//---------lecture 21

use core::panic;

fn main() {
    println!("Hello from 1");

    panic!("Hello");

    println!("bvsdacfb");
}