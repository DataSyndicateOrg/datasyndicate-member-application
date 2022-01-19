import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from "@web3-react/injected-connector"
// import { ethers } from 'ethers'
// import dsRpostenContract from '../../assets/contracts/DataSyndicateNFT.json'
import React, { useState } from "react"
import TrackWallet from "../member-form/trackWallet"
// import BarLoader from "react-spinners/BarLoader"
// import { css } from "@emotion/react"
import './connector.css'

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `
export default function WalletConnector({setDilogOpen,setMintResult}) {
  const { active, activate } = useWeb3React()
  // const contractAddress = "0x17752F916f2206A2665fB5396B6C9267921D1b65";
  // const abi = dsRpostenContract.abi;
  const mobile = window.matchMedia("(max-width: 500px)")
  
  let [loading, setLoading] = useState(false);
  let [remainingToken, setRemaining] = useState(0);
  let [color] = useState("#ffffff");

  async function connect() {
    const injected = new InjectedConnector({
        supportedChainIds: [1, 3, 4, 5, 42],
      })
    try {
      await activate(injected)
      // const { ethereum } = window;
      // const provider = new ethers.providers.Web3Provider(ethereum);
      // const signer = provider.getSigner();
      // const nftContract = new ethers.Contract(contractAddress, abi, signer);
      
      // let totalSupply = await nftContract.totalSupply();
      // setRemaining((200-parseInt(totalSupply)));
    } catch (ex) {
      console.log(ex)
    }   
  }

  // const mintNftHandler = async () => {
  //   try {
  //     setLoading(true);
  //     const { ethereum } = window;
  //     if (ethereum) {
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();
  //       const nftContract = new ethers.Contract(contractAddress, abi, signer);
  //       let resp = await nftContract.mint({ value: ethers.utils.parseEther('0.7') });
  //       await resp.wait();
  //       setLoading(false);
  //       let totalSupply = await nftContract.totalSupply();
  //       setRemaining((200-parseInt(totalSupply)));
  //       setDilogOpen(true);
  //       setMintResult("Success: See your minted NFT at https://www.opensea.io/assets/0xb62fF7F7A4E705C3297c2Fdfa4d56188F74E8703"+"    Transaction Hash: "+resp.hash)
  //     } else {
  //       console.log("Ethereum object does not exist");
  //     }
  //   } catch (err) {
  //     setLoading(false)
  //     setDilogOpen(true);
  //     setMintResult("Error: "+err.error.message)
  //   }
  // }

  return (
      <div>
        {/* {active ? <div><span className="green" onClick={mintNftHandler}>MINT</span><br/><span className="small">{remainingToken}/200 </span></div>: */}
        {active ? <TrackWallet></TrackWallet> : <span className="green" onClick={connect}> Connect Wallet </span>}
        {/* <BarLoader color={color} loading={loading} css={override}/> */}
      </div>
  )
}