import React from "react";

const NextEvent = () => {
  return (
    <div className="mt-4">
      <div className="container text-start">
        <h2 className="text-center text-white heading">Our Next Event</h2>
        <div className="d-flex rounded text-black bg-next-event shadow-lg">
          <div className="col-4">
            <img
              src="https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2020/04/06/coxs_bazar.jpg?itok=5_keVGBL&timestamp=1586152013"
              alt="cox's bazar"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-4 ps-3">
            <h4 className=" pt-2">Cox's Bazar Trip</h4>
            <p>Duration: 3 days | 2 nights</p>
            <p>Time Fixed: 12/12/21 AD</p>
            <p>Charity: 1000BDT.</p>
            <p>will be exploring: Beach, Enani, Marine drive, city</p>
          </div>
          <div className="col-4">
            <h4 className=" pt-2">Persons Going ---</h4>
            <span>Abdullah</span> <br />
            <span>Nishat</span> <br />
            <span>Rakib</span> <br />
            <span>Tarin</span> <br />
            <span>Yeasin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextEvent;
