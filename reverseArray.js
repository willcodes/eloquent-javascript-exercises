$testArr = ["china", 5, true, "halpme"];

function reverseArray(arr) {
    res = [];
    for (var i = 0; i< arr.length; i++) {  
        res.unshift(arr[i]);
    }
    return res;
}


// console.log(reverseArray($testArr));

console.log(inverseArray($testArr));
