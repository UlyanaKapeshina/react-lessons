import React from "react";
import "./Post.css";
import like from "./like.svg";

const Post = props => {
  return (
    <li className="post__item">
      <p>
        <img
          className="post__avatar"
          src="https://i.pinimg.com/736x/61/e0/9d/61e09d6ff43a5b2da4da5f6a6f045a91.jpg"
          alt=""
        />
      </p>
      <p className="post__text">{props.message}</p>
      <div className="post__likes">
        <img className="post__like" src={like} width="15" alt="" />

        <span>{props.likeCount}</span>
      </div>
    </li>
  );
};
export default Post;
