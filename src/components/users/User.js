import React from "react";
import "./Users.css";
import { NavLink } from "react-router-dom";

const User = props => {
  const { user, avatar, onClick, isLoadingFollow } = props;

  return (
    <li key={user.id} className="users__item user">
      <div className="user__info">
        <NavLink to={"/profile/" + user.id}>
          <img
            src={user.photo ? user.photo : avatar}
            alt="user-avatar"
            className="user__photo"
          />
        </NavLink>
        <button
          className="user__button"
          onClick={onClick}
          disabled={isLoadingFollow.some(it => it === user.id)}
        >
          {user.followed ? "unfollow" : "follow"}
        </button>
      </div>
      <div className="user__description">
        <p className="user__name">{user.name}</p>
        <p className="user__status">
          {user.status ? user.status : "status will be here.."}
        </p>
      </div>
    </li>
  );
};
export default User;
