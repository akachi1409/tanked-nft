const { makeStyles } = require("@mui/styles");

const useLoadingStyle = makeStyles((theme) => ({
  loadingSection: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    left: "50%",
    top: "50%",
  },
}));

export default useLoadingStyle;
