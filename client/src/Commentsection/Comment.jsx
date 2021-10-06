import React, { useEffect, useState } from "react";
import Post from "../Postsection/Post";
import CommentForm from "./CommentForm";
import RootCommentContext from "../RootCommentContext";
import Comments from "./Comments";
import axios from "axios";

function Comment(props) {
    const [comment, setComment] = useState({});
    const [comments, setComments] = useState([]);
    const [commentsTotals, setCommentsTotals] = useState(null);
    const [userVotes, setUserVotes] = useState(null);

    function refreshComments() {
        axios.get("http://localhost:4000/comments/root/" + props.id).then((response) => {
            setComments(response.data);
        });
    }

    function refreshVotes() {
        const commentsIds = [comment._id, ...comments.map((c) => c._id)];
        axios.post("http://localhost:4000/votes", { commentsIds }, { withCredentials: true }).then((response) => {
            setCommentsTotals(response.data.commentsTotals);
            setUserVotes(response.data.userVotes);
        });
    }

    useEffect(() => {
        if (props.comment) {
            setComment(props.comment);
        } else {
            axios.get("http://localhost:4000/comments/" + props.id).then((response) => {
                setComment(response.data);
            });
        }
        refreshComments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.id, props.comment]);

    useEffect(() => {
        refreshVotes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comments.length]);

    return (
        <>
            {comment && <Post {...comment} open={true} />}
            {!!comment && !!comment._id && (
                <>
                    <hr className="border-reddit_border my-4" />
                    <CommentForm onSubmit={() => refreshComments()} rootId={comment._id} parentId={comment._id} showAuthor={true} />
                    <hr className="border-reddit_border my-4" />
                    <RootCommentContext.Provider value={{ refreshComments, refreshVotes, commentsTotals, userVotes }}>
                        <Comments parentId={comment._id} rootId={comment._id} comments={comments} />
                    </RootCommentContext.Provider>
                </>
            )}
        </>
    );
}

export default Comment;
