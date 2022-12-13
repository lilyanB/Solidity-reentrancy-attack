const hre = require("hardhat");

const Challenge_address = process.env.Challenge_address;

async function main() {
  const Attack = await hre.ethers.getContractFactory("Attack");
  const attack = await Attack.deploy();

  await attack.deployed();

  console.log(
    `Contract deployed to ${attack.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
