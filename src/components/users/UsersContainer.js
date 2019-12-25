import React from "react";
import { connect } from "react-redux";
import Users from "./Users";

import { getUsersData, followUser, unfollowUser } from "../redux/users-reducer";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsLoadingUsers,
  getIsLoadingFollow
} from "../redux/users-selectors";

import Preloader from "../Preloader.js/Preloader";
import { compose } from "redux";
// import { withAuthRedirectComponent } from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersData(this.props.currentPage, this.props.pageSize);
  }

  onFollowButtonClick = (id, followed) => {
    followed ? this.props.unfollowUser(id) : this.props.followUser(id);
  };
  onPageButtonClick = pageNumber => {
    this.props.getUsersData(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isLoadingUsers ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageButtonClick={this.onPageButtonClick}
            users={this.props.users}
            onFollowButtonClick={this.onFollowButtonClick}
            isLoadingFollow={this.props.isLoadingFollow}
          />
        )}
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isLoadingUsers: state.usersPage.isLoadingUsers,
//     isLoadingFollow: state.usersPage.isLoadingFollow
//   };
// };
const mapStateToProps = state => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isLoadingUsers: getIsLoadingUsers(state),
    isLoadingFollow: getIsLoadingFollow(state)
  };
};

export default compose(
  connect(mapStateToProps, {
    getUsersData,
    followUser,
    unfollowUser
  })
  // withAuthRedirectComponent
)(UsersContainer);
