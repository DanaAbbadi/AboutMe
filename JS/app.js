'use strict'

var score = 0;
var realAns = 'yes';
var username = prompt("Hello there, what's your name?");
alert('Welcome ' + username + " to my site, we will play a guessing game so you can get to know me better");

var ans1 = prompt("Do you think I am a coffee addict?");
//console.log('num1 (YES) : ' + ans1);
realAns = 'yes'; //if the answer is yes then realAns equals 1
yesfxn(ans1, realAns); // yesfxn takes two parameter, user answer and the correct answer

var ans2 = prompt("Do you think I can park a car in parallel? ");
//console.log('2nd (NO): ' + ans2);
realAns = 'no';
yesfxn(ans2, realAns);

var ans3 = prompt("Can I play the violin? ");
//console.log('3rd (YES): ' + ans3);
realAns = 'yes';
yesfxn(ans3, realAns);

var ans4 = prompt("Am I a good singer?");
//console.log('num 4 (NO) : ' + ans4);
realAns = 'no';
yesfxn(ans4, realAns);

var ans5 = prompt("Am I considered a Bookworm?");
//console.log('num 5 (YES) : ' + ans5);
realAns = 'yes';
yesfxn(ans5, realAns);

alert('Thank you ' + username + " for playing the game, hope you enjoyed it!");

var dateday = alert("let's play a diiferent game!");
for (var i = 0; i < 4; i++) {
    dateday = prompt("Ok now we will do something different, I was born on May, can you guess the date?");
    console.log(dateday);
    if (dateday === '13') {
        alert('You are right!');
        score++;
        break;
    }
    if (dateday > 13) {
        alert('too high');
    }
    if (dateday < 13) {
        alert('too low');
    }
    if (i == 3) {
        alert('The correct answer is 13');

    }
}

var series = ['the plateform', 'friends', 'suits', 'black mirror', 'gilmore girls', 'good will hunting', 'horrible bosses', 'girls trip', 'atonement', 'prison break']
var guess = prompt("can you guess one of my favourite movies/series?").toLowerCase();
var trail = 1;
var correct= false;
while (trail < 6) {

    for (var ii = 0; ii < 10; ii++) {
        console.log(ii+ " "+ guess +" " + series[ii]);
        if(guess === series[ii]){
            alert('You are right!');
            correct=true;
            score++;
            break;
        }
    }
    if(correct==true){
        break;
    }
    guess = prompt("try again?").toLowerCase();
    trail++;
}
alert('here are all my favourite movies/series');
var all=" ";
for(var iii=0; iii<series.length;iii++){
    all= all + series[iii]+", ";
   
}
alert(all);

alert('Your score is '+ score);









function yesfxn(ans, pick) {
    //console.log("user ans : "+ans+" real ans is: "+ pick)
    switch (ans.toLowerCase()) {
        case 'y':
        case 'yes':
            if (pick == 'yes') {
                alert("your answer is correct");
                //console.log("your answer is correct");
                score++;
                break;
            }
            else alert("your answer is wrong"); // I faced a problem when the user answers yes but the correct answer 
            break;                             //is no, the switch will enter the yes case and won't break from it     
        case 'n':
        case 'no':
            if (pick == 'no') {
                alert("your answer is correct");
                score++;
                // console.log("your answer is correct");
                break;
            }
        default:
            alert("your answer is wrong");
            //console.log("your answer is wrong");
            break;
    }

}