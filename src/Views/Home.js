import React, { useRef, useEffect } from "react";
import PublicLayout from "../themes/PublicLayout";
import styled from "styled-components";
import { pufferTrain, Grid } from "../utils/gridTools";

const Wrapper = styled.div``;
const Message = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  text-align: center;
  width: 100%;
  top: 30%;
`;

export const Home = () => {
  const DELAY = 70;
  const SQUARE = 10;
  const w_inner = window.innerWidth;
  const h_inner = window.innerHeight - 81;

  const cycleState = (g) => {
    let gPrime;
    gPrime = Grid(Math.ceil(h_inner / SQUARE), Math.ceil(w_inner / SQUARE));
    for (let x = 0; x <= g.length - 1; x++) {
      for (let y = 0; y <= g[0].length - 1; y++) {
        let neighbs = countNeighbours(g, x, y);
        if (g[x][y] === 1) {
          if (neighbs < 2 || neighbs > 3) {
            gPrime[x][y] = 0;
          } else if (neighbs === 3 || neighbs === 2) {
            gPrime[x][y] = 1;
          }
        } else {
          if (neighbs === 3) {
            gPrime[x][y] = 1;
          }
        }
      }
    }
    return gPrime;
  };

  const draw = (g, ctx) => {
    for (let x = 0; x <= g.length - 1; x++) {
      for (let y = 0; y <= g[0].length - 1; y++) {
        if (g[x][y] === 1) {
          ctx.fillStyle = `#27182e`;
          ctx.fillRect(y * SQUARE, x * SQUARE, SQUARE, SQUARE);
        } else {
          ctx.fillStyle = `#50345B`;
          ctx.fillRect(y * SQUARE, x * SQUARE, SQUARE, SQUARE);
        }
      }
    }
  };

  const countNeighbours = (g, x, y) => {
    let neighbs = 0;
    for (let ni = -1; ni < 2; ++ni) {
      for (let nj = -1; nj < 2; ++nj) {
        let dx = x + ni;
        let dy = y + nj;
        if (dx === x && dy === y) {
          //dont count itself
          continue;
        }
        if (
          //check array bounds
          dx <= 0 ||
          dx > g.length - 1 ||
          dy <= 0 ||
          dy > g[0].length - 1
        ) {
          continue;
        }

        if (g[dx][dy] === 1) {
          neighbs += 1;
        }
      }
    }
    return neighbs;
  };

  let ref = useRef();
  useEffect(() => {
    let canvas = ref.current;
    let ctx = canvas.getContext("2d");
    const w_inner = window.innerWidth;
    const h_inner = window.innerHeight - 81; //size of header (for global layout offset)
    canvas.width = w_inner;
    canvas.height = h_inner;
    let g = pufferTrain(
      Math.ceil(h_inner / SQUARE),
      Math.ceil(w_inner / SQUARE)
    );

    canvas.addEventListener("click", (e) => {
      let coords = {
        x: Math.ceil(e.clientX / SQUARE) - 1,
        y: Math.ceil((e.clientY - 81) / SQUARE) - 1,
      };
      let gx = coords.x <= 0 ? 0 : coords.x;
      let gy = coords.y <= 0 ? 0 : coords.y;
      g[gy][gx] === 0 ? (g[gy][gx] = 1) : (g[gy][gx] = 0);
    });

    let drawing = false;
    canvas.addEventListener("mousedown", (e) => {
      drawing = true;
    });

    canvas.addEventListener("mousemove", (e) => {
      if (drawing) {
        let coords = {
          x: Math.ceil(e.clientX / SQUARE) - 1,
          y: Math.ceil((e.clientY - 81) / SQUARE) - 1,
        };
        let gx = coords.x <= 0 ? 0 : coords.x;
        let gy = coords.y <= 0 ? 0 : coords.y;
        if (g[gy][gx] === 0) {
          g[gy][gx] = 1;
        }
      }
    });

    canvas.addEventListener("mouseup", (e) => {
      drawing = false;
    });

    let requestID;
    const render = () => {
      draw(g, ctx, canvas);
      g = cycleState(g);

      setTimeout(() => {
        requestID = requestAnimationFrame(render);
      }, DELAY);
    };
    render();
    return () => {
      cancelAnimationFrame(requestID);
    };
  }, []);

  return (
    <PublicLayout headerProps={{ text: "Blog ->", to: "/blog" }}>
      <Wrapper>
        <canvas style={{ marginTop: "2px", position: "absolute" }} ref={ref} />
        <Message>
          <h1>Hello!</h1>
          You can click and drag to play around here, or feel free to check out
          some of my blog posts.
        </Message>
      </Wrapper>
    </PublicLayout>
  );
};
