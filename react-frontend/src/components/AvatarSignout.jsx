import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./AvatarSignout.module.css";
import { AuthContext } from "../AuthContext";


export const AvatarSignout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:3000/firstLastName", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "authorization": localStorage.getItem("token")
      }
    }).then((response) => {
      response.json().then((result) => {
        if(!response.ok) {
          console.log("Error");
          setIsLoading(false);
        } else {
          setFirstName(result.firstName);
          setLastName(result.lastName);
          setIsLoading(false);
        }
      }).catch((err) => {
        console.log("Error");
        setIsLoading(false);
      })
    })
  }, []);

  if(isLoading) return <></>

  return (
    <>
     <div className="verticalCenter">
        <div>
          <Link to={"/profile"}>
            <img className={styles.avatar} src={`https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=random`} alt="userAvatar" />
          </Link>
        </div>
     </div>
     <div className="verticalCenter">
        <div>
          <button onClick={() => {
            logout();
          }} className={styles.signoutButton}>Sign out</button>
        </div>
     </div>
    </>
  );

}