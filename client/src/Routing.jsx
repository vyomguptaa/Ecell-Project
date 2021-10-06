import React from "react";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
import RoutingSwitch from "./RoutingSwitch";
import PostFormModal from "./Postsection/PostFormModal";
import AuthModal from "./SignUpsection/AuthModal";

function Routing() {
    return (
        <Router>
            <Header />
            <RoutingSwitch />
            <PostFormModal />
            <AuthModal />
        </Router>
    );
}

export default Routing;
