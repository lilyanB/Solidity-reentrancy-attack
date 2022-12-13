const API_KEY_goerli = process.env.API_KEY_goerli;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const Attack_address = process.env.Attack_address;
const Challenge_address = process.env.Challenge_address;

const { ethers } = require("hardhat");

const contractAttack = require("../artifacts/contracts/Attack.sol/Attack.json");
const contractChallenge = require("../artifacts/contracts/Attack.sol/Challenge.json");

const provider = new ethers.providers.AlchemyProvider(network = "goerli", API_KEY_goerli);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const Attack = new ethers.Contract(Attack_address, contractAttack.abi, signer);
const Challenge = new ethers.Contract(Attack_address, contractChallenge.abi, signer);

async function main() {

  const resul = await Attack.attack()
  console.log("Résusi : ", resul);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });