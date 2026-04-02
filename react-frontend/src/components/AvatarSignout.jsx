import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./AvatarSignout.module.css";
import { AuthContext } from "../AuthContext";
import { LoadingAvatarSignout } from "./LoadingAvatarSignout";

export const AvatarSignout = ({}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { logout } = useContext(AuthContext);
  const [ localLoading, setLocalLoading ] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/verify", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
      }
    }).then((response) => {
      if(!response.ok) {
        logout();
      }
    }).catch((err) => {

    });
  });

  useEffect(() => {
    setLocalLoading(true);
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
          setLocalLoading(false);
        } else {
          setFirstName(result.firstName);
          setLastName(result.lastName);
          setLocalLoading(false);
        }
      }).catch((err) => {
        console.log("Error");
        setLocalLoading(false);
      })
    })
  }, []);

  if(localLoading) return <LoadingAvatarSignout />

  return (
    <div>
     <div className="verticalCenter">
        <div>
          <Link to={"/profile"}>
            <div className={styles.avatar} alt="userAvatar">
              {firstName[0] + " " + lastName[0]}
            </div>
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
    </div>
  );

}