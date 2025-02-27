// interface Admin{
//     name:string,
//     permissions:boolean
// }

// interface User{
//     name:string,
//     age:number
// }

// type UserAdmin = User | Admin;



// function greet(user:UserAdmin) {
//     console.log(user.name) /// i can use name because that exist in both of them
// }



//Arrays in TS
function getmax(nums:number[]){
    let maxValue = -4;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] > maxValue){
            maxValue = nums[i];
        }
        return maxValue;
    }
}
getmax([2,3,4,5,6])


