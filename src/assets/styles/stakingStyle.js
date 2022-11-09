const { makeStyles } = require("@mui/styles");

const useStakingStyle = makeStyles((theme) => ({
    stakingBottom: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    stakingType: {
        backgroundColor: 'rgba(31,41,55,1) !important',
    },
    stakingDates: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));

export default useStakingStyle;