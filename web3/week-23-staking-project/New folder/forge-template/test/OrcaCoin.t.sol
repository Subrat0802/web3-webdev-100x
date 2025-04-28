// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "../src/OrcaCoin.sol";

contract OrcaCoinTest is Test {

    OrcaCoinContract orcaCoin;

    function setUp() public {
        orcaCoin = new OrcaCoinContract(address(this));
    }

    function testInitialSupply() public view {
        assert(orcaCoin.totalSupply() == 0);
    }

    function testRevertWhenMint() public {
        vm.startPrank(address(0x700860a83063aed85CCa28a3B0B7ed6347AB2b87));
        vm.expectRevert(); 
        orcaCoin.mint(0x700860a83063aed85CCa28a3B0B7ed6347AB2b87, 10);
    }

    function testMint() public {
        orcaCoin.mint(0x700860a83063aed85CCa28a3B0B7ed6347AB2b87, 10);
        assert(
            orcaCoin.balanceOf(0x700860a83063aed85CCa28a3B0B7ed6347AB2b87) == 10
        );
    }

    function testChangingStakingContract() public {
        orcaCoin.updateStakingContrcat(0x700860a83063aed85CCa28a3B0B7ed6347AB2b87);
        vm.startPrank(0x700860a83063aed85CCa28a3B0B7ed6347AB2b87);
        orcaCoin.mint(0x700860a83063aed85CCa28a3B0B7ed6347AB2b87, 10);
        assert(orcaCoin.balanceOf(0x700860a83063aed85CCa28a3B0B7ed6347AB2b87) == 10);
    }
}
