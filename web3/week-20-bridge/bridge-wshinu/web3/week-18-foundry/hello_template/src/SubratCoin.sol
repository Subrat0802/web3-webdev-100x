// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {console} from "forge-std/console.sol";

contract SubratCoin is ERC20 {
    uint256 public number;

    constructor() ERC20("Subrat", "RAT") {

    }
    function mint(address to, uint256 amount) public {
        console.logString("Hi there");
        console.logAddress(to);
        console.logUint(amount);
        _mint(to, amount);
    }
}














// part 2 creating token 

// pragma solidity ^0.8.13;
// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// //part 2 file name SubratCoin.sol

// contract SubratCoin is ERC20 {
//     address public owner;
//     constructor(uint256 _initialValue) ERC20("Subrat", "SUB"){
//         owner = msg.sender;
//         //mint myself initial value
//         _mint(msg.sender, _initialValue);
//     }

//     function mint(address to, uint256 amount) public {
//         require(msg.sender == owner);
//         _mint(to, amount);
//     }
// }








//part 1 file name Counter.sol
// contract Counter { 
//     uint private num;

//     constructor (uint _num) {
//         num = _num;
//     }

//     function increment() public {
//         num++;
//     }

//     function decrement() public {
//         num--;
//     }

//     function getNum() public view returns(uint){
//         return num;
//     }

// }
