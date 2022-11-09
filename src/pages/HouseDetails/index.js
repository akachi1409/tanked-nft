import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import axios from "axios";
import NFTdetail from "./NFTdetail";
import Histories from "./Histories";

import { houseInfo, houseError, houseSuccess } from "hooks/useToast";
import useNftDetailStyle from "assets/styles/nftDetailStyle";
import { ALCHEMY_URL} from 'mainConfig';
import HouseLoading from "components/HouseLoading";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "100%",
  bgcolor: "transparent",
  boxShadow: 24,
  p: 4,
  "& img": {
    height: "100%",
  },
};

export default function HouseDetails() {
  const navigate = useNavigate();
  const {contract, tokenID } = useParams();
  const { account } = useWeb3React();
  const classes = useNftDetailStyle();
  const [simpleNFT, setSimpleNFT] = useState({});
  const [attributeItem, setAttributeItem] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const loadNFT = async (contract, _id) => {
    var res = await axios.get(ALCHEMY_URL + "/getNFTMetadata/?contractAddress=" + contract + "&tokenId=" + _id);
    var nft = res.data;
    if (nft) {
        setSimpleNFT({
          ...nft,
          tokenURI: nft.media[0].gateway,
          tokenName: nft.title,
          tokenType: "test"
        });
        const tempAttItem = [];
        const tempAtt = []
        if (nft.metadata.attributes.length>0){
          for (let i = 0 ; i<nft.metadata.attributes.length; i++){
            tempAttItem.push(nft.metadata.attributes[i].value)
            tempAtt.push(nft.metadata.attributes[i].trait_type);
          }
        }
        setAttributes(tempAtt);
        setAttributeItem(tempAttItem);
      }
  };

  useEffect(() => {
    if (tokenID) {
        loadNFT(contract, tokenID);
        console.log(contract, tokenID)
    } else {
      houseError("Invalid Url or NFT ID");
      navigate("../../house/app");
    }
  }, [contract, tokenID]);

  return (
    <>
      {simpleNFT.tokenName ? (
        <Grid container spacing={5}>
          <Grid item xl={12} md={12}>
            <Grid className={classes.nftMedia}>
              <Button onClick={() => handleOpen()} className={classes.nftImg}>
                <img alt={simpleNFT.tokenURI} src={simpleNFT.tokenURI} />
              </Button>
            </Grid>
          </Grid>
          <NFTdetail
            classes={classes}
            simpleNFT={simpleNFT}
            owner={account}
            
          />
          <Histories
            classes={classes}
            attributes={attributes}
            attributeItem={attributeItem}
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Button sx={style} onClick={() => handleClose()}>
              <img alt={simpleNFT.tokenURI} src={simpleNFT.tokenURI} />
            </Button>
          </Modal>
        </Grid>
      ) : (
        <HouseLoading />
      )}
    </>
  );
}
