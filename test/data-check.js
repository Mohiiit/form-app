const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FormApp Contract", function () {

    let formapp;

    before (async function () {
        const FormApp = await ethers.getContractFactory('FormApp');
        formapp = await FormApp.deploy();

        await formapp.add_data("test", 20, "some answer here");
        await formapp.add_data("test1", 20, "some answer here");
        await formapp.add_data("test2", 20, "some answer here");
    })

    it("checking whether data is getting stored or not", async function () {
        expect(await formapp.get_size()).to.equal(3);
    });

    it("data stored is correct or not ", async function () {
        await formapp.add_data("test", 20, "some answer here");
        let temp = await formapp.get_data(0);
        expect(temp[0]).to.equal("test");
        expect(temp[1]).to.equal(20);
        expect(temp[2]).to.equal("some answer here");
        temp = await formapp.get_data(2);
        expect(temp[0]).to.equal("test2");
        expect(temp[1]).to.equal("20");
    });

});