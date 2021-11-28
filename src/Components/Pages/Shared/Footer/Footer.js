import React from "react";

const Footer = () => {
  return (
    <div className="backg pt-5 px-2">
      <div className="row g-0 mt-3 pb-3">
        <div className="col-xs-12 col-lg-4 pt-3 px-4">
          <h2>Shonghoton</h2>
          <p>Together | Happier</p>
        </div>
        <div className="col-xs-6 col-lg-4 px-4">
          <h5 className="border-bottom border-2">Links</h5>
          <p>Home</p>
          <p>Members</p>
        </div>
        <div className="col-xs-6 col-lg-4 px-4">
          <h5 className="border-bottom border-2">Address</h5>
          <p>123, Street Name</p>
          <p>City, contry</p>
          <p>0123456789</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
