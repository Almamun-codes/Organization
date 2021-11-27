import React from "react";
import { Link } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";

const Sidebar = () => {
  // const { user } = useAuth();
  return (
    <div>
      <div className="sidebar bg-light">
        <ul>
          <li>
            <Link className="a pt-2" to="/home">
              <span className="icon p-1">
                <i class="fas fa-bars"></i>
              </span>
              <span className="title ps-3 p-1">Shonghoton</span>
            </Link>
          </li>
          {/* {user.email ? ( */}
          <div>
            <li>
              <Link className="a" to="/home">
                <span className="icon p-1">
                  <i class="fas fa-home"></i>
                </span>
                <span className="title ps-3 p-1">home</span>
              </Link>
            </li>
            <li>
              <Link className="a" to="/members">
                <span className="icon p-1">
                  <i class="fas fa-users"></i>
                </span>
                <span className="title ps-3 p-1">members</span>
              </Link>
            </li>
            <li>
              <Link className="a" to="/registration">
                <span className="icon p-1">
                  <i class="fas fa-users"></i>
                </span>
                <span className="title ps-3 p-1">Register</span>
              </Link>
            </li>
          </div>
          {/* ) : ( */}
          <div>
            <li>
              <Link className="a" to="/home">
                <span className="icon p-1">
                  <i class="fas fa-home"></i>
                </span>
                <span className="title ps-3 p-1">home</span>
              </Link>
            </li>
            <li>
              <Link className="a" to="/members">
                <span className="icon p-1">
                  <i class="fas fa-users"></i>
                </span>
                <span className="title ps-3 p-1">members</span>
              </Link>
            </li>
            <li>
              <Link className="a" to="/fundhistory">
                <span className="icon p-1">
                  <i class="fas fa-wallet"></i>
                </span>
                <span className="title ps-3 p-1">fundhistory</span>
              </Link>
            </li>
            <li>
              <Link className="a" to="/events">
                <span className="icon p-1">
                  <i class="fas fa-calendar-check"></i>
                </span>
                <span className="title ps-3 p-1">events</span>
              </Link>
            </li>
            <li>
              <Link className="a" to="/profile">
                <span className="icon p-1">
                  <i class="fas fa-user"></i>
                </span>
                <span className="title ps-3 p-1">profile</span>
              </Link>
            </li>
          </div>
          {/* )} */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
