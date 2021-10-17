import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfileMenuBar from "./ProfileMenuBar";
import ProfileOverview from "./Overviewpage/ProfileOverview";
import ProfilePost from "./Postpage/ProfilePost";

function ProfilePage() {
  return (
    <Router>
      <Switch>
        <div>
          <div className="profilePage__main--div">
            <ProfileMenuBar />
            <Route path="/ProfilePage/overview" component={ProfileOverview} />
            <Route path="/ProfilePage/mypost" component={ProfilePost} />
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default ProfilePage;
