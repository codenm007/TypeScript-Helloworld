function getSum(num1:number,num2:number):number{
    return num1 + num2;
}

//console.log(getSum('Hello',4));

let mySum = function (num1:any,num2:any):number{
    if(typeof num1 == "string"){
        num1 = parseInt(num1);
    }
    if(typeof num2 == "string"){
        num2 = parseInt(num1);
    }
    return num1 + num2;
}

//console.log(mySum('3',5));

function getName(fname:string,lname?:string):string{
    if(lname == undefined){
        return fname;
    }
 return fname + '' + lname

}

console.log(getName('Nilanjan '));

function myVoid() : void {
    return;
}