import React from "react";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="title">Welcome</div>
    <div className="video-container">
      <video className="background-video" autoPlay muted loop>
        <source
          src="https://player.vimeo.com/external/214459720.sd.mp4?s=322fe3a53fcfa9898ada1217b89e78f4644c7d5d&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
        Your browser does not support this video.
      </video>
    </div>
  </div>
);

export default Header;
