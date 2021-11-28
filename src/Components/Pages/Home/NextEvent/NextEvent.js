import React from "react";

const NextEvent = () => {
  return (
    <div className="mt-4">
      <div className="container text-start">
        <h2 className="text-center text-white heading">Our Next Event</h2>
        <div className="d-flex justify-content-center">
          <div className="row g-0 rounded w-75 bg-next-event shadow ">
            <div className="col-xs-12 col-lg-6">
              <img
                src="https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2020/04/06/coxs_bazar.jpg?itok=5_keVGBL&timestamp=1586152013"
                alt="cox's bazar"
                className="w-100 rounded-start"
              />
            </div>
            <div className="col-xs-12 col-lg-6 ps-3 text-white">
              <h3 className=" pt-2">Cox's Bazar Trip</h3>
              <p>Duration: 3 days | 2 nights</p>
              <p>Time Fixed: 12/12/21 AD</p>
              <p>Charity: 1000BDT.</p>
              <p>will be exploring: Beach, Enani, Marine drive, city</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextEvent;
