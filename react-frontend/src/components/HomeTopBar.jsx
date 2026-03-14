import styles from './HomeTopBar.module.css'; 
import { Link } from "react-router-dom";

export const HomeTopBar = () => {
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
        <div className="verticalCenter">
          <div>
            <Link to={"/signin"}>
               Sign in
            </Link>
          </div>
        </div>
        <div className="verticalCenter">
          <div>
            <Link to={"/signup"}>
               Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}