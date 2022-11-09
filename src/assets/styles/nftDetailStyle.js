const { makeStyles } = require("@mui/styles");

const useNftDetailStyle = makeStyles((theme) => ({
  nftMedia: {
    borderRadius: "10px",
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-start",
  },
  nftBuyer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nftImg: {
    height: "100%",
    width: "100%",
    verticalAlign: "middle",
    maxHeight: "500px",
  },
  image: {
    width: "500px",
  },
  needField: {
    width: "100%",
  },
  imgPart: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contentRight: {
    marginTop: "5px",
  },
  clientInfo: {
    display: "flex",
    padding: "0",
    marginBottom: "12px",
  },
  metaInfo: {
    width: "100%",
    // background: '#343444',
    borderRadius: "16px",
    padding: "12px",
  },
  nftHouseOwner: {
    borderRadius: "16px",
    padding: "12px",
  },
  nftHousePrice: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 24px",
  },
  buyButtonGroup: {
    marginBottom: "16px",
  },
  nftHouseButton: {
    fontWeight: "bold",
    color: "#1976d2 !important",
    backgroundColor: "transparent !important",
    border: "2px solid #5142FC !important",
    fontWeight: "bold",
    boxSizing: "border-box !important",
    padding: "11px 35px !important",
    borderRadius: "30px !important",
    transition: "all 0.3s ease !important",
    width: "100%",
  },
  connectContract: {
    marginTop: "16px",
    marginBottom: "16px",
  },
  nftHouseBuyButtonTxt: {
    fontWeight: "bold",
  },
  historyItem: {
    borderBottom: "1px solid #1F1F2C",
  },
  addHistory: {
    width: "100%",
    marginTop: "16px",
    marginBottom: "16px",
  },
  addHistoryField: {
    width: "100%",
    marginTop: "16px !important",
    marginBottom: "16px !important",
  },
  listHistoryField: {
    width: "50%",
    marginTop: "16px !important",
    marginBottom: "16px !important",
  },
  contract: {
    width: "100%",
    marginBottom: "10px !important",
  },
  historyType: {
    width: "100%",
  },
  listhistoryType: {
    width: "50%",
  },
  imgLabel: {
    display: "flex",
    alignItems: "center",
  },
}));

export default useNftDetailStyle;
