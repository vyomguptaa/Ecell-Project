import axios from "axios";
import { useContext } from "react";
import RootPostContext from "./RootPostContext";

function Votingpost(props) {

  
  const rootPostInfo = useContext(RootPostContext);
  const { postTotals, userPostVotes } = rootPostInfo;
  const {postId}=props;
  
  const totalPost = postTotals && postId in postTotals
    ? postTotals[postId]
    : 0;

  const userPostVote = userPostVotes && postId in userPostVotes
    ? userPostVotes[postId]
    : 0;

     function sendPostVote(direction = "up") {
       const directionNumber = direction === "up" ? 1 : -1;
       if (directionNumber === userPostVote) {
         direction = "unvote";
       }
       const url =
         "http://localhost:4000/vote/" + props.postId + "/" + direction;
       axios.get(url, { withCredentials: true }).then(() => {
         rootPostInfo.refreshVotes();
       });
     }

  function handleVoteUp() {
    sendPostVote("up");
  }

  function handleVoteDown() {
    sendPostVote("down");
  }

    function arrowButton(directionName = "up") {
      const directionNumber = directionName === "up" ? 1 : -1;
      let classNames = "inline-block h-5 relative top-1 ";

      if (directionNumber === userPostVote) {
        classNames += " text-reddit_red";
      } else {
        classNames += " text-reddit_text-darker hover:text-white";
      }

      if (directionName === "up") {
        return (
          <button onClick={() => handleVoteUp()} className={classNames}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        );
      } else {
        return (
          <button onClick={() => handleVoteDown()} className={classNames}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        );
      }
    }

  return (
    <div className={"inline-block mr-2"}>
      {arrowButton("up")}
      <div className={"inline-block"}>{totalPost}</div>
      {arrowButton("down")}
    </div>
  );
}
export default Votingpost;