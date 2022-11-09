import React, { Fragment, cloneElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { styled } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import useScrollTrigger from "@mui/material/useScrollTrigger";

// Icons
import WidgetsIcon from "@mui/icons-material/Widgets";
import ExtensionIcon from "@mui/icons-material/Extension";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// Import assets
import useHeaderStyles from "assets/styles/headerStyle";
import { houseInfo } from "hooks/useToast";

import MainLogo from "assets/images/Offero.png";
import Metamask from "assets/images/Metamask.png";
import defaultAvatar from "assets/images/avatar.png";
import { useCookies } from "react-cookie";
import { connectorsByName } from "mainConfig";
// ------------

import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid black",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export const pages = [
  {
    label: "My NFTs",
    router: "../../house/nfts",
  },
  
];

export const houseMenu = [
  {
    label: "My NFTs",
    router: "../../house/nfts",
    authRequired: true,
  },
];

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  const classes = useHeaderStyles();
  const navigate = useNavigate();
  const { account, activate, deactivate } = useWeb3React();

  const [notifies, setNotifies] = useState([]);
  const [badgeLeng, setBadgeLeng] = useState("");
  const [cookies, setCookie] = useCookies(["housebusiness"]);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const isUserMenuOpen = Boolean(userMenuOpen);
  const [notifyOpen, setNotifyOpen] = useState(false);
  const isNotifyOpen = Boolean(notifyOpen);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [allMyNFTs, setAllMyNFTs] = useState([])

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(!drawerOpen);
  };

  const pathname = location.pathname;

  const handleMenuClick = (page) => {
    navigate(page.router);
  };

  const handleNotify = () => {
    navigate("../../contract/main");
  };

  const handleNotifyMenuOpen = (event) => {
    setCookie("notifies", JSON.stringify(notifies), { path: "/" });
    setNotifyOpen(event.currentTarget);
  };

  const handleProfileMenuOpen = (event) => {
    setUserMenuOpen(event.currentTarget);
  };

  const handleDisconnectWallet = () => {
    deactivate();
    setCookie("connected", false, { path: "/" });
  };

  useEffect(() => {
    if (pathname != "/house/nfts") {
      if (!account && cookies.connected != "true") {
        houseInfo("Please connect your wallet");
        navigate("../../house/nfts");
      }
    }
    if (account) {
    }
  }, [account, pathname]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const setProvider = (type) => {
    window.localStorage.setItem("provider", type);
  };

  const handleConnectWallet = (con, conName) => {
    activate(con);
    setProvider(conName);
    setCookie("connected", true, { path: "/" });
    handleClose();
  };

  useEffect(() => {
    if (account) {
      // loadNFTs()
    }
  }, [account])

  return (
    <div>
      <CssBaseline />
      <AppBar className={classes.appbar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer()}
            edge="start"
            sx={{ mr: 2 }}
          >
            <WidgetsIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img alt="Akachi NFT Main Logo" src={MainLogo} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Akachi NFT Marketplace
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label={`show ${badgeLeng} new notifications`}
              // aria-controls={notifyId}
              onClick={handleNotifyMenuOpen}
              color="inherit"
            >
              {badgeLeng > 0 ? (
                <Badge badgeContent={badgeLeng} color="error">
                  <NotificationsIcon />
                </Badge>
              ) : (
                <NotificationsIcon />
              )}
            </IconButton>
            <Tooltip title="Account settings">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                {
                  allMyNFTs.length>0 ?(
                    <Avatar alt="Borget" src={allMyNFTs[0].tokenURI} />
                  ):(
                    <Avatar alt="Borget" src={defaultAvatar} />
                  )
                }
                {/*  */}
                
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <ElevationScroll {...props}>
        <Drawer anchor={"left"} open={drawerOpen} onClose={toggleDrawer()}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
          >
            <Box component={"h3"} gutterBottom sx={{ p: 2, pb: 0 }}>
              NFT
            </Box>
            <Divider />
            <List>
              {houseMenu.map((page, index) => {
                if (page.authRequired === true && !account) {
                  return null;
                }
                return (
                  <ListItem
                    button
                    key={index}
                    onClick={() => handleMenuClick(page)}
                  >
                    <ListItemIcon>
                      <ExtensionIcon />
                    </ListItemIcon>
                    <ListItemText primary={page.label} />
                  </ListItem>
                );
              })}
            </List>
            
          </Box>
        </Drawer>
      </ElevationScroll>

      {/* User Menu */}
      <Menu
        anchorEl={userMenuOpen}
        id="account-menu"
        open={isUserMenuOpen}
        onClose={() => setUserMenuOpen(false)}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={account ? () => {} : handleOpen}>
          <ListItemIcon>
            <AccountBalanceWalletIcon fontSize="small" />
          </ListItemIcon>
          {account ? `${account.slice(0, 8)}...` : "Connect Wallet"}
        </MenuItem>
        {/* <MenuItem>
          <ListItemIcon>
            <PermContactCalendarIcon fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={() => handleDisconnectWallet()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem> */}
      </Menu>

      {/* Notify Menu */}
      <Menu
        sx={{ mt: "45px" }}
        anchorEl={notifyOpen}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id="notify-menu"
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isNotifyOpen}
        onClose={() => setNotifyOpen(false)}
      >
        <Paper square sx={{ pb: "50px", width: "500px", boxShadow: "none" }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ p: 2, pb: 0 }}
          >
            Notifies
          </Typography>
          <List sx={{ mb: 2 }} onClick={handleNotify}>
            {notifies.map(({ ccID, nSender, notifyContent }, key) => (
              <Fragment key={key}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={defaultAvatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={notifyContent}
                    secondary={`From ${nSender} in contract id: ${ccID}`}
                  />
                </ListItem>
              </Fragment>
            ))}
          </List>
        </Paper>
      </Menu>

      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab
          color="primary"
          size="small"
          aria-label="scroll back to top"
          className={classes.topScroll}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Select Wallet
          </Typography>

          <MenuItem
            onClick={() => {
              handleConnectWallet(connectorsByName.injected, "injected");
            }}
          >
            <ListItemIcon>
              <Avatar alt="metamask" src={Metamask} />
            </ListItemIcon>
            MetaMast
          </MenuItem>
        </Box>
      </Modal>
    </div>
  );
}
