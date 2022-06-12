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
      strings: ["Designer", "Artist", "Creator"],
    });
  }, []);

return (  
    <div>
      <div className="tatuador">
      </div>
      <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img className="imgIntro" src="../../../assets/img/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2 className="h2Intro">Hi There, I'm</h2>
          <h1 className="h1Intro">Tattou Parlour Owner Bruno </h1>
          <h3 className="h3Intro">
            Tattoo <span className="spanIntro" ref={textRef}></span>
          </h3>
        </div>   
      </div>
    </div>
      </div>
  )
}