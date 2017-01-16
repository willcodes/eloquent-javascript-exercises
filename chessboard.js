"use strict";
let size = 8;
let width = 5;

function makeChessboard(size) {
    var board = '';
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if ((i + j) % 2 ===  0) {
                board += '#';
            }
            else {
                board += " ";
            }
        }
        board += '\n';
    }
    console.log(board);
}

makeChessboard(8);