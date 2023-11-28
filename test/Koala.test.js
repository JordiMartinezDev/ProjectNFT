const Koala = artifacts.require("Koala");
const truffleAssert = require("truffle-assertions");

contract("Koala", (accounts) => {
  it("should credit an NFT to a specific account", async () => {
    const koalaInstance = await Koala.deployed();
    let txResult = await koalaInstance.safeMint(
      accounts[1],
      "spacebear_1.json"
    );
    truffleAssert.eventEmitted(txResult, "Transfer", {
      from: "0x0000000000000000000000000000000000000000",
      to: accounts[1],
      tokenId: web3.utils.toBN("0"),
    });
  });
});
