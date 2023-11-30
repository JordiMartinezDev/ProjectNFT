const { ethers } = require("hardhat");

(async () => {
  try {
    const Koala = await ethers.getContractFactory("Koala");
    const koalaInstance = await Koala.deploy();

    // Wait for the contract to be mined and get the deployed instance
    await koalaInstance.address;
    console.log(`Deployed contract at ${koalaInstance.address}`);

    console.log("Hello");
  } catch (e) {
    console.error(e);

    process.exitCode = 1;
  }
})();
