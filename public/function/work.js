convCF = () => {

    let InputC = parseInt(document.getElementById("num1").value);
    

    let conversion = InputC * 1.8000 + 32.00

    document.getElementById('res').value = conversion

}

convFC = () => {

    let InputF = parseInt(document.getElementById('num2').value);

    let reverseConversion = (InputF - 32) / 1.8000

    document.getElementById('resf').value = reverseConversion
}