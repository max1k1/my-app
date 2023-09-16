import React from "react";
import "./MessageItem.css";
const MessageItem = ({ id, message }) => {
  return <div className="message">{message}</div>;
};

export default MessageItem;
