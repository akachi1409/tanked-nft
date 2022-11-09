const { makeStyles } = require("@mui/styles");

const useContractStyle = makeStyles((theme) => ({
    contractItem: {},
    contractCard: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column !important',
        padding: '16px',
        border: '2px solid',
        borderRadius: '16px',
        width: '30vw'
    },
    contractPdf: {},
    contractBottom: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    sign: {
        marginTop: '24px',
        display: 'flex',
        justifyContent: 'center',
    },
    sendNotify: {
        display: 'flex',
        justifyContent: 'end',
    },
    notifyContent: {
        width: '100%'
    },
    CCreator: {
        wordBreak: 'break-all'
    }
}));

export default useContractStyle;