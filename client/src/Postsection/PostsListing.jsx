import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";

function PostsListing() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/comments", { withCredentials: true }).then((response) => setComments(response.data));
    }, []);

    return (
        <div className="bg-reddit_dark mycontainer">
            {comments.map((comment,index) => (
                <Post key={index} {...comment} isListing={true} />
            ))}
        </div>
    );
}

export default PostsListing;
