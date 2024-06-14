// declare function with an array of integers as the parameters 

const array_element_maxCount = (arr) => {
    // Create a map to count occurences
    const countMap = new Map();

    arr.forEach(element => {
        countMap.set(element, (countMap.get(element) || 0) + 1);
    });

    // Find the element with the highest count
    let maxCount = 0;
    let maxElement = null;

    countMap.forEach((count, element) => {
        if(count > maxCount){
            maxCount = count;
            maxElement = element;
        }
    });
    console.log(`Element with the highest count: ${maxElement}, Count: ${maxCount}`);
};
   


array_element_maxCount([1, 4, 9, 16, 16]);
