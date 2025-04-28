// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;


contract StakingContract {

    mapping(address => uint) balance;
    mapping(address => uint) unclaimedRewards;
    mapping(address => uint) lastUpdateTime;

    constructor() {

    }

    function stake() public payable {
        require(msg.value > 0);
        if(lastUpdateTime[msg.sender] == 0){
            lastUpdateTime[msg.sender] = block.timestamp;
        }else{
            unclaimedRewards[msg.sender] += (block.timestamp - lastUpdateTime[msg.sender])  * balance[msg.sender];
            lastUpdateTime[msg.sender] = block.timestamp;
        }
        balance[msg.sender] += msg.value; 
    }

    function unStake(uint _amount) public {
        require(_amount <= balance[msg.sender]);

        unclaimedRewards[msg.sender] += (block.timestamp - lastUpdateTime[msg.sender])  * balance[msg.sender];
        lastUpdateTime[msg.sender] = block.timestamp;
            
        balance[msg.sender] -= _amount;
        payable(msg.sender).transfer(_amount);

        
        
    }

    function getRewards(address _address) public view returns(uint){
        uint currentRewards = unclaimedRewards[_address];
        uint updateTime = lastUpdateTime[_address];
        uint newrewards = (block.timestamp - updateTime) * balance[_address];
        return currentRewards + newrewards;
    }

    function claimReward() public {
        uint currentRewards = unclaimedRewards[msg.sender];
        uint updateTime = lastUpdateTime[msg.sender];
        uint newrewards = (block.timestamp - updateTime) * balance[msg.sender];

        unclaimedRewards[msg.sender] = 0;
        lastUpdateTime[msg.sender] = block.timestamp;
    }

    function balanceOf(address _user) public view returns(uint) {
        return balance[_user];
    }
}