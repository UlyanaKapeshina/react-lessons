import React from "react";
import "./Users.css";

import avatar from "./img/149071.png";
import User from "./User";
import Pagination from "./Pagination";
const Users = props => {
  return (
    <section className="users">
      <Pagination
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageButtonClick={props.onPageButtonClick}
      />
      <ul className="users__list">
        {props.users.map(user => (
          <User
            key={user.id}
            user={user}
            avatar={avatar}
            onClick={() => props.onFollowButtonClick(user.id, user.followed)}
            isLoadingFollow={props.isLoadingFollow}
          />
        ))}
      </ul>
    </section>
  );
};

export default Users;
