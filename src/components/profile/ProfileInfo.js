import React from "react";
import ProfileStatus from "./ProfileStatus";
import User from "../users/img/149071.png";
import "./ProfileInfo.css";

const ProfileInfo = props => {
  return (
    <div className="profile__about">
      <img
        className="profile__photo"
        src={props.profile.photos.large ? props.profile.photos.large : User}
        alt=""
      />
      <div className="profile__inner">
        <p className="profile__name">{props.profile.fullName}</p>
        <ProfileStatus
          changeUserStatus={props.changeUserStatus}
          status={props.status}
        />

        <table className="profile__data">
          <tbody>
            <tr>
              <td>About me:</td>
              <td>{props.profile.aboutMe}</td>
            </tr>
            <tr>
              <td>Ищу работу:</td>
              <td>{props.profile.lookingForAJob ? "да" : " нет"}</td>
            </tr>
            <tr>
              <td>Описание:</td>
              <td>
                {props.profile.lookingForAJobDescription
                  ? props.profile.lookingForAJobDescription
                  : "-"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProfileInfo;
