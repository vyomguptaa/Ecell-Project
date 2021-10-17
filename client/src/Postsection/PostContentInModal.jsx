import React from "react";
import TimeAgo from "timeago-react";

function PostContentInModal(props) {
  return (
    <div className="post__content--modal">
      <p className="post__title--modal">{props.title}</p>
      <div className="post__author--modal">
        {props.author} | <TimeAgo datetime={props.postedAt} />{" "}
      </div>
      <div className="post__body--modal">{props.body}</div>
    </div>
  );
}

export default PostContentInModal;
