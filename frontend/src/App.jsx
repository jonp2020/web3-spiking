import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { ethers } from 'ethers'

function App() {

  const eth = window.ethereum
  const [account, setAccount] = useState([])
  const [accountRequest, setAccountRequest] = useState([])
  const [contractData, setContractData] = useState([])
  const [noAccountError, setNoAccountError] = useState([])

  if (!eth) {
    return (
      <div className="App">Please install MetaMask</div>
    )
  }

  async function getAccounts() {
    const accounts = await eth.request({method: "eth_accounts"})

    if (accounts && accounts.length)  setAccount(accounts[0])
    return accounts && accounts.length
  }
  async function requestAccounts() {
    const accounts = await eth.request({method: "eth_requestAccounts"})

    if (accounts && accounts.length)  setAccountRequest(accounts[0])
    return accounts && accounts.length
  }

  useEffect(() => {
    if (!getAccounts() && !requestAccounts()) {
      return setNoAccountError(["Please select your account to use on MetaMask"])
    }

    setNoAccountError([])

    // 1. Add in params where in the network the network is e.g. its address
    // 2. Provide interface of the contract - what it is you're trying to call
    // 3. Provide how to communicate to the contract and ethers will manage it e.g. through metamask
    const requestHelloFunc = async () => {
      const hello = new ethers.Contract(
        import.meta.env.VITE_REACT_APP_YOUR_CONTRACT_ADDRESS,
        [
          "function hello() public pure returns (string memory)",
        ],
        new ethers.providers.Web3Provider(eth)
      )

      const helloResponse = await hello
      setContractData(await helloResponse.hello())
    }

    requestHelloFunc()

  }, [account, accountRequest]);


  return (
    <div className="App">
     <h2>This is your account number after I have got it from MetaMask: {account && account }</h2>
     {noAccountError.length > 0 && 
     <p>{noAccountError}</p>}
     { contractData.length > 0 &&
      <p>Here is the message after contacting the contract: {contractData}</p>
      }
    </div>
  )
}

export default App
