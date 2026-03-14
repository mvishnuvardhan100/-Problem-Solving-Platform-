import styles from "./SignHeader.module.css";

export const SignHeader = ({data}) => {
  return (
    <div className={styles.header}>
      {data}
    </div>
  )
}