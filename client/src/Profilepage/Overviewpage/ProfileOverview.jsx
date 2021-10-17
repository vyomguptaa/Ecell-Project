import React from "react";
import ProfileBioSection from "./ProfileBioSection";
import ProfileMainSection from "./ProfileMainSection";
import ProfilePrivate from "./ProfilePrivate";

function ProfileOverview() {
  return (
    <div>
      <div className="mainAnd__bio">
        <ProfileMainSection />
        <ProfileBioSection />
      </div>
      <ProfilePrivate />
    </div>
  );
}

export default ProfileOverview;
