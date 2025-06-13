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

// use core::panic;

// fn main() {
//     println!("Hello from 1");

//     panic!("Hello");

//     println!("bvsdacfb");
// }

//-=------------------- lecture 22

// fn main() {
//     let r = divide(4, 0);
//     println!("{}", r);
// }

// fn divide(x: i32, y: i32) -> i32 {
//     let res = x/y;
//     res
// }

//----------------

// fn main() {
//     let r = divide(4, 2).unwrap(); //unwarp se agar Ok value aaye toh run hoga warna panic kar jayega
//     println!("{}", r);
// }

// fn divide(x: i32, y: i32) -> Result<i32, String> {
//     if y == 0 {
//         return Err(String::from("Please do not devide with 0"));
//     }
//     Ok(x/y)
// }

//=-----------

// fn main() {
//     let r = divide(4, 2).unwrap_or(-1);
//     println!("{}", r); //result abb panic ki jagah -1 aayega ya result aayega
// }

// fn divide(x: i32, y: i32) -> Result<i32, String> {
//     if y == 0 {
//         return Err(String::from("Please do not devide with 0"));
//     }
//     Ok(x/y)
// }

//--------------

// fn main() {
//     let r = match divide(4, 0) {
//         Ok(num) => num,
//         Err(err) => {
//             println!("Error {err}");
//             -1
//         }
//     };
//     println!("{}", r);
// }

// fn divide(x: i32, y: i32) -> Result<i32, String> {
//     if y == 0 {
//         return Err(String::from("Please do not devide with 0"));
//     }
//     Ok(x/y)
// }

//---------------

// use std::fs::File;

// fn main() {
//     let greeting_file_result = File::open("hello.txt");

//     let greeting_file = match greeting_file_result {
//         Ok(file) => file,
//         Err(error) => panic!("Problem opening the file: {error:?}"),
//     };
// }


//-------------

// use std::fs::File;
// use std::io::ErrorKind;

// fn main() {
//     let greeting_file_result = File::open("hello.txt");

//     let greeting_file = match greeting_file_result {
//         Ok(file) => file,
//         Err(error) => match error.kind() {
//             ErrorKind::NotFound => match File::create("hello.txt") {
//                 Ok(fc) => fc,
//                 Err(e) => panic!("Problem creating the file: {e:?}"),
//             },
//             _ => {
//                 panic!("Problem opening the file: {error:?}");
//             }
//         },
//     };
// }



//------- lecture 23

// fn main() {
//     println!("hello, World");
//     let list = vec![1,2,3,45];
//     let result = largets(&list);
//     println!("largets number is = {result}")
// }

// fn largets(list: &[i32]) -> &i32 {
//     let mut result = &list[0];

//     for item in list {
//         if item > result {
//             result = item;
//         }
//     }
//     result
// }


//----------------



// fn main() {
//     println!("hello, World");
//     let list = vec![1,2,3,45];
//     let list_1 = vec![1.3,2.3,3.4,45.5];
//     let result1 = largetsf(&list_1);
//     let result = largets(&list);
//     println!("largets number is = {result1}, {result}")
// }


// fn largets(list: &[i32]) -> &i32 {
//     let mut result = &list[0];

//     for item in list {
//         if item > result {
//             result = item;
//         }
//     }
//     result
// }

// fn largetsf(list: &[f32]) -> &f32 {
//     let mut result = &list[0];

//     for item in list {
//         if item > result {
//             result = item;
//         }
//     }
//     result
// }


//----------------


// fn main() {
//     println!("hello, World");
//     let list = vec![1,2,3,45];
//     let list_1 = vec![1.3,2.3,3.4,45.5];

//     let result = largets(&list_1);

//     println!("largets number is = {result}")
// }


// fn largets<T: std::cmp::PartialOrd>(list: &[T]) -> &T {
//     let mut result = &list[0];

//     for item in list {
//         if item > result {
//             result = item;
//         }
//     }
//     result
// }


//------------

// struct Point <T, U> {
//     x: T,
//     y: U
// }

// fn main() {
//     let a = Point{x:2, y:7};
//     let b = Point{x:2.3, y: 7};
// }


//-------------

// struct Point <T, U> {
//     x: T,
//     y: U
// }

// impl <T, U> Point<T, U>{
//     fn new(x: T, y:U) -> Self {
//         Self{x, y}
//     }
// }

// fn main() {
//     let a = Point::new(2, 6.4);
//     let b = Point::new(2, 6.2);
// }


//--------------


// struct Point <T, U> {
//     x: T,
//     y: U
// }

// impl <T, U> Point<T, U>{
//     fn new(x: T, y:U) -> Self {
//         Self{x, y}
//     }
// }

// impl Point<f64, f64> {
//     fn calculate_dist(&self) -> f64 {
//         4.0
//     }
// }

// fn main() {
//     let a = Point::new(2, 6.4);
//     let b = Point::new(2.9, 6.2);

//     b.calculate_dist();
// }


//-===-------------------

struct Point<X1, Y1> {
    x: X1,
    y: Y1,
}

impl<X1, Y1> Point<X1, Y1> {
    fn mixup<X2, Y2>(self, other: Point<X2, Y2>) -> Point<X1, Y2> {
        Point {
            x: self.x,
            y: other.y,
        }
    }
}

fn main() {
    let p1 = Point { x: 5, y: 10.4 };
    let p2 = Point { x: "Hello", y: 'c' };

    let p3 = p1.mixup(p2);

    println!("p3.x = {}, p3.y = {}", p3.x, p3.y);
}