// define function with parameter x and y
function check_pos(x,y){
  if((x >= 0 &&  y < 0)|| (x < 0 && y >= 0)){
    return true;
  } else {
    return false;
  }
}

console.log(check_pos(1, 1));