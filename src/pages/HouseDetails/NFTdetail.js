import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EditIcon from "@mui/icons-material/Edit";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import CancelIcon from "@mui/icons-material/Cancel";
import { useWeb3 } from "hooks/useWeb3";

export default function NFTdetail({
  classes,
  simpleNFT,
  owner
}) {
  const [isBuyerEdit, setIsBuyerEdit] = useState(false);
  const web3 = useWeb3();

  useEffect(() => {
    if (simpleNFT) {
      setIsBuyerEdit(!Boolean(simpleNFT.buyer));
    }
  }, [simpleNFT]);

  return (
    <Grid item xl={6} md={12}>
      <Grid className={classes.contentRight}>
        <Grid className={classes.itemDetail}>
          <Box component={"h2"}>{`"${simpleNFT.tokenName}"`}</Box>
        </Grid>
        <Grid className={classes.clientInfo}>
          <Grid className={classes.metaInfo}>
            <Box component={"span"}>Owned By</Box>
            <Box component={"h4"} className={classes.nftHouseOwner}>
              {owner}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
