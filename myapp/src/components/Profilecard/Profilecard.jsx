import React from "react";
import img from "../../components/Image/avatar1.jpg";
import "./Profilecard.css";


const ProfileCard = () => {
  return (
    <div className="profile-container">
      <div className="profile-banner" />
      <div className="profile-content">
              <img
                  src={img}
                  alt="Profile"
                  className="profile-image" />
        <div className="profile-info">
          <h1 className="profile-name">Emma Roberts</h1>
          <div className="profile-stats">
            <span>
              <strong>323</strong> Posts
            </span>
            <span>
              <strong>3.5k</strong> Followers
            </span>
            <span>
              <strong>260</strong> Following
            </span>
          </div>
          <p className="profile-bio">
            A wordsmith who believes in the power of language to shape our
            world, inspire change, and connect us all. I bring a unique
            perspective to the writing, blending the knowledge and experiences
            into thought-provoking narratives.
          </p>
          <button className="more-about">MORE ABOUT ME →</button>
        </div>
        <button className="follow-button">FOLLOW</button>
      </div>
    </div>
  );
};

export default ProfileCard;
