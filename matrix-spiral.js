// Input matrix
var matrix = [
  [11, 12, 13, 14, 15],
  [21, 22, 23, 24, 25],
  [31, 32, 33, 34, 35],
  [41, 42, 43, 44, 45]
];

// Recursive traversal function
var getOneTurn = function(matrix) {
  // Matrix size
  var yLength = matrix.length;
  if (yLength === 0) { return; }
  var xLength = matrix[0].length;
  if (xLength === 0) { return; }

  // Current position of observer
  var x, y;

  // Do one turn
  for (x = 0; x < xLength; x++) { console.log(matrix[0][x]); }
  for (y = 1; y < yLength; y++) { console.log(matrix[y][xLength]); }
  for (x = xLength-2; x >= 0; x--) { console.log(matrix[yLength][x]); }
  for (y = yLength-2; y >= 1; y--) { console.log(matrix[y][xLength]); }

  // Do we need to go deeper?
  if (xLength > 2 && yLength > 2) {
    // Prepare inner matrix
    var innerMatrix = [];
    for (y = 1; y < yLength-1; y++) {
      var row = [];
      for (x = 1; x < xLength-1; x++) {
        row.push(matrix[y][x]);
      }
      innerMatrix.push(row);
    }

    // Go deeper
    getOneTurn(innerMatrix);
  }
};

// Run
getOneTurn(matrix);
