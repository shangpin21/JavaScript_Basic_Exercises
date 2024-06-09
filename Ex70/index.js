// declare function with an array as the parameter
const rotate_elements_left = array => {
    // Use array destructuring to rearrange elements
    const [first, second, third] = array;
    // Return a new array with elements rearranged
    return [second, third, first];
}

console.log(rotate_elements_left([3,4,5]));