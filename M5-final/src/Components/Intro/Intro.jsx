import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./intro.scss"

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Desiner", "Artist", "Creator"],
    });
  }, []);

return (  
    <div className='divPrincipal'>
      {/* <div className="divSuperior">
        <h1 className='titulo'>Tatuadores</h1>
      </div> */}
      <div className="tatuador">
      </div>
      <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="../../../assets/img/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Tattou Parlour Owner Bruno </h1>
          <h3>
            Tattou  <span ref={textRef}></span>
          </h3>
        </div>
      
      </div>
    </div>
      </div>
  )
}