import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Sidebar = () => {
  const toggleMenu = () => {
    let navigation = document.querySelector(".sidebar");
    let toggle = document.querySelector(".toggle");
    navigation.classList.toggle("active");
    toggle.classList.toggle("active");
  };
  const { user } = useAuth();
  return (
    <div>
      <div className="sidebar side-backg">
        <ul>
          <li>
            <div onClick={toggleMenu} className="a toggle">
              <span className="icon p-1">
                <i class="fas fa-bars"></i>
              </span>
              <span className="title ps-3 p-1">Shonghoton</span>
            </div>
          </li>
          {user.email ? (
            <div>
              <li>
                <Link className="a text-white" to="/home">
                  <span className="icon p-1">
                    <i class="fas fa-home"></i>
                  </span>
                  <span className="title ps-3 p-1">home</span>
                </Link>
              </li>
              <li>
                <Link className="a text-white" to="/members">
                  <span className="icon p-1">
                    <i class="fas fa-users"></i>
                  </span>
                  <span className="title ps-3 p-1">members</span>
                </Link>
              </li>
              <li>
                <Link className="a text-white" to="/fundhistory">
                  <span className="icon p-1">
                    <i class="fas fa-wallet"></i>
                  </span>
                  <span className="title ps-3 p-1">fundhistory</span>
                </Link>
              </li>
              <li>
                <Link className="a text-white" to="/events">
                  <span className="icon p-1">
                    <i class="fas fa-calendar-check"></i>
                  </span>
                  <span className="title ps-3 p-1">events</span>
                </Link>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link className="a text-white" to="/home">
                  <span className="icon p-1">
                    <i class="fas fa-home"></i>
                  </span>
                  <span className="title ps-3 p-1">home</span>
                </Link>
              </li>
              <li>
                <Link className="a text-white" to="/members">
                  <span className="icon p-1">
                    <i class="fas fa-users"></i>
                  </span>
                  <span className="title ps-3 p-1">members</span>
                </Link>
              </li>
              <li>
                <Link className="a text-white" to="/registration">
                  <span className="icon p-1">
                    <i class="fas fa-users"></i>
                  </span>
                  <span className="title ps-3 p-1">Register</span>
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
