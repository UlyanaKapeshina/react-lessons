import React from "react";
import "./Profile.css";
import MyPostsContainer from "./MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

const Profile = props => {
  return (
    <section className="app__profile">
      <div className="profile__wrapper">
        <ProfileInfo
          profile={props.profile}
          changeUserStatus={props.changeUserStatus}
          status={props.status}
        />
        <MyPostsContainer />
      </div>
    </section>
  );
};
export default Profile;
