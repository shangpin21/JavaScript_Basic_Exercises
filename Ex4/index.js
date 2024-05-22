// Area of Triangle with 3 different sides
// Use Heron's Formula
// SquareRoot(s(s - x)(s-y)(s-z))
function area(x,y,z) {
    let s = (x + y + z) / 2;
    result = Math.sqrt(s * ((s - x) * (s - y) * (s-z)));
    return result;
}

console.log(area(5,6,7));