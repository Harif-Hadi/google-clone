import { useNavigate } from "react-router-dom";
import { auth, provider } from "../Firebase";
import "./SignUp.css";
import { signInWithPopup } from "firebase/auth";

import Button from "../components/Button";
import { useEffect } from "react";

const SignUp = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("user");
  useEffect(() => {
    if (user) navigate("/search");
  }, []);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const name = result.user.displayName;
        const photoURL = result.user.photoURL;

        localStorage.setItem("user", result.user);
        localStorage.setItem("name", name);
        localStorage.setItem("photoUrl", photoURL);
        navigate("/search");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sign_up-container">
      <div className="sign_up_content">
        <h2>Sign Up</h2>
        <Button onClick={signInWithGoogle} title="Sign Up With Google" />
      </div>
    </div>
  );
};

export default SignUp;
