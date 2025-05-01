// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";

// Interface to interact with BUSDT token
interface IBUSDT {
    function mint(address to, uint256 amount) external;
    function burn(address from, uint256 amount) external;
}

// Bridge contract on BSC chain
contract BridgeBSC is Ownable {
    address public tokenAddress; // BUSDT token address
    mapping(address => uint256) public pending; // Amount to mint to user

    event Burned(address user, uint256 amount);

    constructor(address _token) Ownable(msg.sender) {
        tokenAddress = _token;
    }

    // User burns tokens on BSC (locking them permanently)
    function burn(uint256 amount) public {
        IBUSDT(tokenAddress).burn(msg.sender, amount); // Burn user's BUSDT
        emit Burned(msg.sender, amount); // Notify backend to unlock on Ethereum
    }

    // Called by backend to approve minting after Ethereum deposit
    function mintTokens(address user, uint256 amount) public onlyOwner {
        pending[user] += amount;
    }

    // User withdraws newly minted BUSDT
    function withdraw(uint256 amount) public {
        require(pending[msg.sender] >= amount, "Not enough balance");
        pending[msg.sender] -= amount;
        IBUSDT(tokenAddress).mint(msg.sender, amount); // Mint BUSDT to user
    }
}
