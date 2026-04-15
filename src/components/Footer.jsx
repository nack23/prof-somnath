import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">

        {/* 🔥 floating blobs */}
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>

        <div className="footer-container">

          {/* LEFT */}
          <div className="footer-col">
            <h2>Prof. Somnath Ghosh</h2>
            <p>
              Department of Chemical Engineering <br />
              IIT Delhi
            </p>
            <p className="footer-desc">
              Research in Microfluidics, Fluid mechanics, Functional colloids synthesis and their interaction, interfacial engineering
            </p>
          </div>

          {/* CENTER */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#research">Research</a></li>
              <li><a href="#publications">Publications</a></li>
              <li><a href="#teaching">Teaching</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="footer-col">
            <h3>Contact</h3>
            <p>Email: somnath@iitd.ac.in</p>
            <p>Phone: +91-XXXXXXXXXX</p>

            <div className="socials">
              <span>🌐</span>
              <span>🔗</span>
              <span>📘</span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Prof. Somnath Ghosh | IIT Delhi
        </div>

      </footer>

      {/* ===== CSS ===== */}
      <style>{`

      .footer{
        position:relative;
        overflow:hidden;

        background: linear-gradient(
          135deg,
          #1e1b4b,
          #312e81,
          #4c1d95
        );

        background-size: 200% 200%;
        animation: gradientMove 10s ease infinite;

        color:white;
        padding:50px 20px 15px;
        margin-top:60px;
      }

      /* 🔥 animated gradient */
      @keyframes gradientMove{
        0%{ background-position:0% 50%; }
        50%{ background-position:100% 50%; }
        100%{ background-position:0% 50%; }
      }

      /* ===== BLOBS ===== */

      .blob{
        position:absolute;
        width:250px;
        height:250px;
        border-radius:50%;
        filter: blur(80px);
        opacity:0.4;
        animation: floatBlob 12s infinite ease-in-out;
      }

      .blob1{
        background:#7c3aed;
        top:-50px;
        left:-50px;
      }

      .blob2{
        background:#a78bfa;
        bottom:-60px;
        right:-60px;
        animation-delay:4s;
      }

      @keyframes floatBlob{
        0%,100%{
          transform:translate(0,0) scale(1);
        }
        50%{
          transform:translate(30px,-30px) scale(1.2);
        }
      }

      /* ===== CONTENT ===== */

      .footer-container{
        max-width:1200px;
        margin:auto;
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap:40px;
        position:relative;
        z-index:2;
      }

      .footer-col h2{
        font-size:22px;
        margin-bottom:10px;
      }

      .footer-col h3{
        font-size:18px;
        margin-bottom:10px;
      }

      .footer-col p{
        font-size:14px;
        color:#ddd;
        margin:5px 0;
      }

      .footer-desc{
        margin-top:10px;
        line-height:1.5;
      }

      .footer-col ul{
        list-style:none;
        padding:0;
      }

      .footer-col li{
        margin:6px 0;
      }

      .footer-col a{
        color:#ddd;
        text-decoration:none;
        transition:0.3s;
      }

      .footer-col a:hover{
        color:#c4b5fd;
        transform:translateX(5px);
      }

      /* ===== SOCIAL ===== */

      .socials{
        display:flex;
        gap:12px;
        font-size:20px;
        margin-top:10px;
      }

      .socials span{
        transition:0.3s;
        cursor:pointer;
      }

      .socials span:hover{
        transform:scale(1.2);
        color:#c4b5fd;
      }

      /* ===== BOTTOM ===== */

      .footer-bottom{
        text-align:center;
        margin-top:30px;
        border-top:1px solid rgba(255,255,255,0.2);
        padding-top:12px;
        font-size:13px;
        color:#bbb;
      }

      /* ===== MOBILE ===== */

      @media(max-width:768px){

        .footer-container{
          grid-template-columns:1fr;
          text-align:center;
        }

        .socials{
          justify-content:center;
        }

      }

      `}</style>
    </>
  );
}

export default Footer;