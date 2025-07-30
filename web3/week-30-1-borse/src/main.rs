// use borsh::{BorshSerialize, BorshDeserialize};

// #[derive(BorshSerialize, BorshDeserialize, Debug, PartialEq)]

// struct User {
//     username:String,
//     password:String
// }

// fn main() {
//     let u = User {
//         username:String::from("Subrat"),
//         password:String::from("1234")
//     };

//     let mut v: Vec<u8> = Vec::new();

//     let ans = u.serialize(&mut v);

//     print!("{:?}", v);

//     let user = User::try_from_slice(&v).unwrap();
//     println!("{}", user.username);
// }

//-------------------

// use borsh::{BorshSerialize, BorshDeserialize};

// #[derive(BorshSerialize, BorshDeserialize, Debug, PartialEq)]

// struct User {
//     username:String,
//     password:String
// }

// fn main() {
//     let u = User {
//         username:String::from("Subrat"),
//         password:String::from("1234")
//     };

//     let mut v: Vec<u8> = Vec::new();

//     let ans = u.serialize(&mut v);

//     match ans {
//         Ok(_) => print!("{:?}", v),
//         Err(_) => print!("Error while serialize")
//     }
// }

//-----------------------

// use borsh::{BorshSerialize, BorshDeserialize};

// #[derive(BorshSerialize, BorshDeserialize, Debug, PartialEq)]

// struct User {
//     username:String,
//     password:String
// }

// fn main() {
//     let u = User {
//         username:String::from("Subrat"),
//         password:String::from("1234")
//     };

//     let mut v: Vec<u8> = Vec::new();

//     let ans = u.serialize(&mut v);

//     print!("{:?}", v);

//     let user = User::try_from_slice(&v);

//     print!("{:?}", user);
// }

//----------------------Lifetime

// fn main() {
//     let str1 = String::from("Subrat");
//     let str2 = String::from("Rewa");

//     let ans = longest_string(str1, str2);

//     println!("{}", ans);

// }

// fn longest_string(s1: String, s2: String) -> String {
//     if s1.len() > s2.len() {
//         return s1;
//     }else{
//         return s2;
//     }
// }



//----------------

// fn main() {
//     let str1 = String::from("Subrat");
//     let str2 = String::from("Rewa");

//     let ans = longest_string(&str1, &str2);

//     println!("{}", ans);

// }

// fn longest_string(s1: &String, s2: &String) -> &String {
//     if s1.len() > s2.len() {
//         return s1;
//     }else{
//         return s2;
//     }
// }

//---------------

// fn main() {
//     let str1 = String::from("Subrat");
//     let ans;
//     {
//         let str2 = String::from("rewacdcccdsacdc"); //if this string i longer then str1 then 
//         //this will not print out of the scope and in this case this is bigger so this ned to print out of the scope 
//         ans = longest_string(&str1, &str2);
//     }
//     println!("{}", ans);
// }

// fn longest_string(s1: &String, s2: &String) -> &String {
//     if s1.len() > s2.len() {
//         return s1;
//     }else{
//         return s2;
//     }
// }

//----------------

// fn main() {
//     let str1 = String::from("Subrat");
//     let ans;
//     {
//         let str2 = String::from("");
//         ans = longest_string(&str1, &str2);
//     } //str2 lifetime is this


//     println!("{}", ans);
// } //str1 lifetime is this

// fn longest_string<'a, 'b>(s1: &'a String, s2: &'b String) -> &'b String {
//     if s1.len() > s2.len() {
//         return s1;
//     } else {
//         return s2;
//     }

//     return s2;
// }



//-----------------------------


fn main() {
    let str1 = String::from("Subrat");
    let ans;
    {
        let str2 = String::from("");
        ans = longest_string(&str1, &str2);
        println!("{}", ans);
    }
    //answer will dangling pointer if str2 > str1

    
}

fn longest_string<'a>(s1: &'a String, s2: &'a String) -> &'a String { //a takes smaller scope consider smaller scope lifetime
    if s1.len() > s2.len() {
        return s1;
    } else {
        return s2;
    }
}



//-------------------------

// struct User<'a>{
//     username: &'a str,
//     password: &'a str
// }

// fn main(){
//     let str1 = String::from("Subrat");
//     let str2 = String::from("Mishra");

//     let u = User {
//         username:&str1,
//         password: &str2
//     };

//     println!("{} {}", u.username, u.password);
// }