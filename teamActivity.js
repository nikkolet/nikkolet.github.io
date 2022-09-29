/*requirement 1 */
function Buttomfunction() {
    const userinput = document.getElementById('m_buttom').value;
    const result = document.getElementById('m_Output');
    result.innerHTML = "You entered: " + userinput;
}

/*requirement 2 */
function sumbuttom() {
    const userinput = document.getElementById('m_buttominput').value;
    const result = document.getElementById('m_Outcomenumtwo');
    const inputt = parseInt(userinput);
    if (inputt !== NaN) {
        result.innerHTML = "Total: " + sum(inputt);
    }
}

function sum(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        total += i;
    }
    return total;
}
/*requirement 3*/
function add() {
    const numberone = document.getElementById('m_buttominputthree').value;
    const numbertwo = document.getElementById('m_numbertwoo').value;
    const Result = document.getElementById('m_Buttonthreee');
    const floatnumber = parseFloat(numberone);
    const floatnumber2 = parseFloat(numbertwo);
    if ((floatnumber !== NaN) & (floatnumber2 !== NaN)) {
        const total = floatnumber + floatnumber2;
        Result.innerHTML = "Total: " + total;
    }
}

/*Challenge */
function getNum(numId) {
    const number = document.getElementById(numId).value;
    const numberFloat = parseFloat(number);
    if (numberFloat !== NaN) {
        return numberFloat;
    } else return 0;
}

function updateTotal(value) {
    const result = document.getElementById('m_result');
    result.innerHTML = "Total: " + value;
}
//function declaration
function add2(num1, num2) {
    return num1 + num2;
}
//function expression
const sub2 = function(num1, num2) {
        return num1 - num2;
    }
    //arrow function
const mult2 = (num1, num2) => num1 * num2;

//example of using a callback to pull it all together
function performOperation(operation) {
    //the arguement 'operation' is a fucntion...so when we are ready we can call that function in our code below
    const total = operation(
        getNum('m_firstnumber'), getNum('m_secondnumber')
    );
    updateTotal(total);
}