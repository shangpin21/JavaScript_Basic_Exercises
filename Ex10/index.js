function multiplyBy(){
    const n1 = document.getElementById("number1").value;
    const n2 = document.getElementById("number2").value;

    document.getElementById('result').innerHTML = n1 * n2;
}

function divideBy(){
    const n1 = document.getElementById("number1").value;
    const n2 = document.getElementById("number2").value;

    document.getElementById('result').innerHTML = n1/n2;
}