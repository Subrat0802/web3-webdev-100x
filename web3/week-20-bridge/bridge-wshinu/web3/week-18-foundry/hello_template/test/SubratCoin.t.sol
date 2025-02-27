// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/SubratCoin.sol"; // ✅ Correct import

contract TestSubratCoin is Test {
    event Transfer(address indexed from, address indexed to, uint256 value);

    SubratCoin c;
    
    function setUp() public {
        c = new SubratCoin();
    }

    function testTransferEmit() public {
        c.mint(address(this), 100);
        vm.expectEmit(true, true, false, true); //compare indexes argument

        emit Transfer(
            address(this),
            0xe2C198914733DfE57C801da6aca0f63DccD10618,
            10
        );

        c.transfer(0xe2C198914733DfE57C801da6aca0f63DccD10618, 10);
    }

    



    // part 2
    //     function testMint() public {
    //         c.mint(address(this), 100);
    //         assertEq(c.balanceOf(address(this)), 100, "ok");
    //         assertEq(c.balanceOf(0xe2C198914733DfE57C801da6aca0f63DccD10618), 0, "ok");

    //         c.mint(address(0xe2C198914733DfE57C801da6aca0f63DccD10618), 100);
    //         assertEq(c.balanceOf(0xe2C198914733DfE57C801da6aca0f63DccD10618), 100, "ok");
    //     }

    //     function testTransfer() public {
    //         c.mint(address(this), 100);
    //         c.transfer(0xe2C198914733DfE57C801da6aca0f63DccD10618, 50);

    //         assertEq(c.balanceOf(address(this)), 50, "ok");
    //         assertEq(c.balanceOf(address(0xe2C198914733DfE57C801da6aca0f63DccD10618)), 50, "ok");

    //         vm.prank(0xe2C198914733DfE57C801da6aca0f63DccD10618);
    //         c.transfer(address(this), 50);
    //         assertEq(c.balanceOf(address(this)), 100, "ok");
    //         assertEq(c.balanceOf(address(0xe2C198914733DfE57C801da6aca0f63DccD10618)), 0, "ok");

    //     }

    //     function testApprovals() public{
    //         c.mint(address(this), 100);

    //         c.approve(address(0xe2C198914733DfE57C801da6aca0f63DccD10618), 50); //allow to spent to another address by address.this

    //         assertEq(c.allowance(address(this), address(0xe2C198914733DfE57C801da6aca0f63DccD10618)), 50, "ok"); //check how much balance allowed by address.this to another address

    //         vm.prank(0xe2C198914733DfE57C801da6aca0f63DccD10618); //change the spender basically doing transaction by this account
    //         c.transferFrom(address(this), address(0x63F292e5f6a22E7090D17DD827E5fC9D70f70Cb3), 40); //sent 40token from address.this to another public key(third public key) address(this) allowed me to spend from their account

    //         assertEq(c.balanceOf(0x63F292e5f6a22E7090D17DD827E5fC9D70f70Cb3), 40, "ok"); //checking balance of third public key where is sent the token from address.this
    //         assertEq(c.balanceOf(address(this)), 60, "ok"); //check balance of address.this
    //         assertEq(c.balanceOf(0xe2C198914733DfE57C801da6aca0f63DccD10618), 0, "ok"); //check balance of second public key who just dont have tokn but he can spent money from address.this
    //         assertEq(c.allowance(address(this), address(0xe2C198914733DfE57C801da6aca0f63DccD10618)), 10, "ok"); //checking how much more second public key can spent from address.this

    //     }

    //     function test_RevertWhen_ApprovalsFail() public{
    //         c.mint(address(this), 100);
    //         c.approve(0xe2C198914733DfE57C801da6aca0f63DccD10618, 10);

    //         vm.prank(0xe2C198914733DfE57C801da6aca0f63DccD10618); //doing txn from this address
    //         vm.expectRevert();
    //         c.transferFrom(address(this), 0xe2C198914733DfE57C801da6aca0f63DccD10618, 20); //to myself

    //     }

    //     function test_RevertWhen_TransferFail() public {
    //         c.mint(address(this), 20);
    //         vm.expectRevert();
    //         c.transfer(0xe2C198914733DfE57C801da6aca0f63DccD10618, 30);
    // }

    //part one
    // function testSimple() public {
    //     assertEq(uint(2), uint(2), "ok");
    // }
}






// part 1 Counter.t.sol
// contract TestCounter is Test {
//     Counter c;

//     function setUp() public {
//         c = new Counter(5);
//     }

//     function testInc() public{
//         c.increment();
//         c.increment();
//         assertEq(c.getNum(), 7, "ok");
//     }
//     function testDec() public{
//         c.decrement();
//         c.decrement();
//         assertEq(c.getNum(), 3, "ok");
//     }

//     function test_RevertWhen_DecrementBelowZero() public {
//     vm.expectRevert(); // Expect a revert when decrementing below zero
//     c.decrement();
//     c.decrement();
//     c.decrement();
//     c.decrement();
//     c.decrement();
//     c.decrement();
// }

// }
