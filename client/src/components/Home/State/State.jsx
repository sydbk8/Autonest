import React from "react";
import "./State.css";

const State = () => {
  return (
    <section className="section stats">
      <div className="container">
        <ul className="grid-list-state">
          <li>
            <div className="stats-card">
              <h3 className="headline-small">#1</h3>
              <p className="stats-text">Car Platform</p>
            </div>
          </li>
          <li>
            <div className="stats-card">
              <h3 className="headline-small">100%</h3>
              <p className="stats-text">Satisfaction Rate</p>
            </div>
          </li>
          <li>
            <div className="stats-card">
              <h3 className="headline-small">150+</h3>
              <p className="stats-text">Cars Available</p>
            </div>
          </li>
          <li>
            <div className="stats-card">
              <h3 className="headline-small">30.5k</h3>
              <p className="stats-text">Active Users</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default State;
