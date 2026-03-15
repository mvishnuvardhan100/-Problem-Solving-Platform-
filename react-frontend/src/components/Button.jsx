import styles from "./Button.module.css";

export const Button = ({data, onClick}) => {
  return (
    <div className={styles.buttonDiv}>
      <button onClick={onClick} className={styles.button}>{data}</button>
    </div>
  )
}