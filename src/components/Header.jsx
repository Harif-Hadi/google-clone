import { useRef, useState } from "react";
import GoogleImage from "../images/google.png";

import "./Header.css";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [toggleProfile, setToggleProfile] = useState(false);
  const enteredSearchRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredSearch = enteredSearchRef.current.value;

    if (enteredSearch.trim() === "") return;
    else onSubmit(enteredSearch);
  };

  const signOutHandler = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("user");
      localStorage.removeItem("name");
      localStorage.removeItem("photoUrl");

      navigate("/");
    });
  };

  return (
    <header>
      <div className="left_side-container">
        <div className="left_side">
          <div className="left_side-image">
            <img src={GoogleImage} />
          </div>
          <form className="search" onSubmit={submitHandler}>
            <input type="text" ref={enteredSearchRef} />
          </form>
        </div>
      </div>
      <div
        className="right_side-container"
        onClick={() => setToggleProfile(!toggleProfile)}
      >
        <div className="image_container">
          <img src={localStorage.getItem("photoUrl")} alt="profilePic" />
        </div>
      </div>
      {toggleProfile && (
        <div className="toggle_container">
          <div className="toggledProfile">
            <h3>{localStorage.getItem("name")}</h3>
            <Button onClick={signOutHandler} title="Sign Out" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
