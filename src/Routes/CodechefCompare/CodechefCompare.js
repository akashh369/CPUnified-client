import React, { useContext, useEffect, useState } from "react";
import "./CodechefCompare.css";
import CompareComponent from "../../Components/CompareComponent/CompareComponent";
import { MouseContext } from "../../App";

function CodechefCompare() {

  const [doubleMouse, setDoubleMouse] = useContext(MouseContext);

  const handleMouseMove = (event) => {
    const dummyMouse = document.querySelector(".dummy-mouse");
    const vwby2 = window.innerWidth / 2;
    const reqvw = vwby2 - 30;
    if (dummyMouse) {
      const mouseTop = event.clientY - 10;
      const mouseLeft =
        event.clientX <= vwby2
          ? event.clientX + reqvw
          : event.clientX - reqvw;
      dummyMouse.style.transform = `translate(${mouseLeft}px, ${mouseTop}px)`;
    }
  };

  document.addEventListener("mousemove", handleMouseMove);
  useEffect(() => {
    const dummyMouse = document.querySelector(".dummy-mouse");
    if (doubleMouse) {
      dummyMouse.style.display = 'grid';
    } else {
      if (dummyMouse) {
        dummyMouse.style.display = 'none'; // Hide the dummy mouse when doubleMouse is false
      }
    }
  }, [doubleMouse])
  return (
    <>
      <div className="dummy-mouse"></div>
      <div className="blur-container">

        <div className="main-container">
          <div className="container-left">
            <CompareComponent ccUserRefNumber={1} />
          </div>
          <div className="container-right">
            <CompareComponent ccUserRefNumber={2} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CodechefCompare;
