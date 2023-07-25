import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import {expect} from "chai";
import {ethers} from "hardhat";

describe("MyMath", function () {
    async function deployFixture() {
        const MyMath = await ethers.getContractFactory("MyMath");
        const myMath = await MyMath.deploy();

        return { myMath };
    }

    describe("Testing", function () {
        it("Should add correct amount", async function() {
            const { myMath } = await loadFixture(deployFixture);

            expect(await myMath.add(1, 2)).to.equal(3);
        })
    })
})