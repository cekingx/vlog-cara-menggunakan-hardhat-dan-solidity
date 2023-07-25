import { ethers } from "hardhat";

async function main() {
    const MyMath = await ethers.getContractFactory("MyMath");
    const myMath = await MyMath.deploy();

    await myMath.waitForDeployment();

    console.log(`deployed to: ${myMath.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})