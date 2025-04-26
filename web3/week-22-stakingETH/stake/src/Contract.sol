// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

contract StakingContract { 
    uint public totalStaked;
    mapping(address => uint) public userStaked;
    constructor() {

    }

    function stake(uint _amount) public payable{
        require(msg.value > 0, "Amount must be greater than zero");
        require(msg.value == _amount, "Amount must be equal to msg.value");
        totalStaked += _amount;
        userStaked[msg.sender] += _amount;
    }

    function unstake(uint _amount) public{
        require(userStaked[msg.sender] >= _amount, "Amount must be greater or equal to available balance");
        totalStaked -= _amount;
        userStaked[msg.sender] -= _amount;
        payable(msg.sender).transfer(_amount); 
    }
}
