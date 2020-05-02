import React, { useRef, useEffect } from "react";

export const Circle = ({ text }) => {
  let ref = useRef();
  useEffect(() => {
    let canvas = ref.current;
    let ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 82;

    let requestID,
      i = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        (canvas.width / 1.7) * Math.abs(Math.cos(i)),
        0,
        2 * Math.PI
      );
      ctx.fillStyle = "#27182e";
      ctx.fill();
      ctx.font = "24px Courier New";
      ctx.fillStyle = "#50345B";
      ctx.textAlign = "center";
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      ctx.fillText("", canvas.width / 2, canvas.height / 2 + 50);

      i += 0.005;
      requestID = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(requestID);
    };
  });

  return <canvas ref={ref} />;
};
