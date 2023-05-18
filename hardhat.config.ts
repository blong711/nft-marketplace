
import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const BSCTEST_URL = process.env.BSCTEST_URL as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    bsctest: {
      url: process.env.BSCTEST_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
