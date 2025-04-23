// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract BridgeBase is Ownable {
    constructor() Ownable(msg.sender){

    }

    function mint() public {

    }

    function burn() public {

    }
    function depositeHappendOnOtherSide() public {

    }
}