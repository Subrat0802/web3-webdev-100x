// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract BridgeETH is Ownable {
    constructor() Ownable(msg.sender) {

    }

    function lock() public {

    }


    function unlock() public {

    }

    function burnedOnOtherSide() public onlyOwner{

    }
}