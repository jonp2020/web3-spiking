require("@nomiclabs/hardhat-ethers")

const { ethers } = require("hardhat")

async function deploy() {
    // Get contract factory HelloWorld
    const HelloWorld = await ethers.getContractFactory("HelloWorld")

    // Build up json request and send it to network to begin transaction
    const hello = await HelloWorld.deploy()
    await hello.deployed()

    // Once deployed it will be returned

    return hello
}

async function sayHello(hello) {
    console.log('This has deployed and my message is...', await hello.hello());
}

deploy().then(sayHello)