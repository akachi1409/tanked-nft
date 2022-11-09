const { makeStyles } = require("@mui/styles");

const useDashboardStyle = makeStyles((theme) => ({
    nftHouseItem: {
        display: 'flex',
        flexDirection: 'column !important',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nftHouseCard: {
        width: '100%',
        height: '100%',
        padding: '20px',
        background: 'rgba(31,41,55,1)',
        boxShadow: '0px 3px 16px rgb(47 83 109 / 12%)',
        borderRadius: '20px',
        marginBottom: '40px',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        '& *': {
            color: '#fff !important',
        }
    },
    nftHouseMedia: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '21px',
        boxSizing: '20px',
        borderRadius: '20px',
        overflow: 'hidden',
    },
    nftImg: {
        width: '500px',
        height: '200px',
        //borderRadius: '20px',
    },
    nftHouseTitle: {
        alignItems: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textTransform: 'capitalize',
        lineHeight: '26px',
    },
    nftHouseMetaInfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '4px',
    },
    nftHouseOwner: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    nftHouseInfo: {
        width: '40%',
    },
    nftHousePrice: {
        textAlign: 'right',
    },
    nftHouseBottom: {
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nftHouseButton: {
        backgroundColor: 'transparent !important',
        border: '2px solid #5142FC !important',
        fontWeight: 'bold',
        boxSizing: 'border-box !important',
        padding: '11px 35px !important',
        borderRadius: '30px !important',
        transition: 'all 0.3s ease !important',
    },
    nftHouseBuyButton: {
        fontWeight: 'bold',
    },
    nftHouseHistory: {
        display: 'flex',
        fontSize: '16px',
        fontWeight: '700',
    },
}));

export default useDashboardStyle;