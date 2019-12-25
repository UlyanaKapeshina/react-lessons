import React from "react";

import { Field, reduxForm } from "redux-form";

import s from "./Messages.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";
import { Textarea } from "../commons/FormControls";
import { required, maxLengthCreator } from "../utils/validators";

const Messages = props => {
  let dialogsElements = props.dialogsData.map(el => (
    <DialogItem name={el.name} key={el.id} />
  ));
  let messageElements = props.messageData.map(el => (
    <Message message={el.text} key={el.id} />
  ));

  const onSubmit = formData => {
    props.addMessage(formData.message);
  };

  return (
    <div className={s.messages}>
      <ul className={s.dialog__list}>{dialogsElements}</ul>
      <div className={s.messages__box}>
        <ul className={s.messages__list}>{messageElements}</ul>

        <ReduxAddMessageForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
export default Messages;
const maxLength100 = maxLengthCreator(100);
const AddMessageForm = props => {
  return (
    <>
      <form onSubmit={props.handleSubmit} className={s.message__form}>
        <Field
          className={s.messages__text}
          name="message"
          placeholder="введите сообщение"
          validate={[required, maxLength100]}
          component={Textarea}
        ></Field>
        <button className={s.messages__button}>send message</button>
      </form>
    </>
  );
};
const ReduxAddMessageForm = reduxForm({ form: "addmessage" })(AddMessageForm);
