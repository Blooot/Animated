import React, { useRef, useEffect } from "react";
import PublicLayout from "../themes/PublicLayout";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
`;

export const Home = () => {
  const Grid = (rows, cols) => {
    let arr = [];
    let x,
      y = 0;
    for (x = 0; x <= rows - 1; ++x) {
      arr[x] = [];
      for (y = 0; y <= cols - 1; ++y) {
        arr[x][y] = 0;
      }
    }
    return arr;
  };

  const draw = (g, x, y, neighbs, ctx) => {
    if (g[x][y] === 1) {
      if (neighbs < 2 || neighbs > 3) {
        ctx.fillStyle = `#27182e`;
        ctx.fillRect(y * SQUARE, x * SQUARE, SQUARE, SQUARE);
      }
    } else if (neighbs === 3) {
      ctx.fillStyle = "#27182e";
      ctx.fillRect(y * SQUARE, x * SQUARE, SQUARE, SQUARE);
    }
  };

  const countNeighbours = (g, x, y) => {
    let neighbs = 0;
    for (let ni = -1; ni < 2; ++ni) {
      for (let nj = -1; nj < 2; ++nj) {
        if (ni === x && nj === y) {
          //dont count itself
          continue;
        }
        if (
          //check array bounds
          ni + x <= 0 ||
          ni + x > g.length - 1 ||
          nj + y <= 0 ||
          nj + y > g[0].length - 1
        ) {
          continue;
        }
        if (g[ni + x][nj + y] === 1) {
          neighbs += 1;
        }
      }
    }
    return neighbs;
  };
  const SQUARE = 50;
  let ref = useRef();
  useEffect(() => {
    let PAUSED = false;
    let canvas = ref.current;
    let ctx = canvas.getContext("2d");
    const w_inner = window.innerWidth;
    const h_inner = window.innerHeight - 81; //size of header (for global layout offset)
    canvas.width = w_inner;
    canvas.height = h_inner;
    let g = Grid(Math.ceil(h_inner / SQUARE), Math.ceil(w_inner / SQUARE));
    console.log(g);
    console.log(g.length, g[0].length);

    canvas.addEventListener("click", (e) => {
      let coords = {
        x: Math.ceil(e.clientX / SQUARE) - 1,
        y: Math.ceil((e.clientY - 81) / SQUARE) - 1,
      };
      let gx = coords.x <= 0 ? 0 : coords.x;
      let gy = coords.y <= 0 ? 0 : coords.y;
      g[gy][gx] === 0 ? (g[gy][gx] = 1) : (g[gy][gx] = 0);
    });

    window.addEventListener("keypress", (e) => {
      if (e.key === "p") {
        if (PAUSED) {
          PAUSED = false;
          render();
        } else {
          PAUSED = true;
          cancelAnimationFrame(requestID);
        }
      }
    });

    let requestID;
    const render = () => {
      console.log("looping");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let x = 0; x <= g.length - 1; x++) {
        for (let y = 0; y <= g[0].length - 1; y++) {
          let neighbs = countNeighbours(g, x, y);

          if (neighbs) {
            console.log(`coords (${x},${y}) has ${neighbs} neighbs`);
          }
          draw(g, x, y, neighbs, ctx);
        }
      }

      setTimeout(() => {
        requestID = requestAnimationFrame(render);
      }, 100);
    };
    render();
    return () => {
      cancelAnimationFrame(requestID);
    };
  });

  return (
    <PublicLayout headerProps={{ text: "Demos ->", to: "/demos" }}>
      <canvas style={{ marginTop: "2px" }} ref={ref} />
    </PublicLayout>
  );
};
