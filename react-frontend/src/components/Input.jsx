import styles from "./Input.module.css"

export const Input = ({placeHolder, type, onChange, value}) => {
  return (
    <div className={styles.inputDiv}>
      <input onChange={onChange} className={styles.input} type={type} placeholder={placeHolder} value={value} />
    </div>
  )
}