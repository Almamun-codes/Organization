import React from "react";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <div className="sticky-top">
      <div className="container-fluid heading py-2">
        <div className="d-flex justify-content-between">
          <div className=" ms-3 text-white">
            <h1>Shonghothon</h1>
          </div>
          <div className="mt-2 me-3">
            <i class="fas fa-user fs-2 me-2"></i>
            <span>{user.displayName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
