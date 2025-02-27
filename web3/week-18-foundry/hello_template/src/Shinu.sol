// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ShinuCoin is ERC20{
    uint256 public number;

    constructor() ERC20("Shinu", "SHINU"){

    }
    function mint(address _to, uint256 _amount ) public {
        _mint(_to, _amount);
    }
}