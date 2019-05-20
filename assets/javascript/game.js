$(document).ready(function(){

    // Computer generates random number (user goal)
    var computerNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);

    // Displays computer's random number
    $('#goal').text(computerNum);

    console.log('Intial comNum = ' + computerNum);

    // Generates initial random # for each crystal
    var crystal1 = Math.floor(Math.random() * (12 - 1 + 1) +1);
    var crystal2 = Math.floor(Math.random() * (12 - 1 + 1) +1);
    var crystal3 = Math.floor(Math.random() * (12 - 1 + 1) +1);
    var crystal4 = Math.floor(Math.random() * (12 - 1 + 1) +1);

    // Console logs each initial crystal value
    console.log('Intial crystal 1 = ' + crystal1);
    console.log('Intial crystal 2 = ' + crystal2);
    console.log('Intial crystal 3 = ' + crystal3);
    console.log('Intial crystal 4 = ' + crystal4);

    // Gameplay variables
    var userTotal = 0;
    var winCount = 0;
    var lossCount = 0;

    $('#winCount').text(winCount);
    $('#lossCount').text(lossCount);

    // --------------------------------------------------------------------

    // Reset Function
    function reset () {
        // Resets Computers random number for new round
        computerNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        console.log('New comNum = ' + computerNum);
        $('#goal').text(computerNum);
        // Resets Crystal Values for new round
        crystal1 = Math.floor(Math.random() * (12 - 1 + 1) +1);
        crystal2 = Math.floor(Math.random() * (12 - 1 + 1) +1);
        crystal3 = Math.floor(Math.random() * (12 - 1 + 1) +1);
        crystal4 = Math.floor(Math.random() * (12 - 1 + 1) +1);
        console.log('New crystal 1 = ' + crystal1);
        console.log('New crystal 2 = ' + crystal2);
        console.log('New crystal 3 = ' + crystal3);
        console.log('New crystal 4 = ' + crystal4);
        // Resets Player's total to 0
        userTotal = 0;
        $('#sum').text(userTotal);
    }

    // --------------------------------------------------------------------

    // Win Function
    function win () {
        alert ('Winner! Winner! Chicken Dinner!!!');
        winCount++;
        $('#winCount').text(winCount);
        reset ();
    }

    // Loss Function
    function loss () {
        alert ('Loser! No one can carry this many crystals!');
        lossCount++;
        $('#lossCount').text(lossCount);
        reset ();
    }

    // --------------------------------------------------------------------

    // Collection Functions for crystals (Repeated for each button)

    // Listens for button clicks
    $('#btn-1').on ('click', function () {
        // Adds value of crystalto user total
        userTotal = userTotal + crystal1;
        console.log ('User Total = ' + userTotal);
        // Replaces text on sum paragraph of html
        $('#sum').text(userTotal);
            // Conditions for win or loose
            if (userTotal == computerNum) {
                win ();
            }
            else if (userTotal > computerNum) {
                loss ();
            }
    });
    $('#btn-2').on ('click', function () {
        userTotal = userTotal + crystal2;
        console.log ('User Total = ' + userTotal);
        $('#sum').text(userTotal);
            if (userTotal == computerNum) {
                win ();
            }
            else if (userTotal > computerNum) {
                loss ();
            }
    });
    $('#btn-3').on ('click', function () {
        userTotal = userTotal + crystal3;
        console.log ('User Total = ' + userTotal);
        $('#sum').text(userTotal);
            if (userTotal == computerNum) {
                win ();
            }
            else if (userTotal > computerNum) {
                loss ();
            }
    });
    $('#btn-4').on ('click', function () {
        userTotal = userTotal + crystal4;
        console.log ('User Total = ' + userTotal);
        $('#sum').text(userTotal);
            if (userTotal == computerNum) {
                win ();
            }
            else if (userTotal > computerNum) {
                loss ();
            }
    });
}); 