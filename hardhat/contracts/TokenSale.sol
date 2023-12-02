//SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

abstract contract ERC20 {
    function transfer(address _from,address _to,uint256 _value) public virtual returns (bool success);
    function decimals() public virtual view returns(uint8);
}

contract TokenSale {
    uint tokenPriceInWei = 1 ether;
    address public tokenOwner;

    ERC20 token;

    constructor(address _token) {
        token = ERC20(_token);
    }

    
}