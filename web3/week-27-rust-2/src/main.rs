// fn main() {
//     let str = String::from("Harkirat");
//     let len = get_length(&str);
//     println!("{} {}", str, len);
// }

// fn get_length(str: &String) -> usize {
//     let len = str.len();
//     return len
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

fn main() {
    
}
