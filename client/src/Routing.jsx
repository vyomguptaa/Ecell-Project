import React from "react";
import Header from "./Header";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import RoutingSwitch from "./RoutingSwitch";
import PostFormModal from "./Postsection/PostFormModal";
import AuthModal from "./SignUpsection/AuthModal";
import ProfilePage from "./Profilepage/ProfilePage";

function Routing() {
  return (
    <Router>
      <Header />
      <RoutingSwitch />
      <PostFormModal />
      <AuthModal />
      <Switch>
        <Route path="/ProfilePage" component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default Routing;
