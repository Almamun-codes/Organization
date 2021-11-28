import React from "react";

const CurrentCommittee = () => {
  const Committee = [
    {
      title: "Chairman",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPz3oCoh_qoWO-W12IIPgEQVeIZWXLzEt0Q&usqp=CAU",
      name: "Shadman Shakib Nishat",
      time: "01/12/21 - Current",
      Descriptio:
        "Nishat is an Optimistic dreamer. Has been working with different organization. He is Currently Studying polytical science in Chattagram govt. College.",
    },
    {
      title: "Secretary",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPz3oCoh_qoWO-W12IIPgEQVeIZWXLzEt0Q&usqp=CAU",
      name: "Arfychinul Nurhan Rakib",
      time: "01/12/21 - Current",
      Descriptio:
        "Rakib is a tech savy from islampur. He assures our all work done properly and keeps an eye on tech related issues. He is studying Diploma is CSE currently.",
    },
  ];
  return (
    <div>
      <div className="container mt-4">
        <h2 className="heading">Our Current Committee</h2>
        <div className="row">
          {Committee.map((person) => (
            <div className="col-sm-12 col-lg-6">
              <div className="m-5 heading p-2 shadow rounded">
                <img
                  src={person.img}
                  alt={person.title}
                  className="w-100 img-thumbnail"
                />
                <h3>{person.name}</h3>
                <h4
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    color: "rgb(19, 46, 87)",
                  }}
                >
                  {person.title}
                </h4>
                <p>{person.time}</p>
                <p className="text-justify px-3">{person.Descriptio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentCommittee;
