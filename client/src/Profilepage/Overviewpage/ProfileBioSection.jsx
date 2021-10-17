import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";

function ProfileBioSection() {
  return (
    <div className="profileBio__mainDiv">
      <div className="bioSection">
        <h1 style={{ fontSize: "1.4rem" }}>Bio</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam nam
          cumque sunt, aut quod minus corrupti autem repellendus itaque, ullam
          error nulla deleniti! Officiis, alias doloremque. Non molestiae eaque
          et.
        </p>
      </div>

      <div className="portfolioLinks">
        <h1 style={{ fontSize: "1.4rem" }}>Links</h1>
        <div className="github" style={{ margin: "1% 1% 1% 0" }}>
          <GitHubIcon style={{ marginRight: "1.3%" }} />
          <a href="https://github.com" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
        <div className="linkedin" style={{ margin: "1% 1% 1% 0" }}>
          <LinkedInIcon style={{ marginRight: "1.3%" }} />
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </div>
        <div className="codesandbox" style={{ margin: "1% 1% 1% 0" }}>
          <LinkIcon style={{ marginRight: "1.3%" }} />
          <a href="http://codesandbox.io/" target="_blank" rel="noreferrer">
            Codesandbox.io
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileBioSection;
