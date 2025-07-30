// struct User {
//     username:String,
//     password:String
// }


// fn main() {
//     let s = "{username:"Subrat", password:"123"}" //user is sending you this object in string form 

//     let u: User = json.desiarilize(s);
// }



// //------------------ serde
// use serde::{Serialize, Deserialize};
// #[derive(Serialize, Deserialize, Debug)]

// struct User {
//     username:String,
//     password:String
// }

// fn main() {
//     let u = User {
//         username:String::from("Subrat"),
//         password:String::from("123")
//     };

//     let serialized_string = serde_json::to_string(&u);
//     // println!("{:?}", serialized_string);

//     match serialized_string {
//         Ok(str) => println!("{}", str), //this is will print serialized form to send server
//         Err(_) => println!("{}", "Err while converting to string")
//     }
// }


//----------------------


// use serde::{Serialize, Deserialize};
// #[derive(Serialize, Deserialize, Debug)]

// struct User {
//     username:String,
//     password:String
// }

// fn main() {
//     let u = User {
//         username:String::from("Subrat"),
//         password:String::from("123")
//     };

//     let serialized_string = serde_json::to_string(&u);
//     let user_string = serialized_string.unwrap(); //another way to print unwrap

//     println!("{}", user_string);


// }


//----------------------
// use serde::{Serialize, Deserialize};
// #[derive(Serialize, Deserialize, Debug, Clone)]  //these add functionality to User struct
// struct User {
//     username:String,
//     password:String
// } 

// fn main() {
//     let  s = String::from("{\"username\": \"subrat\", \"password\": \"12345\"}");
//     let u: Result<User, serde_json::Error> = serde_json::from_str(&s);  //deserialized the data

//     println!("{:?}", u.unwrap());
       
// }

//---------------------------

// use serde::{Serialize, Deserialize};
// #[derive(Serialize, Deserialize, Debug, Clone)]
// struct User {
//     username:String,
//     password:String
// }

// fn main() {
//     let  s = String::from("{\"username\": \"subrat\", \"password\": \"12345\"}");
//     let u: Result<User, serde_json::Error> = serde_json::from_str(&s);

//     println!("{:?}", u.unwrap());
       
// }

//---------------------

// use serde::{Serialize, Deserialize};
// use serde_json::{self, Value};

// #[derive(Serialize, Deserialize, Debug)]
// struct Person {
//     name: String,
//     age: u32,
// }

// fn main() {
//     let person = Person {
//         name: String::from("John Doe"),
//         age: 30,
//     };

//     // Serialize to JSON
//     let json_str = serde_json::to_string(&person).unwrap();
//     println!("Serialized JSON: {}", json_str);

//     // Deserialize from JSON
//     let deserialized_person: Person = serde_json::from_str(&json_str).unwrap();
//     println!("Deserialized Person: {:?}", deserialized_person);
// }




