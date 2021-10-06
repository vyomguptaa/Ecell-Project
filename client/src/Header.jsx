// import Logo1 from "../../Images/vichar.png";
// import Logo1 from "../public/Images/vichar.png";
// import Add from './add.png';
// import JobBoard from "./job.png";
// import Avatar from "./ellipse.png";
// import Triangle from "./triangle.png";

import React, { useState, useContext } from "react";
import { BellIcon, ChatIcon, ChevronDownIcon, LoginIcon, LogoutIcon, PlusIcon, SearchIcon, UserIcon } from "@heroicons/react/outline";
import ClickOutHandler from "react-clickout-handler";
import Button from "./Button";
import AuthModalContext from "./SignUpsection/AuthModalContext";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";
import "./style.css";
import PostFormModalContext from "./Postsection/PostFormModalContext";

function Header() {
    const [userDropdownVisibilityClass, setUserDropdownVisibilityClass] = useState("hidden");
    function toggleUserDropdown() {
        if (userDropdownVisibilityClass === "hidden") {
            setUserDropdownVisibilityClass("block");
        } else {
            setUserDropdownVisibilityClass("hidden");
        }
    }
    const authModal = useContext(AuthModalContext);
    const user = useContext(UserContext);
    const PostFormModal = useContext(PostFormModalContext);
    return (
        <header className="w-full bg-reddit_head p-2">
            <div className="items-center flex">
                <Link to="/">
                    <img src="/Images/vichar.png" alt="" className="logo1" />
                </Link>
                <form action="" className="bg-reddit_head px-4 h-9 flex rounded-md border border-reddit_border-search mx-4 flex-grow">
                    <SearchIcon className="text-gray-300 h-6 w-6 mt-1" />
                    <input type="text" className="bg-reddit_head text-sm p-1 pl-2 pr-0 block focus:outline-none text-white" placeholder="Search" />
                </form>

                {user.username && (
                    <>
                        <button className="px-2 py-1">
                            <img src="/Images/triangle.png" alt="" className="text-gray-400 w-6 h-6 mx-2" />
                        </button>
                        {user.username && (
                            <>
                                {/* <Button
              className="mr-1 but-head h-8"
              onClick={() => PostFormModal.setShow("createPost")}
            >
             Add Ideas
            </Button> */}
                                <button className="px-2 py-1" onClick={() => PostFormModal.setShow("createPost")}>
                                    <img src="/Images/add.png" alt="Add Ideas" className="text-gray-400 w-6 h-6 mx-2" />
                                </button>
                            </>
                        )}

                        <button className="px-2 py-1">
                            <img src="/Images/job.png" alt="JobBoard" className="text-gray-400 w-6 h-6 mx-2" />
                        </button>
                    </>
                )}

                {!user.username && (
                    <div className="mx-2 hidden sm:block">
                        <Button outline={1} className="mr-1 h-8" onClick={() => authModal.setShow("login")}>
                            Log In
                        </Button>
                        <Button className="h-8" onClick={() => authModal.setShow("register")}>
                            Sign Up
                        </Button>
                    </div>
                )}

                <ClickOutHandler onClickOut={() => setUserDropdownVisibilityClass("hidden")}>
                    <button className="rounded-md flex ml-4 " onClick={() => toggleUserDropdown()}>
                        {!user.username && <UserIcon className="w-6 h-6 text-gray-400 m-1" />}
                        {user.username && (
                            <div className=" w-15 h-10 py-1 px-3">
                                <img src="/Images/ellipse.png" alt="avatar" className="w-8 h-8 avatar"></img>
                                <span className="text-white w-50 py-3 px-3 text-sm">{user.username}</span>
                            </div>
                            // <div className="bg-gray-600 rounded-md w-8 h-8">
                            //   <img
                            //     src={Avatar}
                            //     alt=""
                            //     style={{ filter: "invert(100%)" }}
                            //     className="block"
                            //   />
                            // </div>
                        )}

                        <ChevronDownIcon className="text-gray-500 w-5 h-5 mt-2 m-1" />
                    </button>
                    <div className={"absolute  top-8 bg-reddit_dark border border-gray-700 z-10 rounded-md text-reddit_text overflow-hidden " + userDropdownVisibilityClass}>
                        {user.username && <span className="block w-50 py-2 px-3 text-sm">Hello, {user.username}!</span>}
                        {!user.username && (
                            <button onClick={() => authModal.setShow("login")} className="block flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm">
                                <LoginIcon className="w-5 h-5 mr-2" />
                                Log In
                            </button>
                        )}
                        {user.username && (
                            <button onClick={() => user.logout()} className="block flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm">
                                <LogoutIcon className="w-5 h-5 mr-2" />
                                Logout
                            </button>
                        )}
                    </div>
                </ClickOutHandler>
            </div>
        </header>
    );
}

export default Header;

// import {
//   ChevronDownIcon,
//   LoginIcon,
//   LogoutIcon,
//   SearchIcon,
//   UserIcon,
// } from "@heroicons/react/outline";
// import Logo from "./ecell.png";
// import Logo1 from "./vichar.png";
// import Avatar from "./ellipse.png";
// import ClickOutHandler from "react-clickout-handler";
// import Button from "./Button";
// import { useState, useContext } from "react";
// import AuthModalContext from "./AuthModalContext";
// import UserContext from "./UserContext";
// import { Link } from "react-router-dom";
// import "./style.css";
// import PostFormModalContext from "./PostFormModalContext";

// function Header() {
//   const [userDropdownVisibilityClass, setUserDropdownVisibilityClass] =
//     useState("hidden");
//   function toggleUserDropdown() {
//     if (userDropdownVisibilityClass === "hidden") {
//       setUserDropdownVisibilityClass("block");
//     } else {
//       setUserDropdownVisibilityClass("hidden");
//     }
//   }
//   const authModal = useContext(AuthModalContext);
//   const user = useContext(UserContext);
//   const PostFormModal = useContext(PostFormModalContext);
//   return (
//     <header className="w-full bg-reddit_head p-2">
//       <div className="items-center flex">

//         <Link to="/">
//           <img src={Logo1} alt="" className="logo1 " />
//         </Link>

//         <form
//           action=""
//           className="bg-reddit_dark-brighter px-3 flex rounded-md border border-reddit_border mx-4 flex-grow"
//         >
//           <SearchIcon className="text-gray-300 h-6 w-6 mt-1" />
//           <input
//             type="text"
//             className="bg-reddit_dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white"
//             placeholder="Search"
//           />
//         </form>

//         {user.username && (
//           <>
//             <Button
//               className="mr-1 but-head h-8"
//               onClick={() => PostFormModal.setShow("createPost")}
//             >
//              Add Ideas
//             </Button>

//           </>
//         )}

//         {!user.username && (
//           <div className="mx-2 hidden sm:block">
//             <Button
//               outline={1}
//               className="mr-1 h-8"
//               onClick={() => authModal.setShow("login")}
//             >
//               Log In
//             </Button>
//             <Button
//               className="h-8"
//               onClick={() => authModal.setShow("register")}
//             >
//               Sign Up
//             </Button>
//           </div>
//         )}

//         <ClickOutHandler
//           onClickOut={() => setUserDropdownVisibilityClass("hidden")}
//         >
//           <button
//             className="rounded-md flex ml-4 "
//             onClick={() => toggleUserDropdown()}
//           >
//             {!user.username && (
//               <UserIcon className="w-6 h-6 text-gray-400 m-1" />
//             )}
//             {user.username && (
//               <div className=" w-15 h-10 py-1 px-3">
//                 <img src={Avatar} alt="avatar" className="w-8 h-8 avatar"></img>
//                 <span className="text-white w-50 py-3 px-3 text-sm">
//                   {user.username}
//                 </span>
//               </div>
//               // <div className="bg-gray-600 rounded-md w-8 h-8">
//               //   <img
//               //     src={Avatar}
//               //     alt=""
//               //     style={{ filter: "invert(100%)" }}
//               //     className="block"
//               //   />
//               // </div>
//             )}

//             <ChevronDownIcon className="text-gray-500 w-5 h-5 mt-2 m-1" />
//           </button>
//           <div
//             className={
//               "absolute  top-8 bg-reddit_dark border border-gray-700 z-10 rounded-md text-reddit_text overflow-hidden " +
//               userDropdownVisibilityClass
//             }
//           >
//             {user.username && (
//               <span className="block w-50 py-2 px-3 text-sm">
//                 Hello, {user.username}!
//               </span>
//             )}
//             {!user.username && (
//               <button
//                 onClick={() => authModal.setShow("login")}
//                 className="block flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm"
//               >
//                 <LoginIcon className="w-5 h-5 mr-2" />
//                 Log In
//               </button>
//             )}
//             {user.username && (
//               <button
//                 onClick={() => user.logout()}
//                 className="block flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm"
//               >
//                 <LogoutIcon className="w-5 h-5 mr-2" />
//                 Logout
//               </button>
//             )}
//           </div>
//         </ClickOutHandler>
//       </div>
//     </header>
//   );
// }

// export default Header;
