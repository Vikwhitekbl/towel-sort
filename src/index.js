
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let mas = [];
  if (matrix === undefined) {
    return mas;
  } else {
      for (let i = 0 ; i < matrix.length; i += 1) {
        for (let j = 0; j  < matrix[i].length; j += 1) {
          let index = i % 2 === 0
          ? j
          : (matrix[i].length - 1 - j);
          mas.push(matrix[i][index]);
        }
      }
      
    return mas;
  }
  
}
