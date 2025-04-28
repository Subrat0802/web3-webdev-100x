// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "../src/StakingContract.sol";

contract OrcaCoinTest is Test {
    StakingContract stakingContract;

    function setUp() public {
        stakingContract = new StakingContract();
    }

    receive() external payable {}

    function testStake() public {
        vm.deal(address(this), 1 ether);
        stakingContract.stake{value: 200}();
        assertEq(stakingContract.balanceOf(address(this)), 200);
    }

    function testStakeUser() public {
        vm.startPrank(0x700860a83063aed85CCa28a3B0B7ed6347AB2b87);
        vm.deal(0x700860a83063aed85CCa28a3B0B7ed6347AB2b87, 10 ether);
        stakingContract.stake{value: 1 ether}();
        assertEq(stakingContract.balanceOf(0x700860a83063aed85CCa28a3B0B7ed6347AB2b87), 1 ether);
    }

    function testUnstake() public {
        vm.deal(address(this), 1 ether);
        stakingContract.stake{value: 200}();
        stakingContract.unStake(100);
        assertEq(stakingContract.balanceOf(address(this)), 100);
    }

    function testRevertWhenUnstake() public {
        vm.deal(address(this), 1 ether);
        stakingContract.stake{value: 200}();
        vm.expectRevert();
        stakingContract.unStake(300);
    }
}
