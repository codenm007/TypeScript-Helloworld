function getSum(num1, num2) {
    return num1 + num2;
}
//console.log(getSum('Hello',4));
var mySum = function (num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num1);
    }
    return num1 + num2;
};
//console.log(mySum('3',5));
function getName(fname, lname) {
    if (lname == undefined) {
        return fname;
    }
    return fname + '' + lname;
}
console.log(getName('Nilanjan '));
function myVoid() {
    return;
}
