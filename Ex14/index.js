function getFileExtension(filename){
    return filename.split('.').pop();
}

const filename = "example.txt";
console.log(getFileExtension(filename));