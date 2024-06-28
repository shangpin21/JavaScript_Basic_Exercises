// declare function with a given matrix as the parameter

const isLowerTriangular = (matrix) => {
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      // if element is above the main diagonal and not equal to zero, return false
      if(j > i && matrix[i][j] !== 0 ){
        return false;
      }
    }
  }
  return true;
}

console.log(isLowerTriangular([[1,0,1],[2,0,0],[0,3,3]]));