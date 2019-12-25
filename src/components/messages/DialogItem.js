import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = props => {
  const path = "/messages/" + props.id;
  return (
    <li className={s.dialog__item}>
      <NavLink to={path} className={s.dialog__name} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default DialogItem;
