import React from "react";
import s from "./Message.module.css";

const Message = props => {
  return <li className={s.messages__item}>{props.message}</li>;
};

export default Message;
