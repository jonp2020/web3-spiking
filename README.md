# web3-spiking

**Description:**

Basic Hello World programme. Deploys a contract called HelloWorld which returns a message of hello world. Message is displayed in the browser in a Vite React front end and console logged in the back end terminal via a Hardhat test server. A mocha chai test can be run, too. 

**Instructions**

1. In the root folder and also in the front end folder run this command in your terminal to install any dependencies:

```npm i```

2. In the root folder run the following in your terminal to compile the contract:

```npx hardhat compile```

3. To run the test file run this command:

```npx hardhat test```


4. To start a server using hardhat with test accounts run the following command in the root directory:

```npx hardhat node```

5. In your browser, search for and install the metamask extension if you don't have one.

6. You will see a list of test accounts from hardhat in the terminal. You can take one of the private keys and and use it to import an account in MetaMask. Change to this account - do not use a real account with real funds in your metamask wallet or you risk incurring gas fees. Instead switch to the test account you imported from hardhat instead.

7. In another terminal deploy the contract using this command:

```npx hardhat run scripts/deployHelloWorld.js --network localhost```

8. To start the front end, cd into the frontend folder in your terminal and enter the following to start the frontend server:
```npm run dev```

9. Go to the localhost address in your browser to see the returned message and your test account number displayed on the page.
