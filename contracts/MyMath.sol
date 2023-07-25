// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract MyMath {
    using SafeMath for uint256;

    function add(uint256 left, uint256 right) public pure returns(uint256) {
        return left.add(right);
    }
}