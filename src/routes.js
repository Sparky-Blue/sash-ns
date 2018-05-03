import React from "react";
import { Route, Router } from "react-router-dom";
import App from "./App";
import Home from "./Home/Home";
import SashHome from "./Home/SashHome";
import HostMessages from "./components/HostMessages";
import HostInfo from "./components/HostInfo";
import NSrota from "./components/NSrota";
import HostsInfo from "./components/HostsInfo";
import Messages from "./components/Messages";
import HostRota from "./components/HostRota";
import Callback from "./Callback/Callback";
import Auth from "./Auth/Auth";
import history from "./history";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route
          exact
          path="/"
          render={props => <App auth={auth} {...props} />}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Route
          path="/sashhome"
          render={props => <SashHome auth={auth} {...props} />}
        />
        <Route path="/hostrota" component={HostRota} />
        <Route path="/hostmessages" component={HostMessages} />
        <Route path="/hostinformation" component={HostInfo} />
        <Route path="/NSrota" component={NSrota} />
        <Route path="/NSmessages" component={Messages} />
        <Route path="/NShostsinformation" component={HostsInfo} />
      </div>
    </Router>
  );
};
