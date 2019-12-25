import "./MyPosts.css";
import { addPost } from "./../redux/profile-reducer";
import MyPosts from "./MyPosts";

import { connect } from "react-redux";

// const MyPostsContainer = props => {
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         let state = store.getState().profilePage;
//         const addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };
//         const updatePostArea = newText => {
//           store.dispatch(updatePostAreaActonCreator(newText));
//         };
//         return (
//           <MyPosts
//             addPost={addPost}
//             updatePostArea={updatePostArea}
//             newPostText={state.newPostText}
//             posts={state.posts}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
// debugger;
const mapStateToProps = state => {
  // debugger;
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);
export default MyPostsContainer;
