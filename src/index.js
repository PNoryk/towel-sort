
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) || !matrix.length) return [];
  return matrix.reduce((acc, value, index) => [...acc, ...(!(index % 2) ? value : value.reverse())], [])
}
