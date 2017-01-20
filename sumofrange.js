//create a function that is given a range (2 number variables) and returns the sum of all the numbers. 
//should contain two separate functions, one that counts the range and returns an arrayand one that gets the sum. 

//BONUS: add "step", which tells program how much to increment, also should work for negatives.


function range(min,max, step) {
    var numRange = [];
    if (step >= 0) {
        for (var i = min; i <= max; i+=step) {
            numRange.push(i);
        }
    }

    else if (step == undefined) {
        for (var i = min; i <= max; i++) {
            numRange.push(i);
        }
    }

    else {
        step = Math.abs(step);
        for (var i = min; i >= max; i-=step) {
            numRange.push(i);
        }
    }
    console.log("range Arr: " + numRange);
    rangeSum(numRange);
}

function rangeSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("Sum of Range: "+ sum);

}


range(5,10);