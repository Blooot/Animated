export const pufferTrain = (rows, cols) => {
  let g = Grid(rows, cols);
  let endX = g.length;
  let endY = g[0].length;
  let baseX = endX - 5;
  let baseY = endY - 5;
  g[baseX - 4][baseY] = 1;
  g[baseX - 10][baseY] = 1;

  g[baseX - 3][baseY - 1] = 1;
  g[baseX - 5][baseY - 1] = 1;
  g[baseX - 9][baseY - 1] = 1;
  g[baseX - 11][baseY - 1] = 1;

  g[baseX - 8][baseY - 2] = 1;
  g[baseX - 6][baseY - 2] = 1;

  g[baseX - 8][baseY - 3] = 1;
  g[baseX - 6][baseY - 3] = 1;
  g[baseX - 13][baseY - 3] = 1;
  g[baseX - 14][baseY - 3] = 1;
  g[baseX - 1][baseY - 3] = 1;
  g[baseX][baseY - 3] = 1;

  g[baseX - 8][baseY - 4] = 1;
  g[baseX - 6][baseY - 4] = 1;
  g[baseX][baseY - 4] = 1;
  g[baseX - 14][baseY - 4] = 1;

  g[baseX - 9][baseY - 5] = 1;
  g[baseX - 5][baseY - 5] = 1;
  g[baseX - 2][baseY - 5] = 1;
  g[baseX - 12][baseY - 5] = 1;

  g[baseX - 10][baseY - 6] = 1;
  g[baseX - 4][baseY - 6] = 1;

  g[baseX - 9][baseY - 8] = 1;
  g[baseX - 10][baseY - 8] = 1;
  g[baseX - 11][baseY - 8] = 1;
  g[baseX - 5][baseY - 8] = 1;
  g[baseX - 4][baseY - 8] = 1;
  g[baseX - 3][baseY - 8] = 1;

  g[baseX - 9][baseY - 9] = 1;
  g[baseX - 12][baseY - 9] = 1;
  g[baseX - 13][baseY - 9] = 1;
  g[baseX - 5][baseY - 9] = 1;
  g[baseX - 2][baseY - 9] = 1;
  g[baseX - 1][baseY - 9] = 1;

  g[baseX - 10][baseY - 10] = 1;
  g[baseX - 11][baseY - 10] = 1;
  g[baseX - 12][baseY - 10] = 1;
  g[baseX - 4][baseY - 10] = 1;
  g[baseX - 3][baseY - 10] = 1;
  g[baseX - 2][baseY - 10] = 1;

  g[baseX - 11][baseY - 11] = 1;
  g[baseX - 3][baseY - 11] = 1;

  return g;
};

export const Grid = (rows, cols) => {
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
