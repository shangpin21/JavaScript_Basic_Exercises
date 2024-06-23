// declare function with two given 3D vectors as the parameters

const dotProduct3DVectors = (vector1, vector2) => {
  let product = 0;
  if(vector1.length !== 3 && vector2.length !== 3){
    throw new Error('Both  vectors muct be 3-dimentional');
  }

  // Calculate the product of the vectors
  for(let i = 0; i < 3; i++){
    product += vector1[i] * vector2[i];
  }

  return product;
};

console.log(dotProduct3DVectors([1,2,3], [4,5,6]));