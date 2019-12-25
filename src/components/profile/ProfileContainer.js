import React from "react";
import "./Profile.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getProfileData,
  changeUserStatus,
  getUserStatus
} from "../redux/profile-reducer";
import Preloader from "../Preloader.js/Preloader";
// import { withAuthRedirectComponent } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userId;
    if (!userID) {
      userID = this.props.id;
      if (!userID) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfileData(userID);
    this.props.getUserStatus(userID);
  }
  componentDidUpdate(prevProps, prevState) {
    let userID = this.props.match.params.userId;
    if (!userID) {
      userID = this.props.id;
      if (!userID) {
        this.props.history.push("/login");
      }
    }
    // this.props.getProfileData(userID);
    // this.props.getUserStatus(userID);
  }

  render() {
    return (
      <>
        {!this.props.profile || this.props.isLoading ? (
          <Preloader />
        ) : (
          <Profile
            {...this.props}
            profile={this.props.profile}
            changeUserStatus={this.props.changeUserStatus}
            status={this.props.status}
          />
        )}
      </>
    );
  }
}
let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isLoading: state.usersPage.isLoading,
  id: state.auth.id
});

export default compose(
  // withAuthRedirectComponent,
  connect(mapStateToProps, { getProfileData, changeUserStatus, getUserStatus }),
  withRouter
)(ProfileContainer);
