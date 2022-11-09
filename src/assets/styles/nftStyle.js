const { makeStyles } = require("@mui/styles");

const nftStyle = makeStyles((theme) => ({
    headerLayout:{
        position: "relative"
    },
    bannerSec: {
        backgroundImage: 'url("../images/backgroud.png")',
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "433px"
    }
}));

export default nftStyle;