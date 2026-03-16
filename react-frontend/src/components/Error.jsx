import styles from "./Error.module.css";

export const Error = ({data}) => {
  return (
    <div className={`${styles.error} horizontalCenter`}>
      <div>
        {data}
      </div>
    </div>
  )
} 