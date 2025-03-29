// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

contract StakingContract { 
    mapping(address => uint) stakes;
    uint public totalStake;

    constructor() {

    }

    function stake() public payable {
        require(msg.value > 0);
        stakes[msg.sender] += msg.value;
        totalStake += msg.value;
    }

    function unstake(uint _amount) public payable {
        require((stakes[msg.sender] >= _amount));
        payable(address(msg.sender)).transfer(_amount / 2);
        totalStake -= _amount;
        stakes[msg.sender] -= _amount;
    }
}
