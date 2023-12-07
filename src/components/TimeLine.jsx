import React from 'react';

function TimeLine() {
  return (
    <section className="section timeline" id="timeline" aria-label="timeline">
      <div className="container">
        <p className="section-subtitle">Timeline</p>

        <h2 className="h2 section-title">Working Period</h2>

        <ul className="timeline-list">
          <li className="timeline-item">
            <h3 className="item-period">April, 2022 - Today</h3>

            <p className="item-title">Backend Developer</p>

            <p className="item-address">Lagos, Nigeria</p>
          </li>
          <li className="timeline-item">
            <h3 className="item-period">April, 2021 - April, 2022</h3>

            <p className="item-title">Backend Developer</p>

            <p className="item-address">Lagos, Nigeria</p>
          </li>

          <li className="timeline-item">
            <h3 className="item-period">April, 2021 - April, 2022</h3>

            <p className="item-title">Backend Developer</p>

            <p className="item-address">Lagos, Nigeria</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default TimeLine;
