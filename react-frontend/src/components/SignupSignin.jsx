import { Link } from "react-router-dom";

export const SignupSignin = () => {
  return (
    <>
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
    </>
  )
}