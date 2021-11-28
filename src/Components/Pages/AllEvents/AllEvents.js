import React from "react";

const AllEvents = () => {
  const events = [
    {
      name: "cox's Bazar trip.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfg3vxOvfFJ_DSQMoRZtSKKzyobf1tyF4LwA&usqp=CAU",
      time: "March-2018",
      joined: 8,
      duration: "3 days and 2 nights.",
      explord: "Beach, Inani, Himchari, town.",
    },
    {
      name: "cox's Bazar trip.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfg3vxOvfFJ_DSQMoRZtSKKzyobf1tyF4LwA&usqp=CAU",
      time: "March-2018",
      joined: 8,
      duration: "3 days and 2 nights.",
      explord: "Beach, Inani, Himchari, town.",
    },
    {
      name: "cox's Bazar trip.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfg3vxOvfFJ_DSQMoRZtSKKzyobf1tyF4LwA&usqp=CAU",
      time: "March-2018",
      joined: 8,
      duration: "3 days and 2 nights.",
      explord: "Beach, Inani, Himchari, town.",
    },
    {
      name: "cox's Bazar trip.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfg3vxOvfFJ_DSQMoRZtSKKzyobf1tyF4LwA&usqp=CAU",
      time: "March-2018",
      joined: 8,
      duration: "3 days and 2 nights.",
      explord: "Beach, Inani, Himchari, town.",
    },
  ];
  return (
    <div className="container">
      <h2 className="heading mt-4">All Our Events</h2>
      <div className="row g-0">
        {events.map((event) => (
          <div className="col-xs-12 col-lg-6">
            <div className="m-3">
              <div className="m-5 heading p-2 shadow-lg rounded">
                <img
                  src={event.img}
                  alt={event.name}
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
                  {event.name}
                </h3>
                <p>
                  We went for the trip on {event.time} stayed there for{" "}
                  {event.duration}
                </p>
                <p>{event.joined} Friends joined us.</p>
                <p className="px-3">We Explored {event.explord}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
