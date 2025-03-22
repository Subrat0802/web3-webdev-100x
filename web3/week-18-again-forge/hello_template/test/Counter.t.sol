// // SPDX-License-Identifier: Unlicense
// pragma solidity ^0.8.13;

// import "forge-std/Test.sol";
// import "src/Counter.sol";

// contract TestCounter is Test {
//     Counter c;

//     function setUp() public {
//         c = new Counter(5);
//     }

//     function testInc() public{
//         c.increment();
//         c.increment();
//         // assertTrue(c.num === 102);
//         assertEq(c.num(), uint256(7), "");
//     }

//     function testDec() public{
//         c.decrement();
//         c.decrement();
//         // assertTrue(c.num === 102);
//         assertEq(c.num(), uint256(3), ""); 
//     }

//     function test_Revert_When_DecrementBelowZero() public {
//     c.decrement(); // num = 4
//     c.decrement(); // num = 3
//     c.decrement(); // num = 2
//     c.decrement(); // num = 1
//     c.decrement(); // num = 0

//     vm.expectRevert("Counter cannot go below zero"); // Now expecting a specific revert
//     c.decrement(); // This should now revert
// }



//     // function testInt() public {
//     //     assertEq(uint256(1), uint256(1), "ok");
//     // }

//     // function test_Revert_When_ValuesDoNotMatch() public {
//     //     vm.expectRevert(); // Expecting a failure
//     //     assertEq(uint256(1), uint256(2), "ok");
//     // }

//     // function testBool() public {
//     //     assertEq(
//     //         "0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E",
//     //         "0x42f57cf1c864cCb072B65eCEE5F9B79c6fE0BC5E",
//     //         "ok"
//     //     );
//     // }
// }
