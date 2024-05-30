import { useState } from "react";

export const Togglable = (props) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.showContent}</button>
      </div>
      <div style={showWhenVisible} className="togglable">
        {props.children}
        <button onClick={toggleVisibility}>{props.hideContent}</button>
      </div>
    </div>
  );
};
