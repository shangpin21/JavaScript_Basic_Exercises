// declare function with a string as parameter
function pt_equal(str){
    // Replace all characters except 'p' with an empty string and store the result in str_p
    let str_p = str.replace(/[^p]/g, "").length;
    let str_t = str.replace(/[^t]/g, "").length;

    // return true if count of p is equal to count of t, else return false
    return str_p == str_t;
}   

console.log(pt_equal("tatepp"));