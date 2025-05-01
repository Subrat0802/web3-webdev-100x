// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BUSDT is ERC20, Ownable {
    constructor() ERC20("BUSDT", "BUSDT") Ownable(msg.sender) {}

    // Mint BUSDT tokens (only by Bridge)
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Burn tokens from user's wallet (only by Bridge)
    function burn(address from, uint256 amount) public onlyOwner {
        _burn(from, amount);
    }
}
