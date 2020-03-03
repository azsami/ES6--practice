// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }
const doubleIt = (num) => num * 2;
const add = (x, y=33) => x + y;
const give5 = () => 5;
const algebra = (x,y) =>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

// const result = add(22, 88);
const result2 = give5();
const result3 = algebra(5,3);
console.log(result3);
