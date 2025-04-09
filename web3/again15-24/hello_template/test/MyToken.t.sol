// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/KiratCoin.sol";

contract TestKiratCoin is Test {
    event Transfer(address indexed from, address indexed to, uint256 value);

    KiratCoin c;

    function setUp() public {
        c = new KiratCoin();
    }

    function testMint() public {
        c.mint(address(this), 100);
        assertEq(c.balanceOf(address(this)), 100, "ok");
        assertEq(c.balanceOf(0x266160670db13c85c282CD88373e5965214f110d), 0, "ok");

        c.mint(address(0x266160670db13c85c282CD88373e5965214f110d), 100);
        assertEq(c.balanceOf(0x266160670db13c85c282CD88373e5965214f110d), 100, "ok");
    }

    function testTransfer() public {
        c.mint(address(this), 100);
        c.transfer(0x266160670db13c85c282CD88373e5965214f110d, 50);
        assertEq(c.balanceOf(address(this)), 50);
        assertEq(c.balanceOf(address(0x266160670db13c85c282CD88373e5965214f110d)), 50);

        vm.prank(0x266160670db13c85c282CD88373e5965214f110d);

        c.transfer(address(this), 50);
        assertEq(c.balanceOf(address(this)), 100);
        assertEq(c.balanceOf(address(0x266160670db13c85c282CD88373e5965214f110d)), 0);
    }

    function testApproval()public {
        c.mint(address(this), 100);

        c.approve(0x266160670db13c85c282CD88373e5965214f110d, 50);

        vm.prank(0x266160670db13c85c282CD88373e5965214f110d);

        c.transferFrom(address(this), 0x266160670db13c85c282CD88373e5965214f110d, 30);

        assertEq(c.balanceOf(address(this)), 70);
        assertEq(c.balanceOf(address(0x266160670db13c85c282CD88373e5965214f110d)), 30);
        assertEq(c.allowance(address(this), 0x266160670db13c85c282CD88373e5965214f110d), 20);
    }

    function test_RevertFailApporval() public {
        c.mint(address(this), 100);
        c.approve(0x266160670db13c85c282CD88373e5965214f110d, 15);

        vm.prank(0x266160670db13c85c282CD88373e5965214f110d);
        vm.expectRevert();
        c.transferFrom(address(this), 0x266160670db13c85c282CD88373e5965214f110d, 20);


    }

     function testTransferEmit() public {
        c.mint(address(this), 100);
        vm.expectEmit(true, true, false, false);
        emit Transfer(address(this), 0x266160670db13c85c282CD88373e5965214f110d, 10);

        c.transfer(0x266160670db13c85c282CD88373e5965214f110d, 10);
    }

    function testDeal() public{
        address acc = 0x266160670db13c85c282CD88373e5965214f110d;
        vm.deal(acc, 10 ether);

        assertEq(address(acc).balance, 10 ether);
    }
}
