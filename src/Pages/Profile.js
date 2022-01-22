import React from "react";
import { useNavigate, useParams} from "react-router-dom";
//rcfe short to, rafc, rafce,
//

const Profile = () => {
  let navigate = useNavigate();
    let {username} = useParams();
  return (
    <div>
      This is the profile page for {username}!
      <button
        onClick={() => {
          navigate("/About");
        }}
      >
        Change to about page
      </button>
    </div>
  );
};

export default Profile;
