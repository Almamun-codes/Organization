import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const UserRegistration = () => {
  const {
    name,
    email,
    handleEmailChange,
    handleNameChange,
    handlePasswordChange,
    signUpWithPassword,
    error,
    setError,
    setuser,
    setIsLoading,
    updateName,
  } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const url = location.state?.from || "/home";

  // registrer with email pass
  const passwordSignUp = () => {
    if (name?.length > 4 && email?.length > 7) {
      signUpWithPassword()
        .then((result) => {
          console.log(result.user);
          updateName();
          setuser(result.user);
          // handleUserAdmit();
          setError("");
          navigate(url);
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        })
        .finally(setIsLoading(false));
    } else {
      setError("something went wrong");
    }
  };

  // keep user information in the db
  // const handleUserAdmit = () => {
  //   // user info
  //   const userInfo = {
  //     displayName: name,
  //     email: email,
  //     role: "user",
  //   };
  //   fetch("https://mighty-fjord-00429.herokuapp.com/user-add", {
  //     method: "post",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(userInfo),
  //   }).then(() => {});
  // };

  return (
    <div className="top-bg">
      <h1 className="text-center">Please Register!</h1>
      <div className="w-50 d-block ms-auto me-auto">
        <form className="shadow p-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              onBlur={handleNameChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              onBlur={handleEmailChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="InputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onBlur={handlePasswordChange}
              required
              id="InputPassword1"
            />
          </div>

          <p>
            <Link className="text-black" to="/login">
              Already Registered?
            </Link>
          </p>
          <p className="text-danger">{error}</p>

          <div onClick={passwordSignUp} className="btn bg-navbar me-3">
            Register
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
