//find out if a number is even or odd using recursion

//normal way

// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(isEven(17));

//satisfy these conditions in function
//-zero is even
//-one is odd
//-any other number, evenness is same as number - 2

//my answer
function isEven(num) {
    function check(num) {
        if (num === 0) {
            return true;
        }
        else if (num === 1) {
            return false;
        }
        else return isEven(num);
    }
    return num > 0 ? check(num - 2) : check(num + 2) ;
}

console.log(isEven(-1));

// correct answer   

function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}