import React, { useState } from 'react';

import './App.css';

import Hero from './components/Hero';
import Skill from './components/Skill';
import TimeLine from './components/TimeLine';
import Service from './components/Service';
import ContactUs from './components/ContactUs';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <main>
        <article>
          <Hero />

          {/* <!-- 
        - #SKILLS
      --> */}
          <Skill />

          {/* <!-- 
        - #PORTFOLIO

      -->

        <!-- 
        - #TIMELINE
      --> */}

          <TimeLine />
          {/* <!-- 
        - #service
      --> */}
          <Service />
          {/* <!-- 
        - #CONTACT
      --> */}
          <ContactUs />
        </article>
      </main>

      {/* <!--  */}

      {/* --> */}
    </React.Fragment>
  );
}

export default App;
