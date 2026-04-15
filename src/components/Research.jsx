import React from "react";

function Research() {
  return (
    <section id="research">
       <h1>Currently Under Maintenance</h1>
      <h2 className="section-title">Research Areas</h2>

      <div className="grid-3">

        <div className="card">
          <h3>Multiphase Flow Reactors</h3>
          <p>Gas particle flow simulations.</p>
        </div>

        <div className="card">
          <h3>Granular Mechanics</h3>
          <p>Solid particle dynamics.</p>
        </div>

        <div className="card">
          <h3>Carbon Capture</h3>
          <p>Solid sorbent systems.</p>
        </div>

      </div>

    </section>
  );
}

export default Research;