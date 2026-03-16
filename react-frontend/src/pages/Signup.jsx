import { SignUpInTopBar } from "../components/SignUpInTopBar"
import styles from "./Signup.module.css"
import { SignHeader } from "../components/SignHeader"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useEffect, useState } from "react";
import { Error } from "../components/Error";
import { AuthContext } from "../AuthContext";
import {  useNavigate } from "react-router-dom";
import { useContext } from "react";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [signupError, setSignupError] = useState("");
  const { login, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(isLoggedIn) navigate("/");
  }, [isLoggedIn]);

  return (
    <div className={styles.containerOfEverthing}>
      <SignUpInTopBar></SignUpInTopBar>
      <div className={styles.mainBar}>
       <div className={styles.card}>
        <SignHeader data={"Sign up"} />
        <Input onChange={(e) => {
          setFirstName(e.target.value);
          if(signupError == true) setSignupError(false);
        }} placeHolder={"Enter firstname"} type={"text"} value={firstName} />
        <Input onChange={(e) => {
          setLastName(e.target.value);
          if(signupError == true) setSignupError(false);
        }}  placeHolder={"Enter lastname"} type={"text"} value={lastName} />
        <Input onChange={(e) => {
          setEmail(e.target.value);
          if(signupError == true) setSignupError(false);
        }} placeHolder={"Enter email"} type={"email"} value={email} />
        <Input onChange={(e) => {
          setPassword(e.target.value);
          if(signupError == true) setSignupError(false);
        }} placeHolder={"Create password"} type={"password"} value={password} />
        <Button onClick={() => {
          fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              firstName,
              lastName,
              email,
              password
            })
          }).then((response) => {
            response.json().then((result) => {
              if(!response.ok) {
                console.log("Parsing Error");
                setSignupError(true);
              } else {
                setSignupError(false);
                console.log("Success");
                login(result.token);
              }
            })
          }).catch((err) => {
            console.log("Error: " + err);
            setSignupError(true);
          })
        }} data={"Create"} />

        {signupError == true && <Error data={"email already exist or password is too weak"}/>}
        

        <BottomWarning label={"Already have account?"} to={"/signin"} toName={"Sign in"} />
       </div>
      </div>
    </div>
  )
}