const { expect } = require("chai");
const hre = require("hardhat");

describe("Koala", function () {
  it("is possible to mint a token", async () => {
    const Koala = await hre.ethers.getContractFactory("Koala");
    const KoalaInstance = await Koala.deploy();
    const [owner, otherAccount] = await ethers.getSigners();
    await KoalaInstance.safeMint(otherAccount.address);
    expect(await KoalaInstance.ownerOf(0)).to.equal(otherAccount.address);
  });
});
