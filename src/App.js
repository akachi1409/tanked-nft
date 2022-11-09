import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import Router from "routes";
import { useEagerConnect, useInactiveListener } from "hooks/useWeb3";
import "assets/css/base.css";
import { setupNetwork } from "utils/web3React";
import { houseInfo } from "hooks/useToast";

const App = () => {
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = useWeb3React();

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState();

  useEffect(() => {
    if (window?.ethereum) {
      setupNetwork();
    } else {
      houseInfo("Please install metamask.");
    }
  }, []);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  return <Router />;
};

export default App;
