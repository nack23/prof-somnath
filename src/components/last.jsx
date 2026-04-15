import React, { useEffect, useRef } from "react";

function HeaderBanner() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = 180;

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
    <div className="top-banner">

      <canvas ref={canvasRef}></canvas>

      <div className="banner-content">
        <h1>Indian Institute of Technology</h1>
        <p>Chemical Engineering Department</p>
      </div>

    </div>
  );
}

export default HeaderBanner;

