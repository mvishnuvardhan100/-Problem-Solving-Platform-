import styles from "./Error.module.css";

export const Error = ({data}) => {
  return (
    <div className="horizontalCenter">
      <div claaName="error">
        {data}
      </div>
    </div>
  )
} 