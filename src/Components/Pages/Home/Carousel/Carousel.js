import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_864,q_60,w_1920/v1/clients/surfcityusa/190426_Pasea_Tg_49_d8336e93-8f63-41d8-9825-e3caf4b5ce24.jpg"
              className="d-block img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.tripsavvy.com/thmb/FwmQ-JvBEBDDlVb-j_zdEo0iVsA=/2048x1152/smart/filters:no_upscale()/beach-5b59c9b7c9e77c004b3e0ff0.jpg"
              className="d-block img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_864,q_60,w_1920/v1/clients/surfcityusa/190426_Pasea_Tg_49_d8336e93-8f63-41d8-9825-e3caf4b5ce24.jpg"
              className="d-block img-fluid"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
