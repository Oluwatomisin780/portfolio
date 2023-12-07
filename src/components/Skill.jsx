import React from 'react';
import background from '../assets/images/skills-bg.png';
function Skill() {
  return (
    <section
      className="section skills has-before"
      id="skills"
      aria-label="skills"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="skills-content">
          <p className="section-subtitle">Skills</p>

          <h2 className="h2 section-title">Programming Skills</h2>

          <p className="section-text">
            For more than 20 years our experts have been accomplishing enough
            with modern Web Development, new generation web and app programming
            language.
          </p>

          <ul className="skills-list">
            <li className="skills-item">
              <div className="wrapper">
                <h3 className="skill-title">HTML & CSS</h3>

                <data className="skill-value" value="60%">
                  60%
                </data>
              </div>

              <div className="progress-box">
                <div className="progress" style={{ width: '60%' }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="wrapper">
                <h3 className="skill-title">JavaScript</h3>

                <data className="skill-value" value="80%">
                  80%
                </data>
              </div>

              <div className="progress-box">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="wrapper">
                <h3 className="skill-title">Node Js</h3>

                <data className="skill-value" value="80%">
                  80%
                </data>
              </div>

              <div className="progress-box">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="wrapper">
                <h3 className="skill-title">Typescript</h3>

                <data className="skill-value" value="70%">
                  70%
                </data>
              </div>

              <div className="progress-box">
                <div className="progress" style={{ width: '70%' }}></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="wrapper">
                <h3 className="skill-title">React Js</h3>

                <data className="skill-value" value="60%">
                  60%
                </data>
              </div>

              <div className="progress-box">
                <div className="progress" style={{ width: '60%' }}></div>
              </div>
            </li>
          </ul>
        </div>

        <div className="skills-banner has-before"></div>
      </div>
    </section>
  );
}

export default Skill;
