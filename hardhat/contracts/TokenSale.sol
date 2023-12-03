//SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

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

    function purchase() public payable {
        require(msg.value >= tokenPriceInWei, "Not enough money sent");
        uint tokensToTransfer = msg.value / tokenPriceInWei;
        uint remainder = msg.value - tokensToTransfer * tokenPriceInWei;
        token.transfer(tokenOwner,msg.sender, tokensToTransfer * 10 ** token.decimals());
        payable(msg.sender).transfer(remainder); //send the rest back

    }
}