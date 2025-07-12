
function calculate() {
    var num1 = document.getElementById("num").value;
    var num2 = document.getElementById("num2").value;
    var result = document.getElementById("result");
    var result2 = document.getElementById("result2");

    var sum = parseFloat(num1) + parseFloat(num2);
    result.innerHTML = "Sum: " + sum;
    var subtraction = parseFloat(num1) - parseFloat(num2);
    result2.innerHTML = "Subtraction: " + subtraction;
}