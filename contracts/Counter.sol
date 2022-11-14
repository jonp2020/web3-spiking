// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint32 counter = 0;

    function addCount() public {
        counter++;
        console.log("Counter is now ", counter);
    }
    function deductCount() public {
        if (counter < 1) {
            counter == 0;
        } else {
            counter--;
        }
        console.log("Counter is now at", counter);
    }
    function getCounter() public view returns (uint32) {
        return counter;
    }
}
