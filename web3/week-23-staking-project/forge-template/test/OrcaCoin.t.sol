// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "src/OrcaCoin.sol";

contract OrcaCoinTest is Test {
    OrcaCoinContract orcaCoin;

    function setUp() public{
        orcaCoin = new OrcaCoinContract(address(this));
    }

    function testInitialSupply() public view {
       assert(orcaCoin.totalSupply() == 0);
    }

    function test_Revert_WhenFailMint() public {
        vm.startPrank(0x266160670db13c85c282CD88373e5965214f110d);
        vm.expectRevert();
        orcaCoin.mint(0x266160670db13c85c282CD88373e5965214f110d, 10);
    }

    function testMint() public {
        orcaCoin.mint(0x266160670db13c85c282CD88373e5965214f110d, 10);
        assert(orcaCoin.balanceOf(0x266160670db13c85c282CD88373e5965214f110d) == 10);
    }

    function testChangeStakingContract() public {
        orcaCoin.updateStakingContract(0x266160670db13c85c282CD88373e5965214f110d);
        vm.startPrank(0x266160670db13c85c282CD88373e5965214f110d);
        orcaCoin.mint(0x266160670db13c85c282CD88373e5965214f110d, 10);
        assert(orcaCoin.balanceOf(0x266160670db13c85c282CD88373e5965214f110d) == 10);
    }

}
