function shams() {
    for (i = 1; i <= 200; i++) {    // creates a loop that generates a number from 1-200
        switch (true) {
            case (i % 6 == 0 && i % 8 == 0):    //looks for numbers (1-200) that are divisible by 6 and 8
                console.log('ShamsTIIDELAB');       
                break;
            case (i % 6 == 0):                  //looks for numbers (1-200) that are divisible by 6
                console.log('Shams');
                break;
            case (i % 8 == 0):              //looks for numbers (1-200) that are divisible by 8
                console.log('TIIDELAB');
                break;
            case (i <= 200):
                console.log(i);
                break;
            default:
                console.log('default not needed here');
        }
    }
}
shams();