import React, { useEffect, useState } from "react";
import "./CodechefCompare.css";
import CompareComponent from "../../Components/CompareComponent/CompareComponent";

function CodechefCompare() {

  document.addEventListener("mousemove", async (event) => {
    const dummyMouse = document.querySelector(".dummy-mouse");
    const vwby2 = window.innerWidth / 2;
    const reqvw = vwby2 - 30;
    if (dummyMouse) {
      // <-- moved the if outside, no need for an event listener if the element is not available
      document.addEventListener("mousemove", (event) => {
        const mouseTop = event.clientY - 10;
        const mouseLeft =
          event.clientX <= vwby2
            ? event.clientX + reqvw
            : event.clientX - reqvw;
        dummyMouse.style.transform = `translate(${mouseLeft}px,${mouseTop}px)`; // <-- added px
      });
    }
  });

  return (
    <>
      <div className="dummy-mouse"></div>
      <div className="main-container">
        <div className="container-left">
          <CompareComponent ccUserRefNumber={1}/>
        </div>
        <div className="container-right">
          <CompareComponent ccUserRefNumber={2}/>
        </div>
      </div>
    </>
  );
}

export default CodechefCompare;
