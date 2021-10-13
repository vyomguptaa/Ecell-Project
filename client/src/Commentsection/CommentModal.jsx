// import PostContent from "./PostContent";
import React from "react";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import ClickOutHandler from "react-clickout-handler";
// import CommentForm from "./CommentForm";
// import Comments from "./Comments";
// import RootCommentContext from "./RootCommentContext";
import Comment from "./Comment";

function CommentModal(props) {
  const myCustModalStyle = {
    overlay: {
      background: "#212529"
    },
    content:{
      background: "linear-gradient(180deg, #E9ECEF -1.63%, #DEE2E6 100%)"
    }
  };
  const [comment, setComment] = useState({});
  const [modalIsOpen, setmodalIsOpen] = useState(true);
  const visibleClass = props.open ? "block" : "hidden";
  let history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:4000/comments/" + props.id).then((response) => {
      setComment(response.data);
    });
  }, [props.id]);

  // function close() {
  //     setComment({});
  //     props.onClickOut();
  // }

  function redirectToHost() {
    history.push("/");
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={redirectToHost}
      style={myCustModalStyle}
    >
      <div className="" >
        <div className="block overflow-scroll" style={{}}>
          <Comment comment={comment} id={props.id} />
        </div>
      </div>
    </Modal>
    // <div className={"w-screen h-screen fixed top-0 left-0 z-20 flex " + visibleClass} style={{ backgroundColor: "rgba(0,0,0,.8)" }}>
    //     {/* <ClickOutHandler onClickOut={() => close()}>
    //         <div className="border my-4 border-reddit_dark-brightest w-3/4 lg:w-1/2 bg-reddit_dark-brighter text-reddit_text self-center p-4 mx-auto rounded-md">
    //             <div className="block overflow-scroll" style={{ maxHeight: "calc(100vh - 50px)" }}>
    //                 <Comment comment={comment} id={props.id} />
    //             </div>
    //         </div>
    //     </ClickOutHandler> */}

    // </div>
  );
}

export default CommentModal;
