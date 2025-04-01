// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "src/StakingContract.sol";

contract StakingContractTest is Test {
    StakingContract stakingContract;


    function setUp() public {
        stakingContract = new StakingContract();
    }

    function testStake() public {
        
        stakingContract.stake{value: 200}();
        assert(stakingContract.balanceOf(address(this)) == 200);
    }

    function testStakeUser() public {
        vm.startPrank(0x266160670db13c85c282CD88373e5965214f110d);
        vm.deal(0x266160670db13c85c282CD88373e5965214f110d, 10 ether);
        stakingContract.stake{value: 1 ether}();
        assert(stakingContract.balanceOf(0x266160670db13c85c282CD88373e5965214f110d) == 1 ether);
    }

    function testUnstake() public {
        stakingContract.stake{value: 200}();
        stakingContract.unstake(100);
        assert(stakingContract.balanceOf(address(this)) == 100);

    }

    function testRevertUnstake() public {
        stakingContract.stake{value: 200}();
        vm.expectRevert();
        stakingContract.unstake(300);
    }
}
