import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";

function ProfileBioSection() {
  return (
    <div className="profileBio__mainDiv">
      <div className="bioSection">
        <h1>Bio</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam nam
          cumque sunt, aut quod minus corrupti autem repellendus itaque, ullam
          error nulla deleniti! Officiis, alias doloremque. Non molestiae eaque
          et.
        </p>
      </div>

      <div className="portfolioLinks">
        <h1>Links</h1>
        <div className="github">
          <GitHubIcon />
          <a href="https://github.com">Github</a>
        </div>
        <div className="linkedin">
          <LinkedInIcon />
          <a href="https://www.linkedin.com">Linkedin</a>
        </div>
        <div className="codesandbox">
          <LinkIcon />
          <a href="http://codesandbox.io/">Codesandbox.io</a>
        </div>
      </div>
    </div>
  );
}

export default ProfileBioSection;
