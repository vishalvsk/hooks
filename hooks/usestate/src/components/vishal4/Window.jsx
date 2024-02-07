import React, { useEffect, useState } from "react";
import "./window.css";

export default function Window() {
  const [width, setWidth] = useState(window.screen.width);

  const currentScreenWidth = () => {
    setWidth(() => window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);
  });

  return (
    <div>
      <h2>
        {" "}
        The Size of the window is <span>{width}</span>
      </h2>
    </div>
  );
}
