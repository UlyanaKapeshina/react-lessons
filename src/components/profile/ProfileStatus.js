import React from "react";

class ProfileStatus extends React.Component {
  state = {
    isActiveStatusField: false,
    value: this.props.status
  };

  activateStatusField = () => {
    this.setState({ isActiveStatusField: true });
  };
  onInputChange = e => {
    this.setState({ value: e.currentTarget.value });
  };
  deactivateStatusField = () => {
    this.props.changeUserStatus(this.state.value);
    this.setState({ isActiveStatusField: false });
    this.setState({ value: this.props.status });
  };
  componentDidUpdate = (prevProps, prevState) => {
    // debugger;

    if (prevProps.status !== this.props.status) {
      this.setState({ value: this.props.status });
    }
  };

  render() {
    return (
      <div className="profile__status">
        {!this.state.isActiveStatusField && (
          <div className="">
            <span onDoubleClick={this.activateStatusField}>
              {this.props.status ? this.props.status : "Status will be here"}
            </span>
          </div>
        )}
        {this.state.isActiveStatusField && (
          <div className="">
            <input
              autoFocus={true}
              type="text"
              onChange={this.onInputChange}
              onBlur={this.deactivateStatusField}
              value={this.state.value}
            />
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
