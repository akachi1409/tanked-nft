import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import "./index.css"
import mintImg from "../../assets/images/436.png"
import bannerLeftSideImg from "../../assets/images/banner-left-side-img.webp"
import bannerHeadingImg from "../../assets/images/banner-heading-img..webp"
import bannerSideImg from "../../assets/images/banner-side-img.webp"
export default function Nfts() {
  const { account } = useWeb3React()

  useEffect(() => {
    if (account) {
      // loadNFTs()
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
        <Grid sm={6} container  direction="column" >
          <div className="mintTextLayout">
            <header><span>
                MINT YOUR &nbsp;
            </span>TANKED GIL NFT</header>
          </div>
        </Grid>
      </Grid>
      </div>
    </div>
  )
}
