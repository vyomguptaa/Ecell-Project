import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

function ProfilePrivate(props) {
  const connected = true;
  const emailid = "palanikannan.m2020@vitstudent.ac.in";
  const phoneNumber = "919137019147";
  return (
    <div className="profilePrivate__mainDiv">
      <h1>Private Info</h1>
      {connected ? (
        <div>
          <div className="phoneNo">
            <WhatsAppIcon
              style={{ background: "#46C554", borderRadius: "20%" }}
            />
            <span>Phone no: </span>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              {phoneNumber}
            </a>
          </div>
          <div className="emailId">
            <EmailIcon
              style={{
                background: "linear-gradient(#1A8DF3,#00CBFA)",
                borderRadius: "20%",
              }}
            />
            <span>Email ID: </span>
            <a href={`mailto: ${emailid}`}>{emailid}</a>
          </div>
        </div>
      ) : (
        "Connect to view!"
      )}
    </div>
  );
}

export default ProfilePrivate;
