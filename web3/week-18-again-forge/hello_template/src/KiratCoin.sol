// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {console} from "forge-std/console.sol";

contract KiratCoin is ERC20 {
    constructor() ERC20("Kirat", "KIRT") {

    }
    function mint(address to, uint256 amount) public {
        console.log("hi there");
        _mint(to, amount);
    }
}






















// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// contract KiratCoin is ERC20 {

//     address owner;

//     constructor(uint256 _initialvalue) ERC20("kirat", "KIRT") {
//         //mint my self initial token
//         _mint(msg.sender, _initialvalue);
//         owner = msg.sender;
//     }

//     function mint(address to, uint256 amount) public {
//         require(msg.sender == owner);
//         _mint(to, amount);
//     }
// }