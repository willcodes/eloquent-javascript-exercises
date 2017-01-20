//write a function that takes an array, and turns it into a list
//write a function that takes a list and turns it into an array.


function arrayToList(arr) {
    list = null;

    for (var i = 0; i < arr.length; i++){
        list = {value: arr[i], rest:list }
    }
    return list;
}
var myArr = [5,6,7,8,9]
console.log(arrayToList(myArr));
