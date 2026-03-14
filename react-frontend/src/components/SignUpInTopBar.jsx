import styles from "./SignUpInTopBar.module.css";

export const SignUpInTopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBar1}>
        {/* 3. Keeping verticalCenter as a global string */}
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
      </div>
    </div>
  )
}