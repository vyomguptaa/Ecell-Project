import React from "react";
import { Link } from "react-router-dom";
import PostContent from "./PostContent";
import PostContentInModal from "./PostContentInModal";

function PreviewText(propText) {
  if (propText.length > 200) {
    let propText1 = propText.slice(0, 200);
    while (
      propText1.charAt(propText1.length - 1) !== " " &&
      propText1.length !== 0
    ) {
      propText1 = propText1.slice(0, -1);
    }
    propText1 = propText1 + " ...Read More";
    return propText1;
  } else {
    return propText + " ...Read More";
  }
}

function Post(props) {
  const text = `${props.body}`;
  const finaltext = PreviewText(text);

  let postClasses =
    "block border rounded-md " +
    (props.open ? "" : "hover:border-reddit_text cursor-pointer");
  if (props.isListing) {
    postClasses += "  box p-5 sm-2 card border-2  ";
  } else {
    postClasses += " border-none";
  }
  // bg-reddit_dark-post_box
  return (
    <div className="text-reddit_text postcontent pb-4">
      {props.open && (
        <div className={postClasses}>
          {/* <PostContent type="post-modal" {...props} notcutDownText={props.body}/> */}
          <PostContentInModal
            type="post-modal"
            {...props}
            notcutDownText={props.body}
          />
        </div>
      )}
      {!props.open && (
        <Link
          to={{
            pathname: "/comments/" + props._id,
            state: { commentId: props._id },
          }}
          className={postClasses}
        >
          <PostContent {...props} cutDownText={finaltext} />
        </Link>
      )}
    </div>
  );
}

export default Post;
