const  { _ } = require("@nomiclabs/hardhat-ethers");
const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Test Hello World", function () {
    it("should say hello world", async function () {
  
      // Name in the quotes is the name of the contract
      const HelloWorld = await ethers.getContractFactory("HelloWorld");

      // deploy contract to test network
      const hello = await HelloWorld.deploy()
      // wait until contract has been deployed successfully
      await hello.deployed()
  
      expect(await hello.hello()).to.equal("Hello world!");
    });
  });