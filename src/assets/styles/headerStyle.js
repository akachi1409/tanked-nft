const { makeStyles } = require("@mui/styles");

const useHeaderStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: 'rgba(52,152,219,1) !important',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        paddingBottom: "1rem",
        // "@media (max-width: 800px)":{
        //     paddingLeft: '0rem',
        //     paddingRight: '0rem',
        //     paddingBottom: "0rem"
        // }
    },
    topScroll: {
        backgroundColor: 'rgba(31,41,55,1) !important',
    },
    mainLogo:{
        width: "120px", 
        height: "80px",
        // "@media (max-width: 800px)":{
        //     display: "none"
        // }
    },
}));

export default useHeaderStyles;