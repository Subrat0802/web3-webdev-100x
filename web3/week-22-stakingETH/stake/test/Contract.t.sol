// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "src/Contract.sol";

contract TestContract is Test {
    StakingContract c;
    uint constant STAKE_AMOUNT = 10 ether;

    function setUp() public {
        c = new StakingContract();
    }

    function testSuccessfulStake() public {
        c.stake{value: STAKE_AMOUNT}(STAKE_AMOUNT);
        assertEq(c.totalStaked(), STAKE_AMOUNT);
    }

    function testRevertWhenNoValueSent() public {
        vm.expectRevert(); // Possibly specify expected revert message
        c.stake(STAKE_AMOUNT); // No value sent
    }

    function testUnstake() public{
        vm.startPrank(0x700860a83063aed85CCa28a3B0B7ed6347AB2b87);
        vm.deal(0x700860a83063aed85CCa28a3B0B7ed6347AB2b87, STAKE_AMOUNT);
        c.stake{value:STAKE_AMOUNT}(STAKE_AMOUNT);
        c.unstake(STAKE_AMOUNT);

        assert(c.totalStaked() == 0);
    }
}