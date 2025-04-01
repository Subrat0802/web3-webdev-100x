// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;
import "forge-std/Test.sol";
import "src/OrcaCoin.sol";

contract StakingContract {
    mapping(address => uint) balances;
    mapping(address => uint) unclaimedRewards;
    mapping(address => uint) lastUpdateTime;

    constructor() {

    }

    function stake() public payable {
        require(msg.value > 0);
        if(!lastUpdateTime[msg.sender]){
            lastUpdateTime[msg.sender] = block.timestamp;
        }
        else{
            unclaimedRewards[msg.sender] += (block.timestamp - lastUpdateTime[msg.sender]) * balances(msg.sender);
            lastUpdateTime[msg.sender] += block.timestamp;
        }
        balances[msg.sender] += msg.value;
    }

    function unstake(uint _amount) public payable {
        require(_amount <= balances[msg.sender]);
        
        unclaimedRewards[msg.sender] += (block.timestamp - lastUpdateTime[msg.sender]) * balances(msg.sender);
        lastUpdateTime[msg.sender] += block.timestamp;

        payable(msg.sender).transfer(_amount);
        balances[msg.sender] -= _amount;
    }

    function getRewards(address _address) public view {
        uint currentRewards =  unclaimedRewards[_address];
        uint updateTime = lastUpdateTime[_address];
        uint newRewards = (block.timestamp - updateTime) * balances[_address];
        return currentRewards + newRewards;
    }

    function clainRewards() public {
        uint currentRewards =  unclaimedRewards[msg.sender];
        uint updateTime = lastUpdateTime[msg.sender];
        uint newRewards = (block.timestamp - updateTime) * balances[_address];
        
        unclaimedRewards[msg.sender] = 0;
        lastUpdateTime[msg.sender] = block.timestamp;
    }

    function balanceOf(address _address) public view returns (uint) {
        return balances[_address];
    }
}