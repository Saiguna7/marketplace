import { HardhatUserConfig } from "hardhat/config";
import fs from "fs";
const privateKey = fs.readFileSync(".secret").toString().trim();
const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey],
    },
    // rinkeby: {
    // url: 'https://rinkeby.infura.io/v3/bed4fdcc76bb4978a9a3103ef0946f64',
    //   accounts: [privateKey],
    // },
  },
  solidity: "0.8.24",
};

export default config;
