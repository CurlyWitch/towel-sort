
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix === undefined ? [] : matrix.reduce((a, b, index) => index % 2 == 0 ? a.concat(b) : a.concat(b.reverse()), []);
}
