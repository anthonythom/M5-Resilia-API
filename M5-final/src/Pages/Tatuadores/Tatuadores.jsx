import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./tatuadores.scss"



export default function Tatuadores() {
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
      <div className="divSuperior">
        <h1 className='titulo'>Tatuadores</h1>
      </div>np
      <div className="tatuador">
      </div>
      <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="../../../assets/img/tatu-peru.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Tattou Parlour Owner </h1>
          <h3>
            Tattou  <span ref={textRef}></span>
          </h3>
        </div>
      
      </div>
    </div>
      </div>
  )
}