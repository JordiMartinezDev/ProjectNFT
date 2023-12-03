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

  it("Fails to transfer tokens from the wrong address", async () => {
    const Koala = await hre.ethers.getContractFactory("Koala");
    const KoalaInstance = await Koala.deploy();
    const [owner, otherAccount, notTheNFTOwner] = await ethers.getSigners();
    await KoalaInstance.safeMint(otherAccount.address);
    expect(await KoalaInstance.ownerOf(0)).to.equal(otherAccount.address);
    await expect(
      KoalaInstance.connect(notTheNFTOwner).transferFrom(
        otherAccount.address,
        notTheNFTOwner.address,
        0
      )
    ).to.be.revertedWith("");
  });
});
