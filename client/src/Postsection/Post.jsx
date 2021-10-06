import React from "react";
import { Link } from "react-router-dom";
import PostContent from "./PostContent";

function Post(props) {
    let postClasses = "block border rounded-md " + (props.open ? "" : "hover:border-reddit_text cursor-pointer");
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
                    <PostContent {...props} />
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
                    <PostContent {...props} />
                </Link>
            )}
        </div>
    );
}

export default Post;
