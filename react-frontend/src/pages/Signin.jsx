import { SignUpInTopBar } from "../components/SignUpInTopBar"
import styles from "./Signin.module.css"
import { SignHeader } from "../components/SignHeader"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react";
import { Error } from "../components/Error";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext"
import { useContext } from "react";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signinError, setSigninError] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  

  return (
    <div className={styles.containerOfEverthing}>
      <SignUpInTopBar></SignUpInTopBar>
      <div className={styles.mainBar}>
       <div className={styles.card}>
        <SignHeader data={"Sign in"} />
        <Input onChange={(e) => {
          setEmail(e.target.value);
          if(signinError == true) setSigninError(false);
        }} placeHolder={"Enter email"} type={"email"} value={email} />
        <Input onChange={(e) => {
          setPassword(e.target.value);
          if(signinError == true) setSigninError(false);
        }} placeHolder={"Enter password"} type={"password"} value={password} />
        <Button onClick={() => {
          fetch("http://localhost:3000/signin", {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              email,
              password
            })
          }).then((response) => {
            response.json().then((result) => {
              if(!response.ok) {
                setSigninError(true);
                console.log("Sign-in failed:", result);
              } else {
                setSigninError(false);
                console.log("Sign-in success:", result);
                // localStorage.setItem("token", result.token);
                login(result.token);
                navigate("/");
              }
            })
          }).catch((err) => {
            setSigninError(true);
            console.log("Sign-in failed:", err);
          })
        }} data={"Sign in"} />  

        {signinError == true && <Error data={"Entered email or password is incorrect"}/>}

        <BottomWarning label={"Don't have account?"} to={"/signup"} toName={"Sign up"} />
       </div>
      </div>
    </div>
  )
}