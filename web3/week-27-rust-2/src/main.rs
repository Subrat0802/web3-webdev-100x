// fn main() {
//     let str = String::from("Harkirat");
//     let len = get_length(&str);
//     println!("{} {}", str, len);
// }

// fn get_length(str: &String) -> usize {
//     let len = str.len();
//     return len
// }
// fn main() {
//     let mut str = String::from("Harkirat");
//     let ref1 = &mut str;
//     ref1.push_str("Singh");
//     let ref2 = &mut str;

//     println!("{}", ref2);
// }

// fn main() {
//     let st = String::from("Subrat");
//     println!("{}, {}",st, calculate_length(&st));

// }

// fn calculate_length(st: &String) -> usize{
//     let x = st.len();
//     return x
// }

// fn main(){
//     let mut st = String::from("Subrat");

//     println!("{}", append_value(&mut st));
// }

// fn append_value(st: &mut String) -> &String {
//     st.push_str("mishra");
//     return st
// }

// fn main(){
//     let mut s1 = String::from("Subrat");
//     let _s2: &mut String = &mut s1;
//     // let _s3: &String = &s1; //you cant use another borrowed variable immutable, if one of borrowed variable are mutable you need to make mutable all, otherwise code can't compile

//     println!("{}, {}", s1, _s2)
// }

// fn main(){
//     let str = String::from("Subrat");
//     let _str2 = &str;
//     let _str3: &String = &str;

//     println!("{} {}", _str2, _str3);
// }

// fn main(){
//     let mut s1:String = String::from("subrat"); //this is variable that owns the value

// }

// case 1: variable can borrow another varibale value
// case 2: if borrowed variable is immutable then mnay variables can borrow the variable value
// case 3: if borrowed variable is mutable and another variable that borrow the variable value is immutable then the variable that boroow the valiable value can't change or add values.
// case 4: if borrowed variable is mutable and another variable that borrow the variable value can is mutable then in case varibale can be changed by the another variable that borrow the value;
// case 5: if there are two variables both are mutable and borrow value from another variable(that is also mut) in this case only one can borrow the value
// case 6: in case if mut varable is not in used and after that the another variable is borrow the value in that case th code will complied.

// fn main() {
//     let mut str = String::from("Harkirat");
//     let ref1 = &mut str;
//     ref1.push_str("Singh"); //mut variable ends
//     //----------- after that ref1 will not in use, ""So this code will work, even there is two variable that borrow another variable {mut},
//     //-----------
//     let ref2: &mut String = &mut str;

//     println!("{}", ref1); //this code will run
// }

//Struct

// struct Rect{
//     height:f32,
//     width:f32
// }

// impl Rect {
//     fn area(&self) -> f32{
//         return self.width * self.height;
//     }

//     fn add(&self) -> f32{
//         return self.width + self.height;
//     }

//     fn print_something() {
//         println!("{}", "Subrat");
//     }
// }
// fn main(){
//     let r:Rect = Rect {
//         width: 10.1,
//         height: 12.2
//     };

//     println!("{} {}", r.width, r.height);
//     println!("{} {}", r.area(), r.add());
//     Rect::print_something();

// }

//----------------------------------

// struct Rect{
//     height:f32,
//     width:f32
// }

// impl Rect {
//     fn area(&self) -> f32{
//         return self.width * self.height;
//     }

//     fn add(&self) -> f32{
//         return self.width + self.height;
//     }

//     fn print_something() {
//         println!("{}", "Subrat");
//     }
// }
// fn main(){
//     let r:Rect = Rect {
//         width: 10.1,
//         height: 12.2
//     };

//     println!("{} {}", r.width, r.height);
//     println!("{} {}", r.area(), r.add());
//     Rect::print_something();

// }

// enums---------

// enum Direction {
//     North,
//     East,
//     South,
//     West,
// }

// fn main() {
//     let my_direction = Direction::North;
//     let new_direction = my_direction; // No error, because Direction is Copy
//     move_around(new_direction);
// }

// fn move_around(direction: Direction) {
//     // implements logic to move a character around
// }

//pattern matching --------------------

// enum Direction {
//     North,
//     East,
//     South,
//     West,
// }

// fn main() {
//     let my_direction = Direction::North;
//     let new_direction = my_direction; // No error, because Direction is Copy
//     move_around(new_direction);
// }

// fn move_around(dir: Direction) {

//     match dir {
//         // Direction::East => print!("East direction"),
//         Direction::North => print!("North direction"),
//         // Direction::West => print!("West direction"),
//         Direction::South => print!("South direction"),
//         _ => println!("horizontal dir"),
//     }
// }

//------------------

// use std::f32::consts::PI;

// enum Shape {
//     Square(f32),
//     Circle(f32),
//     Rectangel(f32, f32)
// }

// fn main(){
//     let _shape_squ: Shape = Shape::Square(10.0);
//     let _shape_rect: Shape = Shape::Rectangel(12.0, 10.0);
//     let _shape_cir: Shape = Shape::Circle(13.0);

//     let ans = cal_area(_shape_squ);
//     println!("{}", ans);
// }

// fn cal_area (s:Shape) -> f32 {
//     match s {
//         Shape::Circle(radius) => PI * radius * radius,
//         Shape::Square(side) => side * side,
//         Shape::Rectangel(width, height) =>width * height
//     }
// }

//............

// use std::f32::consts::PI;

// enum Shape {
//     Square(f32),
//     Circle(f32),
//     Rectangel(f32, f32)
// }

// impl Shape {
//     fn cal_area (&self) -> f32 {
//     return match self {
//         Shape::Circle(radius) => PI * radius * radius,
//         Shape::Square(side) => side * side,
//         Shape::Rectangel(width, height) =>width * height
//     };
// }
// }

// fn main(){
//     let _shape_squ: Shape = Shape::Square(10.0);

//     println!("{}", _shape_squ.cal_area());
// }

//-----------------------------------

// Error handling

// fn main() {

// }

//-------------------

//Lecture 27 again

//ownership or borrowing

// fn main(){
//     let str = String::from("Subrat");
//     let len = get_length(str);

//     println!("length of str is {len}");

//     get_length(s1);
// }

// fn get_length(str: String) -> usize {
//     let str_len = str.len();
//     str_len
// }

//---------------

// fn main(){
//     let str = String::from("Subrat");
//     let (len, str) = get_length(str);

//     println!("length of str is {len}");

//     get_length(str); //now you can use str as much as possible, aapki bandi gayi or wapas aa gayi

//       //now another way to do this rather then giving ownershop give referance  by using &
// }

// fn get_length(str: String) -> (usize, String) {
//     let str_len = str.len();
//     (str_len, str) //here also return str
// }

//---------------

// fn main(){
//     let str = String::from("Subrat"); //str is always the owner
//     let len = get_length(&str); //this one have the ref of str

//     println!("length of str is {len}");

//     get_length(&str); //now i can use str as much as i can use

//       //now another way to do this rather then giving ownershop give referance  by using &
// }

// fn get_length(str: &String) -> usize {
//     let str_len = str.len();
//     str_len //here also return str
// }

//------------------

//mutable or immutable refrance
// fn main(){
//     let mut str = String::from("Subrat"); //str is always the owner
//     str.push_str(", mishra");

//     let str2 = &str; //error str2 is not mutable, this is immutable ref
//     str2.push_str("rewa"); //
// }

//----------

// fn main(){
//     let mut str = String::from("Subrat"); //str is always the owner
//     str.push_str(", mishra");

//     let str2 = &mut str; //this is mutable ref
//     str2.push_str("rewa"); //
// }

//------------

// fn main() {
//     let mut str = String::from("Subrat");
//     let s1 = &mut str; //this is mutable ref
//     let s2 = &str; //this will give error because if i can make any one mut ref then it showing error, i need to make every variable mut ref
//     let s3 = &str;

//     println!("{} {} {}", s1, s2, s3);

// }

//--------------

// fn main() {
//     let mut str = String::from("Subrat");
//     let s1 = &mut str; //this is mutable ref
//     let s2 = &str;
//     let s3 = &str;

//     println!("{} {} {}", s1, s2, s3);

// }

//-------------

// fn main() {
//     let mut str = String::from("Harkirat");
//     let ref1 = &mut str;
//     ref1.push_str("Singh"); //mut variable sort of end
//     //..after this line you have only one mutable ref
//     let ref2 = &str;

//     println!("{}", ref2);
// }

//--------------

// fn main() {
//     let mut s1 = String::from("subrat"); //this is a variable that own the value

//     let s2 = &mut s1;  //mutable ref
//     s2.push_str(" Mishra"); //mutable ref sort of ended here

//     let s3 = &s1; //immutable ref
//     let s4 = &s1; //immutable ref

//     println!("{} {}", s3, s4);
// }

//-----------------  Structs

// struct User {
//     active: bool,
//     username: String,
//     email: String,
//     sign_in_count: u64,
// }

// fn main() {
//     let user1 = User {
//         active: true,
//         username: String::from("someusername123"),
//         email: String::from("someone@example.com"),
//         sign_in_count: 1,
//     };
//     print!("User 1 username: {:?}", user1.username);
// }

//---------

// struct Rect {
//     height: f32,
//     width: f32
// }

// impl  Rect {
//     fn area(&self) -> f32 { //this is member fn beacuase i use self
//         return self.height * self.width;
//     }

//     fn print_someting() {  //this is closing fn
//         println!("Static function")
//     }
// }

// fn main() {
//     let r = Rect {
//         width: 20.2,
//         height: 3.5
//     };

//     println!("{} {}", r.width, r.height);

//     println!("{}", r.area());

//     // r.print_something(); // show error it does not exist in instance
//     Rect::print_someting();
// }

//----------------------

// struct Rect {
//     height: f32,
//     width: f32
// }

// impl  Rect {
//     fn area(&self) -> f32 { //this is member fn beacuase i use self
//         return self.height * self.width;
//     }

//     fn perimeter(&self) -> f32 {
//         return 2.0 * (self.width + self.height);
//     }

//     fn print_someting() {  //this is closing fn
//         println!("Static function")
//     }
// }

// fn main() {
//     let r = Rect {
//         width: 20.2,
//         height: 3.5
//     };

//     println!("{} {}", r.width, r.height);

//     println!("{}", r.area());

//     // r.print_something(); // show error it does not exist in instance
//     Rect::print_someting();

//     println!("{}", r.perimeter());
// }

//---------------------- Enums

// enum Direction {
//     North,
//     East,
//     South,
//     West,
// }

// fn main() {
//     let my_direction = Direction::North;
//     let new_direction = my_direction; // No error, because Direction is Copy
//     move_around(new_direction);
// }

// fn move_around(dir: Direction) {
//     // implements logic to move a character around
//     match dir {
//         Direction::North => print!("North dirction"),
//         Direction::South => print!("South dirction"),
//         Direction::West => print!("West dirction"),
//         Direction::East => print!("East dirction"),
//    _ => print("Default Dirction ")
//     }
// }

//----------------

// use std::f32::consts::PI;

// enum Shape {
//     Square(f32),
//     Circle(f32),
//     Rectangle(f32, f32)
// }

// fn main() {
//     let shape_sq = Shape::Square(10.0);
//     let shape_cir = Shape::Circle(10.8);
//     let shape_rec = Shape::Rectangle(12.3, 10.8);

//     let res = calculate_area(shape_rec);
//     println!("area of rec is = {res}");

//     let res = calculate_area(shape_cir);
//     println!("area of cir is = {res}");

//     let res = calculate_area(shape_sq);
//     println!("area of sq is = {res}");
// }

// fn calculate_area(s: Shape) -> f32 {
//     let area = match s {
//         Shape::Circle(radius) => PI * radius * radius,
//         Shape::Square(side) => side * side,
//         Shape::Rectangle(width, height) => width * height,
//     };

//     area
// }

//----------------

// use std::f32::consts::PI;

// enum Shape {
//     Square(f32),
//     Circle(f32),
//     Rectangle(f32, f32),
// }

// impl Shape {
//     fn area(&self) -> f32 {
//         let area = match self {
//             Shape::Circle(radius) => PI * radius * radius,
//             Shape::Square(side) => side * side,
//             Shape::Rectangle(width, height) => width * height,
//         };

//         area
//     }
// }

// fn main() {
//     let shape_sq = Shape::Square(10.0);
//     let shape_cir = Shape::Circle(10.8);
//     let shape_rec = Shape::Rectangle(12.3, 10.8);

//     let res= shape_cir.area();

//     println!("{res}");
// }


//------------------------------




//---------------
// /Error handling 

// use std::fs;

// fn main() {
//     let contents = fs::read_to_string("a.text");

//     match contents {
//         Ok(contents) => println!("{}", contents),
//         Err(e) => println!("Error while reading file {}", e)
//     }
// }


//----------------


// enum Option1 {
//     Some(u32),
//     None
// }

// fn main() {
//     let ans = find_first_a(String::from("lllscfn"));

//     match ans {
//         Option1::None => print!("Value not found"),
//         Option1::Some(val) => print!("value is {}", val)
//     }

// }

// fn find_first_a(str: String) -> Option1 {
//     return Option1::Some(1);
//     return Option::None;
// }

//---------




fn main() {
    let ans = find_first_a(String::from("subrat"));

    match ans {
        None => print!("Value not found"),
        Some(val) => print!("value is {}", val)
    }

}

fn find_first_a(str: String) -> Option<u32> {
    // numbe ror null
    let mut index: u32 = 0;
    for c in str.chars() {
        index = index + 1;
        if c == 'a'{
            return Some(index);
        }
    }
    None
}