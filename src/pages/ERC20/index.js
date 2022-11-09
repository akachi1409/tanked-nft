import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, MenuItem, Grid } from '@mui/material';
import LoadingButton from "@mui/lab/LoadingButton";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import axios from "axios";

import useNftStyle from 'assets/styles/nftStyle';
import useHouseMintStyle from "assets/styles/houseMintStyle";
import { ALCHEMY_URL, GOERLI_ALCHEMY_URL, COVALENT_KEY} from 'mainConfig';

export default function ERC20() {
    const navigate = useNavigate()
    const nftClasses = useNftStyle()
    const [searchAddress, setSearchAddress] = useState(null)
    const [loading, setLoading] = useState(false);
    const [selectedNet, setSelectedNet] = useState("main")
    const { account } = useWeb3React()
    const [tokenItems, setTokenItems] = useState([])
    const classes = useHouseMintStyle();

    const nets = [
        {
          value: "main",
          label: "Main"
        },
        {
          value: "test",
          label: "Test"
        }
    ]

    const handleSearchAddress = async () => {
        setLoading(true);
        setTokenItems([])
        var config;
        if (selectedNet == "test"){
            config = {
                method: 'get',
                url: "https://api.covalenthq.com/v1/5/address/" + searchAddress + "/balances_v2/?key="+ COVALENT_KEY,
                headers: {
                'Content-Type': 'application/json'
                },
            };
        }
        else if (selectedNet == "main"){
            config = {
                method: 'get',
                url: "https://api.covalenthq.com/v1/1/address/" + searchAddress + "/balances_v2/?key="+ COVALENT_KEY,
                headers: {
                'Content-Type': 'application/json'
                },
            };
        }
        const temp =[]
        axios(config)
        .then(function(res) {
            console.log("res in ", res)
            res.data.data.items.map((item)=> {
                console.log("--")
                if (item.supports_erc !=null)
                    if (item.supports_erc.includes("erc20")){
                        temp.push({
                            tokenURI: item.logo_url,
                            assetType: "image",
                            tokenName: item.contract_name,
                            symbol: item.contract_ticker_symbol,
                            tokenType: "ERC20",
                            contract: item.contract_address,
                            balance: item.balance
                        })
                    }
                
            })
            setTokenItems(temp);
            setLoading(false);
        })
        .catch(function (err){
            console.log(err);
        })
    }

    return(
        <Grid>
            <Box component={'h2'}>Search ERC20</Box>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                <TextField
                    className={classes.needField}
                    variant="filled"
                    label="Wallet Address"
                    placeholder={account}
                    value={searchAddress}
                    multiline
                    onChange={(e) => {
                        setSearchAddress(e.target.value);
                    }}
                />
                </Grid>
                <Grid item xs={3}>
                <TextField
                    className={classes.needField}
                    id="filled-select-currency"
                    select
                    label="Choose Net"
                    value={selectedNet}
                    onChange={(e) => setSelectedNet(e.target.value)}
                    variant="filled"
                >
                    {
                    nets.map((option)=>(
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))
                    }
                </TextField>
                </Grid>
                <Grid item xs={3}>
                <LoadingButton
                    onClick={handleSearchAddress}
                    endIcon={<SaveAsIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                >
                    Search
                </LoadingButton>
                </Grid>
            </Grid>
            <br/>
            <Grid container spacing={3}>
                {
                    tokenItems.length> 0 && tokenItems.map((item, index) =>{
                        console.log("item", item);
                        return(
                            <Grid
                                item
                                xl={3}
                                lg={4}
                                md={6}
                                sm={6}
                                key={index}
                                className={nftClasses.nftHouseItem}
                            >
                                <Grid className={nftClasses.nftHouseCard}>
                                    {item.tokenURI !=null && (
                                    <Grid className={nftClasses.nftHouseMedia}>
                                        <img className={nftClasses.nftImg} src={item.tokenURI} />
                                    </Grid>)
                                    }
                                    
                                    <Grid>
                                        <Box component={'h3'} className={nftClasses.nftHouseTitle}>{`"${item.tokenName}"`}</Box>
                                    </Grid>
                                    <Grid className={nftClasses.nftHouseMetaInfo}>
                                        <Grid className={nftClasses.nftHouseInfo}>
                                            <Box component={'span'}>Contract Address</Box>
                                            <Box component={'h4'} className={nftClasses.nftHouseOwner}>{item.contract}</Box>
                                        </Grid>
                                        <Grid className={nftClasses.nftHousePrice}>
                                            <Box component={'span'}>Symbol</Box>
                                            <Box component={'h4'}>{item.symbol}</Box>
                                        </Grid>
                                    </Grid>
                                    <Grid className={nftClasses.nftHouseMetaInfo}>
                                        <Box
                                        variant='outlined'
                                        // className={nftClasses.nftHouseButton}
                                        component={'span'}
                                        >
                                            Balance: {item.balance} {item.symbol}
                                        </Box>
                                    </Grid>
                                </Grid>
                                
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}