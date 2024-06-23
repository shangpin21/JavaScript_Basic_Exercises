// declare function with an array and n(given number) as the parameters

const find_third_num = (n1,n2,n3) => {
  if(n1 !== n2 && n2 !== n3 && n1 !== n3){
    return false
  }
  else if(n1 !== n2 && n1 == n3){
    return n2;
  }
  else if(n1 == n2 && n1 !== n3){
    return n3;
  }else if(n2 == n3 && n2 !== n1){
    return n1;
  }
  else{
    return `ALl NUMBERS ARE THE SAME`;
  }
}
console.log(find_third_num(1,2,2));