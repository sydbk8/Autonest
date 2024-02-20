import React from "react";
import { FaGasPump, FaRoad } from "react-icons/fa";
import { TbManualGearbox, TbAutomaticGearbox } from "react-icons/tb";
import { MdElectricBolt } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Property.css";

const Property = ({ data, loading, error }) => {

  return (
    <section className="section property" aria-labelledby="property-label">
      <div className="container">
        {loading ? (
          <h3>Loading...</h3>
        ) : error ? (
          <h3>Error: {error.message}</h3>
        ) : (
          <div className="property-list">
            {data.map((car) => (
              <Link to={`/explore/${car.id}`} key={car.id} className="card">
                <div className="card-banner">
                  <figure
                    className="img-holder"
                    style={{ "--width": 585, "--height": 390 }}
                  >
                    <img
                      src={`http://localhost:5000/uploads/${car.image}`}
                      alt={car.model}
                      width="585"
                      height="390"
                      className="img-cover"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <span className="title-large">${car.price}</span>
                  <h3 className="title-small card-title">{`${car.make} ${car.model}`}</h3>
                  <address className="body-medium card-text">
                    {car.address}
                  </address>
                  <div className="card-meta-list">
                    <div className="meta-item">
                      {car.fuelType === "Gasoline" && (
                        <FaGasPump className="meta-item-icon" />
                      )}
                      {car.fuelType === "Electric" && (
                        <MdElectricBolt className="meta-item-icon" />
                      )}
                      <span className="meta-text label-medium">
                        {car.fuelType === "Gasoline" ? "Gas" : "EV"}
                      </span>
                    </div>
                    <div className="meta-item">
                      <FaRoad className="meta-item-icon" />
                      <span className="meta-text label-medium">
                        {car.miles > 999
                          ? (car.miles / 1000).toFixed(1) + "k"
                          : car.miles}
                      </span>
                    </div>
                    <div className="meta-item">
                      {car.transmission === "Automatic" && (
                        <TbAutomaticGearbox className="meta-item-icon" />
                      )}
                      {car.transmission === "Manual" && (
                        <TbManualGearbox className="meta-item-icon" />
                      )}
                      <span className="meta-text label-medium">
                        {car.transmission === "Automatic" ? "Aut" : "Man"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Property;
