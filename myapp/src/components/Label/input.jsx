import React from "react";

function Input({ type = "text", placeholder = "", id }) {
  return <input type={type} placeholder={placeholder} id={id} />;
}

export default Input;
