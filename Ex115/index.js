// declare function with a matrix as the parameter

const is_diagonal_matrix = (user_matrix) => {
   // Loop through each row of the matrix
   for(let i = 0; i < user_matrix.length; i++){
    // Loop through each element of the matrix
    for(let j = 0; j < user_matrix.length; i++){
      // Check if the element is non-zero when it is not on the diagonal (i !== j)
      if(i !== j && user_matrix[i][j] !== 0){
        return false; // return false if non-zero value is found
      }
    }
   }
   return true; // Return true if all non-diagonal elements are zero
}
console.log(is_diagonal_matrix([1,0,0],[0,2,0],[0,0,3]));