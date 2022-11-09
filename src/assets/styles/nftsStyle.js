const { makeStyles } = require("@mui/styles");

const useNFTsStyle = makeStyles((theme) => ({
    nftItem: {
        display: 'flex',
        flexDirection: 'column !important',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nftImg: {
        width: '200px',
        height: '200px',
        maxHeight: '200px',
    },
}));

export default useNFTsStyle;