//create a function that is given a range (2 number variables) and returns the sum of all the numbers. 
//should contain two separate functions, one that counts the range and returns an arrayand one that gets the sum. 

//BONUS: add "step", which tells program how much to increment, also should work for negatives.


function range(n1,n2, step) {
    var numRange = [];
    var isNegative = false;
    
    if (step >= 0) {
        for (var i = n1; i <= n2; i+=step) {
            numRange.push(i);
        }
    }

    else if (step == undefined) {
        for (var i = n1; i <= n2; i++) {
            numRange.push(i);
        }
    }

    else {
        step = Math.abs(step);
        for (var i = n1; i >= n2; i-=step) {
            numRange.push(i);
        }
    }
    rangeSum(numRange);
}

function rangeSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

}


range(10,5,-2);