// import { CircularProgress } from "@mui/material";
// import { Box } from "@mui/system";
import useLoadingStyle from "assets/styles/loadingStyle";

import "assets/css/loading.scss";

const HouseLoading = () => {
  const classes = useLoadingStyle();

  return (
    // <Box className={classes.loadingSection}>
    //   <CircularProgress />
    // </Box>
    <div id="outer">
      <div id="middle">
        <div id="inner"></div>
      </div>
    </div>
  );
};

export default HouseLoading;
