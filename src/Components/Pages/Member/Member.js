import React from "react";

const Member = ({ member }) => {
  return (
    <div className="col-sm-12 col-lg-4">
      <div className="m-5 heading p-2 shadow rounded">
        <img
          src={member.img}
          alt={member.name}
          className="w-100 img-thumbnail"
        />
        <h3
          style={{
            marginTop: "10px",
            backgroundColor: "white",
            borderRadius: "5px",
            color: "rgb(19, 46, 87)",
          }}
        >
          {member.name}
        </h3>
        <p>{member.address}</p>
        <p className="text-justify px-3">{member.description}</p>
      </div>
    </div>
  );
};

export default Member;
