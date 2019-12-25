import React from "react";
import Post from "./Post";
import { Field, reduxForm } from "redux-form";
import "./MyPosts.css";
import { required, maxLengthCreator } from "../utils/validators";
import { Textarea } from "../commons/FormControls";

const MyPosts = React.memo(props => {
  const postsItems = props.posts
    .map(el => (
      <Post key={el.id} message={el.message} likeCount={el.likeCount} />
    ))
    .reverse();

  const onSubmit = formData => {
    props.addPost(formData.post);
  };
  return (
    <div className="profile__posts">
      <h1 className="profile__title">My posts</h1>
      <ReduxAddPostForm onSubmit={onSubmit} />

      <ul className="profile__posts-list">{postsItems}</ul>
    </div>
  );
});
export default MyPosts;
const maxLength30 = maxLengthCreator(30);
const AddPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className="profile__form">
      <Field
        name="post"
        className="profile__text"
        component={Textarea}
        placeholder="add post"
        validate={[required, maxLength30]}
      ></Field>
      <button className="profile__button">Add post</button>
    </form>
  );
};
const ReduxAddPostForm = reduxForm({ form: "addPost" })(AddPostForm);
