import styles from "./LoadingAvatarSignout.module.css";

export const LoadingAvatarSignout = () => {
  return (
    <>
     <div className="verticalCenter">
        <div>
          <span>
            <div className={styles.avatar} ></div>
          </span>
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