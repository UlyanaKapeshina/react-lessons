import { addMessage } from "../redux/dialogs-reducer";
import Messages from "./Messages";
import { connect } from "react-redux";
import { withAuthRedirectComponent } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

// const MessagesContainer = props => {
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         let state = store.getState().messagesPage;

//         const updateMessageText = text => {
//           store.dispatch(updateMessageAreaActionCreator(text));
//         };

//         const sendMessage = () => {
//           store.dispatch(addMessageActionCreator());
//         };
//         return (
//           <Messages
//             updateMessageText={updateMessageText}
//             sendMessage={sendMessage}
//             newMessageText={state.newMessageText}
//             dialogsData={state.dialogsData}
//             messageData={state.messageData}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = state => {
  return {
    newMessageText: state.messagesPage.newMessageText,
    dialogsData: state.messagesPage.dialogsData,
    messageData: state.messagesPage.messageData
  };
};

export default compose(
  connect(mapStateToProps, {
    addMessage
    // updateMessageArea
  }),
  withAuthRedirectComponent
)(Messages);
