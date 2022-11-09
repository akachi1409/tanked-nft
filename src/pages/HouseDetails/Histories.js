import React, { useEffect, useState } from "react";
import {
  Grid,
  ListItem,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";


export default function Histories({
  classes,
  attributeItem,
  attributes,
}) {
  return (
    <Grid  item xl={6} md={12}>
      <Box component={"h3"}>Attributes</Box>
      {
        attributes? (
          attributes.map((attribute, index)=> (
            <ListItem
            className={classes.historyItem}
            key={index}
            component="div"
            disablePadding
          >
            <TextField
              className={classes.listhistoryType}
              label="Attribute"
              value={attribute}
              variant="filled"
              disabled={true}
            >
            </TextField>
            <TextField
              id="standard-multiline-static"
              label="Value"
              rows={4}
              variant="filled"
              className={classes.addHistoryField}
              value={attributeItem[index]}
            />
          </ListItem>
          )
        )):(<></>)
        }
      

    </Grid>
  );
}
