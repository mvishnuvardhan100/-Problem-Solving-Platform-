import styles from './HomeTopBar.module.css'; 
import { Link } from "react-router-dom";
import { SignupSignin } from "./SignupSignin";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export const HomeTopBar = () => {
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <div className={styles.topBar}>
      <div className={styles.topBar1}>
        <div className="verticalCenter">
          <div>
            <a href="/">
              <span style={{ fontWeight: 1000 }}>Quick</span>
              <span>Coders</span>
            </a>
          </div>
        </div>
        <div className="verticalCenter">
          <div>
            <a href="/explore">Explore</a>
          </div>
        </div>
        <div className="verticalCenter">
          <div>
            <a href="/problems">Problems</a>
          </div>
        </div>
      </div>
      <div className={styles.topBar2}>
        <div>
          <input className={styles.search} type="text" placeholder="Type to Search" />
        </div> 
        {!isLoggedIn && <SignupSignin />}
        
      </div>
    </div>
  )
}