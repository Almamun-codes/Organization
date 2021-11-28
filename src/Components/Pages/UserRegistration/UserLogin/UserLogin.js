import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const UserLogin = () => {
  const {
    error,
    handlePasswordChange,
    handleEmailChange,
    signInWithPassWord,
    setuser,
    setError,
  } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const url = location.state?.from || "/home";

  // sign in with password
  const passwordSignIn = () => {
    signInWithPassWord()
      .then((result) => {
        // Signed in
        const loggedInUser = result.user;
        setuser(loggedInUser);
        navigate(url);
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="bg-white py-5 top-bg">
      <div className="container w-50 rounded shadow bg-color">
        <div className="py-5">
          <h2>Please login</h2>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                onBlur={handleEmailChange}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                onBlur={handlePasswordChange}
                required
                id="exampleInputPassword1"
              />
            </div>
            <p>
              <Link className="text-black" to="/registration">
                New User?
              </Link>
            </p>

            <p className="text-danger">{error}</p>

            <div class="btn bg-navbar" onClick={passwordSignIn}>
              LogIn
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
