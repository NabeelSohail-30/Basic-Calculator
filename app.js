function doSum() {
    let Num1 = Number(document.querySelector("#num1").value);
    let Num2 = Number(document.querySelector("#num2").value);
    let result = Num1+Num2;

    console.log("\nnum1: ", Num1, "\nNum2: ", Num2, "\nResult: ", result);
    document.querySelector("#result").value = result;
}

function doMinus() {
    let Num1 = Number(document.querySelector("#num1").value);
    let Num2 = Number(document.querySelector("#num2").value);
    let result = Num2-Num1;

    console.log("\nnum1: ", Num1, "\nNum2: ", Num2, "\nResult: ", result);
    document.querySelector("#result").value = result;
}

function doMultiply() {
    let Num1 = Number(document.querySelector("#num1").value);
    let Num2 = Number(document.querySelector("#num2").value);
    let result = Num1*Num2;

    console.log("\nnum1: ", Num1, "\nNum2: ", Num2, "\nResult: ", result);
    document.querySelector("#result").value = result;
}

function doDivide() {
    let Num1 = Number(document.querySelector("#num1").value);
    let Num2 = Number(document.querySelector("#num2").value);
    let result = Num1/Num2;

    console.log("\nnum1: ", Num1, "\nNum2: ", Num2, "\nResult: ", result);
    document.querySelector("#result").value = result;
}