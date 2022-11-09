const { makeStyles } = require("@mui/styles");

const useHouseMintStyle = makeStyles((theme) => ({
    mintHouseContent: {
        '& input': {
            display: 'none',
        },
    },
    houseNftImg: {
        width: '200px',
        height: '200px'
    },
    mintContent: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    embedPdf: {
        margin: '20px 0px'
    },
    housePrice: {
        width: '100%'
    },
    houseDescription: {
        width: '100%'
    },
    needField: {
        width: '100%'
    },
    Marrow: {
        display: 'grid',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '100%',
        background: '#f0f0f0',
        right: '0px',
    },
    Mprice: {
        display: 'flex',
        position: 'relative',
        width: '100%',
        height: '55px',
        '& form': {
            background: '#f0f0f0',
            width: '100%'
        }
    }
}));

export default useHouseMintStyle;