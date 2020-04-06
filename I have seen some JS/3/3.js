function calculate(sign) {
    let first, second;
    second = parseInt(document.getElementById('n1').value);
    first = parseInt(document.getElementById('n2').value);
    document.getElementById('out').innerHTML = second + first * sign;
}
