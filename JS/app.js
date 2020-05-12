'use strict'

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





function yesfxn(ans, pick) {
    //console.log("user ans : "+ans+" real ans is: "+ pick)
    switch (ans.toLowerCase()) {
        case 'y':
        case 'yes':
            if (pick == 'yes') {
                alert("your answer is correct");
                //console.log("your answer is correct");
                break;
            }
            else alert("your answer is wrong"); // I faced a problem when the user answers yes but the correct answer 
            break;                             //is no, the switch will enter the yes case and won't break from it     
        case 'n':
        case 'no':
            if (pick == 'no') { 
                alert("your answer is correct");
               // console.log("your answer is correct");
                break;
            }
        default:
            alert("your answer is wrong");
            //console.log("your answer is wrong");
            break;
    }

}