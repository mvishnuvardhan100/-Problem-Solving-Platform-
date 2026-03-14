import { SignUpInTopBar } from "../components/SignUpInTopBar"
import styles from "./Signin.module.css"
import { SignHeader } from "../components/SignHeader"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.containerOfEverthing}>
      <SignUpInTopBar></SignUpInTopBar>
      <div className={styles.mainBar}>
       <div className={styles.card}>
        <SignHeader data={"Sign in"} />
        <Input onChange={(e) => {
          setEmail(e.target.value);
        }} placeHolder={"Enter email"} type={"email"} value={email} />
        <Input onChange={(e) => {
          setPassword(e.target.value);
        }} placeHolder={"Enter password"} type={"password"} value={password} />
        <Button data={"Sign in"} />
        <BottomWarning label={"Don't have account?"} to={"/signup"} toName={"Sign up"} />
       </div>
      </div>
    </div>
  )
}