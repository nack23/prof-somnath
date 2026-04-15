import React, { useEffect, useRef } from "react";

function HeaderBanner() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = 150;

    let particles = [];

    for(let i=0;i<60;i++){
      particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        vx:(Math.random()-0.5)*0.5,
        vy:(Math.random()-0.5)*0.5
      });
    }

    function animate(){
      ctx.clearRect(0,0,canvas.width,canvas.height);

      particles.forEach(p=>{
        p.x+=p.vx;
        p.y+=p.vy;

        if(p.x<0||p.x>canvas.width)p.vx*=-1;
        if(p.y<0||p.y>canvas.height)p.vy*=-1;

        ctx.beginPath();
        ctx.arc(p.x,p.y,2,0,Math.PI*2);
        ctx.fillStyle="white";
        ctx.fill();
      });

      for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
          let dx=particles[i].x-particles[j].x;
          let dy=particles[i].y-particles[j].y;
          let dist=Math.sqrt(dx*dx+dy*dy);

          if(dist<120){
            ctx.beginPath();
            ctx.moveTo(particles[i].x,particles[i].y);
            ctx.lineTo(particles[j].x,particles[j].y);
            ctx.strokeStyle="rgba(255,255,255,0.2)";
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

  },[]);

  return (
    <div className="header-wrapper">

      <canvas ref={canvasRef}></canvas>

      <div className="top-header">

        {/* LEFT LOGO (VERTICAL) */}
        <div className="left-logo">

          {  /* <img src="/logo.png" alt="logo" /> */}
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />

          <h2>IIT Delhi</h2>

          <p className="iit-line">
            Indian Institute of Technology Delhi
          </p>

        </div>

        {/* CENTER TEXT */}
        <div className="center-text">
          <h1>Prof. Somnath Ghosh</h1>
          <h3>Department of Chemical Engineering</h3>
        </div>

        <div className="right-space"></div>

      </div>

    </div>
  );
}

export default HeaderBanner;
