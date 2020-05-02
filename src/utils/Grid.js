const Grid = (rows, cols) => {
  let arr = [];
  let x,
    y = 0;
  for (x = 0; x <= rows - 1; x++) {
    arr[x] = [];
    for (y = 0; y <= cols - 1; y++) {
      arr[x][y] = { x: x, y: y };
    }
  }
  return arr;
};

console.log(Grid(100, 100)[99][99]);
