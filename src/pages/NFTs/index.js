import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core';
import Grid from '@mui/material/Grid';
import { useWeb3 } from 'hooks/useWeb3';
import "./index.css"
import mintImg from "../../assets/images/436.png"
import bannerLeftSideImg from "../../assets/images/banner-left-side-img.webp"
import bannerHeadingImg from "../../assets/images/banner-heading-img..webp"
import bannerSideImg from "../../assets/images/banner-side-img.webp"
export default function Nfts() {
  const { account } = useWeb3React()
  const [balance, setBalance] = useState(0)
  const web3 = useWeb3()
  useEffect(async() => {
    if (account) {
      console.log(account);
      var tempBalance = await web3.eth.getBalance(account); //Will give value in.
      // console.log(tempBalance)
      tempBalance = web3.utils.fromWei(balance);
      setBalance(tempBalance)
    }
  }, [account])


  return (
    <div>
      <div className="headerLayout">
        <section className="bannerSec">
          <div className="bannerLeftImg">
            <figure>
              <img src={bannerLeftSideImg} className="mobileImgHidden"/>
            </figure>
          </div>
          <div className="containerFluid">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-3">
                <div className="bannerCardWrapper">
                  <div className="bannerImgWrapper">
                    <figure>
                      <img src={bannerHeadingImg}/>
                    </figure>
                  </div>
                  <div className="bannerContentWrapper">
                    <h1>TANKED GIL<br/>Whitelist Mint</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
          <div className="chairImgWrapper">
          </div>
          <div className="bannerRigneImg">
            <figure>
              <img src={bannerSideImg} className="mobileImgHidden"/>
            </figure>
          </div>
        </section>
      </div>
      <div className="mintLayout">
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <img src={mintImg} style={{width: '100%'}}/>
        </Grid>
        <Grid sm={6} item>
          <div className="mintTextLayout">
            <header><span>
                MINT YOUR &nbsp;
            </span>TANKED GIL NFT</header>
            <p className="mintDescription">TANKED GIL NFT is a colleciont of 10000 unique ERC-721 tokens stored on the Ethereum Blockchain</p>
            {
              account ? (
                <p className="mintDescription">You have {balance} ETH.</p>
              ):(<></>)
            }
          </div>
          
        </Grid>
      </Grid>
      </div>
    </div>
  )
}
