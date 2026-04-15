import React from "react";

function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">

          <p className="hero-tag">
            IIT Delhi • Faculty Profile
          </p>

          <h1>
            Prof. Somnath Ghosh <br />
            <span>Expert in Complex Fluids & Microfluidics</span>
          </h1>

          <p className="hero-desc">
            Assistant Professor, Department of Chemical Engineering. 
            Specialized in CFD, Microfluidics, Fluid mechanics, Functional colloids synthesis and their interaction, interfacial engineering.
          </p>

          <div className="courses">
            <p><strong>Courses:</strong></p>
            <ul>
              <li>fluid mechanics</li>
              
              <li></li>
            </ul>
          </div>

          <div className="hero-btns">
            <button className="btn-primary">View Research</button>
            <button className="btn-outline">Contact</button>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">

          {/* concentric */}
          <div className="circle-bg"></div>

          {/* main image */}
          <img
            src="/prof.png"
            alt="professor"
            className="hero-img"
          />

          {/* 🔥 animation */}
          <div className="left-animation">

            <div className="ring"></div>

            {/* 🔥 separate rotating image */}
            <img
              src="/bk.jpeg"
              alt="center"
              className="ring-img"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;