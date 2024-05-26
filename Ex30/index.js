// declare function with string as parameter
function check_script_exist(str){
  // Check if x or y or z is in range
 if(str.substring(4,10) == 'Script'){
  let strArr = str.split('');
  strArr.splice(4,10);
  return strArr.join('');
 } else {
  return str;
 }
}

console.log(check_script_exist("aaaaScript"));
console.log(check_script_exist("Script1111"));