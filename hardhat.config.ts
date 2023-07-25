import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    local: {
      accounts: [process.env.PRIVATE_KEY || ''],
      url: process.env.RPC_URL || ''
    }
  }
};

export default config;
