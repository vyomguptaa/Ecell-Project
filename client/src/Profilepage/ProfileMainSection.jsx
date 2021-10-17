import React,{useState} from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import VisibilityIcon from '@mui/icons-material/Visibility';

function ProfileMainSection() {
  const [privateInfoState, setprivateInfoState] = useState(false);

  return (
    <div className="profileMainSection__mainDiv">
      <img src="/Images/ellipse.png" alt="" />
      <p>palanikannan</p>
      <button className="profileMainButton__connect" onClick={()=>{setprivateInfoState(true)}}>Connect</button>
      <button className="profileMainButton__follow">Follow</button>
      <div className="details">
        <div className="likes">
          <p>Likes</p>
          <FavoriteIcon />
        </div>
        <div className="comments">
          <p>Comments</p>
          <InsertCommentIcon />
        </div>
        <div className="views">
          <p>Views</p>
          <VisibilityIcon />
        </div>
      </div>
    </div>
  );
}

export default ProfileMainSection;
