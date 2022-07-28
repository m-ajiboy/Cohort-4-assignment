let size = 8;                                       // sets the size of the characters to be received
let container = "";                                 // initializes the container
function chessBoard (){                                 
    for (i = 0; i < size; i++) {                    // creates a nested loop for creating the characters " " and "#"
        for (j = 0; j < size; j++) {
            if ((i + j) % 2 == 0) {                 // for even positions, " " should be added to the container
                container += " ";
            } else {                                // for odd positions, "#" should be added to the container
                container += "#";
            }
        }
        container += "\n";                          // creates a new line after eight characters.
    }
    console.log(container);
}

chessBoard();
