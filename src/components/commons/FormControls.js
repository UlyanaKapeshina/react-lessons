import React from "react";
import "./FormControls.css";

// const FormControl = Element => ({ input, meta, ...props }) => {
//   debugger;
//   const isError = meta.touched && meta.error;
//   return (
//     <>
//       <Element
//         {...input}
//         {...props}
//         className={isError ? "error " + props.className : props.className}
//       />
//       {isError && <span className="error__message">{meta.error}</span>}
//     </>
//   );
// };
// export const Textarea = FormControl("textarea");
// export const Input = FormControl("input");

export const Textarea = ({ input, meta, ...props }) => {
  const isError = meta.touched && meta.error;
  return (
    <>
      <textarea
        {...input}
        {...props}
        className={isError ? "error " + props.className : props.className}
      />
      {isError && <span className="error__message">{meta.error}</span>}
    </>
  );
};
export const Input = ({ input, meta, ...props }) => {
  const isError = meta.touched && meta.error;
  //   debugger;

  return (
    <>
      <input
        {...input}
        {...props}
        className={isError ? "error " + props.className : props.className}
      />
      {isError && <span className="error__message">{meta.error}</span>}
    </>
  );
};
