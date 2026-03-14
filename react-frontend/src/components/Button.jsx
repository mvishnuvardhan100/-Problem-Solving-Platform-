import styles from "./Button.module.css";

export const Button = ({data}) => {
  return (
    <div className={styles.buttonDiv}>
      <button className={styles.button}>{data}</button>
    </div>
  )
}