import hre from "hardhat";

async function main() {
  //@ts-ignore
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTmarketplace");
  const nftMarketplace = await NFTMarketplace.deploy();
  await nftMarketplace.deployed();

  console.log("Market deployed to:", nftMarketplace.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
