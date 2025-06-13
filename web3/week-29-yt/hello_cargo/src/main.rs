// fn main() {
//     let a = String::from("Subrat"); //this variable have ownership

//     let res = get_length(&a); //this fn borrow the variable (means this have referance of varibale)

//     println!("The length of str is {res}"); //this will print the value

//     print!("{a}"); // this will print the variable

// }

// fn get_length(a:&String) -> usize {   //using & before String that means this fn have ref of the value
//     let str_len = a.len();
//     str_len //this will return the length of string
// }

///------------------

// fn main() {
//     let str = String::from("Subrat");

//     let (res, str) = get_length(str);

//     println!("{res}");

//     println!("{str}");
// }

// fn get_length(str: String) -> (usize, String) {
//     let s = str.len();
//     (s, str)
// }

//-----------------

// fn main() {
//     let str = String::from("Subrat mishra");

//     let res = get_length(&str);

//     println!("{res}");

//     println!("{str}");
//     println!("{str}");
//     println!("{str}");
//     println!("{str}");
// }

// fn get_length(str: &String) -> usize {
//     let res = str.len();
//     res
// }

//-------------

// fn main() {
//     let str = String::from("Harkirat");
//     let ref1 = &str;
//     let ref2 = &str;

//     println!("{} {}", ref1, ref2);
// }

//----------------

// fn main() {
//     let mut str = String::from("Harkirat");
//     let ref1 = &mut str;
//     let ref2 = &mut str; //cannot borrow `str` as mutable more than once at a time

//     println!("{} {}", ref1, ref2);
// }

//---------------------------

// fn main() {
//     let mut str = String::from("Harkirat");
//     let ref1 = &mut str;
//     ref1.push_str("Singh");
//     let ref2 = &str;

//     println!("{}", ref2);
// }

//----------------------

// fn main() {
//     let str = String::from("SubratMishra");
//     let str1 = &str;
//     let str2 = &str;
//     println!("{str1} {str2}");
// }

//---------------

// fn main() {
//     let mut str = String::from("AMan bisare");
//     let str2 = &mut str;

//     let str3 = &mut str;

//     println!("{str2} {str3}");
// }

// /--------------------

// fn main() {
//     let mut str = String::from("Subrat mishra");
//     str.push_str(" From rewa");
//     println!("{str}");
// }


//-000000000000----------------

// fn main() {
//     let mut str = String::from("Subrat mishra");
//     str.push_str(" From rewa");
    
//     let str2 = &str;
//     str2.push_str("MP");
// }


///-------------------
/// 
/// 
// fn main() {
//     let mut str = String::from("Subrat mishra");
//     str.push_str(" From rewa");
    
//     let str2 = &mut str;
//     str2.push_str("MP");


//     println!("{str}")
// }

//-------------------

// fn main() {
//     let mut str = String::from("Subrat ");
//     let str1 = &mut str;
//     let str2 = &str;

//     println!("{str1} {str2}")
// }


//----------------
// fn main() {
//     let mut str = String::from("Subrat ");
//     let str1 = &mut str;
//     println!("{str1}");
//     let str2 = &str;

//     println!("{str2}")
// }

//-----------------

// fn main() {
//     let mut str = String::from("Subrat mishra");
//     let str1 = &mut str;
//     str1.push_str(" from rewa");
//     println!("{str1}"); 

//     let s = &str;
//     let s1 = &str;

//     println!("{s}, {s1}");
// }


// -=-----------------

fn main() {
    
}