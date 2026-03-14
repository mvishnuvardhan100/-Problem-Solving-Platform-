import { SignUpInTopBar } from "../components/SignUpInTopBar"
import styles from "./Signup.module.css"
import { SignHeader } from "../components/SignHeader"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  return (
    <div className={styles.containerOfEverthing}>
      <SignUpInTopBar></SignUpInTopBar>
      <div className={styles.mainBar}>
       <div className={styles.card}>
        <SignHeader data={"Sign up"} />
        <Input onChange={(e) => {
          setFirstName(e.target.value);
        }} placeHolder={"Enter firstname"} type={"text"} value={firstName} />
        <Input onChange={(e) => {
          setLastName(e.target.value);
        }}  placeHolder={"Enter lastname"} type={"text"} value={lastName} />
        <Input onChange={(e) => {
          setEmail(e.target.value);
        }} placeHolder={"Enter email"} type={"email"} value={email} />
        <Input onChange={(e) => {
          setPassword(e.target.value);
        }} placeHolder={"Create password"} type={"password"} value={password} />
        <Button data={"Create"} />
        <BottomWarning label={"Already have account?"} to={"/signin"} toName={"Sign in"} />
       </div>
      </div>
    </div>
  )
}