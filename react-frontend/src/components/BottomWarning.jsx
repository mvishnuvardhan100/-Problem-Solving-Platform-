import { Link } from "react-router-dom";

export const BottomWarning = ({label, to, toName}) => {
 
  return (
    <div className="horizontalCenter">
      <div>
       {label}
      </div>
      <div>
       <Link to={to}>
       {toName}
      </Link>
      </div>
    </div>
  )
}