//write a function that takes an array, and turns it into a list
//write a function that takes a list and turns it into an array.

function arrayToList(arr) {
    list = null;
    for (var i = 0; i< arr.length; i++) {
        list = {value:arr[i], rest: list}
    }
    return console.log(list);
}

function listToArray(list) {
    arr = 0;
    
}

listToArray({ value: 3, rest: { value: 2, rest: { value: 1, rest: null } } });
arrayToList([1,2,3]);