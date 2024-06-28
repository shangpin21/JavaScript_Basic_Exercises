// declare function with a given matrix as the parameter

const is_identity_matrix= (matrix) => {
   // Check if it is a square matrix
  for(let i = 0; i < matrix.length; i++){
    const rows = matrix.length;
    const cols = matrix[i].length;
    if(rows !== cols){
      console.log("Matrix is not a square matrix");
      return false;
    }
  }

  // Verifies if the matrix is an identity matrix
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix.length; j++){
      if(matrix[i][j] !== 1 && i === j || matrix[i][j] && i !== j){

        return false;
      }
    }
  }
  return true;
}
console.log(is_identity_matrix([[1,0,0], [0,1,0],[0,1,1]]));

