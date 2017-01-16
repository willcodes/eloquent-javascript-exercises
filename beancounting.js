//my answer

function countB(myString, letter) {
    var result ="";
    for (var i = 0; i < myString.length; i++) {
        if (myString.charAt(i) === letter) {
            result++;
        }
    }
    return (result === '') ? console.log("The letter "+letter+ " was not found.") : console.log("This program counted "+ result+ " of the letter " + letter);
}

countB("Where are All the A's at.", "A");