// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Bridge contract for Ethereum chain
contract BridgeEthereum is Ownable {
    address public tokenAddress; // USDT token contract
    mapping(address => uint256) public pending; // Tracks amount to release to user

    // Emitted when user deposits tokens
    event Deposited(address user, uint256 amount);

    constructor(address _token) Ownable(msg.sender) {
        tokenAddress = _token;
    }

    // User deposits tokens to bridge (locking tokens)
    function deposit(uint256 amount) public {
        IERC20 token = IERC20(tokenAddress);

        // User must approve the Bridge to spend tokens
        require(token.allowance(msg.sender, address(this)) >= amount, "Not approved");

        // Transfer USDT from user to bridge
        require(token.transferFrom(msg.sender, address(this), amount), "Transfer failed");

        emit Deposited(msg.sender, amount); // Notify off-chain backend
    }

    // Called by backend after burn is detected on other chain
    function releaseTokens(address user, uint256 amount) public onlyOwner {
        pending[user] += amount;
    }

    // User can withdraw their USDT once approved
    function withdraw(uint256 amount) public {
        require(pending[msg.sender] >= amount, "Not enough balance");
        pending[msg.sender] -= amount;
        IERC20(tokenAddress).transfer(msg.sender, amount); // Unlock USDT back to user
    }
}
