import styles from "./HomeDescription.module.css";
import mainLogo from './mainLogo.png';

export const HomeDescription = () => {
  return (
    <div className={styles.middleBar}>
        <div className="verticalCenter">
          <div className={styles.description}>
            <span style={{fontWeight: 1000, fontSize: 50, paddingRight: 10}}>Be Interview Ready</span>
            <span style={{fontSize: 32}}>With QuickCoders</span>
          </div>
        </div>
        <div className="verticalCenter">
          <div>
            <img className={styles.mainLogo} src={mainLogo} alt="mainLogo" />
          </div>
        </div>
      </div>
  )
}