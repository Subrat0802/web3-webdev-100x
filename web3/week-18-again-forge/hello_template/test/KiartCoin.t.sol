// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "src/KiratCoin.sol";
import "forge-std/Test.sol";

contract TestKiratCoin is Test {

    event Transfer(address indexed from, address indexed to, uint256 value);

    KiratCoin c;

    function setUp() public {
        c = new KiratCoin();
    }

    function testTransferEmit() public { 
        c.mint(address(this), 100);
        vm.expectEmit(true, true, false, true);

        emit Transfer(address(this), 0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E, 10);
        c.transfer(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E, 10);
    }

    //277a285f9afdc0861a2fd1588e53b9b82ad0f81fac7b3f08e4d1a2fa5663b07e

    function testMint() public {
        c.mint(address(this), 100); //whoever delopy this contract mint himself 100 token of kirat coin
        assertEq(c.balanceOf(address(this)), 100, "ok");
        assertEq(
            c.balanceOf(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E),
            0,
            "ok"
        );

        c.mint(address(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E), 100);
        assertEq(
            c.balanceOf(address(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E)),
            100,
            "ok"
        );
    }

    function testTransfer() public {
        c.mint(address(this), 100);
        c.transfer(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E, 50);

        assertEq(c.balanceOf(address(this)), 50);
        assertEq(c.balanceOf(address(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E)), 50);

        vm.prank(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E);
        c.transfer(address(this), 50);

        assertEq(c.balanceOf(address(this)), 100);
        assertEq(c.balanceOf(address(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E)), 0);
    }

    function testApprovals() public {
        c.mint(address(this), 100);

        c.approve(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E, 10);

        assertEq(c.allowance(address(this), 0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E), 10, "ok");
        assertEq(c.allowance(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E, address(this)), 0, "ok");

        vm.prank(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E);
        c.transferFrom(address(this), address(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E), 5);

        assertEq(c.balanceOf(address(this)), 95, "ok"); 
        assertEq(c.balanceOf(address(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E)), 5, "ok");
        assertEq(c.allowance(address(this), address(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E)), 5, "ok");
    }
 
    function test_Revert_When_ExceedingAllowance() public {
        c.mint(address(this), 100);
        c.approve(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E, 10);

        vm.expectRevert();  // Expecting a failure
        vm.prank(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E);
        c.transferFrom(address(this), 0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E, 20);
    }

    function test_Revert_When_FailTrtansfer() public {
        c.mint(address(this), 20);
        
        vm.expectRevert();
        c.transfer(0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E, 30);
    }


























    // function testSimple() public {
    //     assertEq(uint(2), uint(2), "ok");
    // }
}
