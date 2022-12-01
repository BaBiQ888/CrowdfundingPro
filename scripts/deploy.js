const hre = require("hardhat");

async function main() {
  let Crowfunding = await hre.ethers.getContractFactory("Crowfunding");
  let crowfundingContract = await Crowfunding.deploy();
  await crowfundingContract.deployed();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
