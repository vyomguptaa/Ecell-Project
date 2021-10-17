import React from "react";
import ProfileBioSection from "./ProfileBioSection";
import ProfileMainSection from "./ProfileMainSection";
import ProfileMenuBar from "./ProfileMenuBar";
import ProfileOverview from "./ProfileOverview";
import ProfilePrivate from "./ProfilePrivate";

function ProfilePage() {
  return (
    <div>
      <div className="profilePage__main--div">
        <ProfileMenuBar />
        <ProfileOverview />
      </div>
    </div>
  );
}

export default ProfilePage;
