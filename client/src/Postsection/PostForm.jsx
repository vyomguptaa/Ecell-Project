import React,{ useContext} from "react";
import PostFormModalContext from "./PostFormModalContext";
import "../style.css";
// import Avatar from "./ellipse.png";

function myfunc(params) {
  console.log("I've been clicked!!")
}
function PostForm() {
  const modalContext = useContext(PostFormModalContext);
  return (
    <div className="bg-reddit_dark text-gray-400 ideabar">
      <div className=" p-2 rounded-md flex bg-reddit_dark-search_bar addIdeas__box">
        <img
          src="/Images/ellipse.png"
          alt="avatar"
          className="w-8 h-8 avatar"
        ></img>
        <form
          action=""
          className="flex-grow bg-reddit_dark-search_holder  ml-4 mr-2 rounded-md add"
        >
          <input
            type="text"
            onFocus={(e) => {
              e.preventDefault();
              myfunc();
              modalContext.setShow(true);
            }}
            className="bg-reddit_dark-search_holder p-2 px-3 text-sm block w-full rounded-md plus"
            placeholder="&#xf055;    Add Ideas"
          />
        </form>
      </div>
    </div>
  );
}

export default PostForm;
