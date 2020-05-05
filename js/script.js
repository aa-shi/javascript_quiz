
function finishQuiz(){
    var answerList = ["b", "a", "c", "d", "b", "b", "a", "c", "b", "a"];
    var wrongAnswer = [];
    var score = 0;
    var hasError = false;

    for(var i=0; i<answerList.length; i++){

        if(validate("q"+i) == false){
            showError("error_q"+i);
            hasError = true;
        } else {
            // var ans = getSelectedValue("q"+i);
            if(getSelectedValue("q"+i) == answerList[i]){
                score += 1;
            } else {
                wrongAnswer.push("Question: " + (i+1));
            }
        }
    }

    if(hasError == false){
        displayResult(answerList, score, wrongAnswer);
    }
   
}

function validate(qName){

    var ans = document.getElementsByName(qName);

    var counter = 0;

    for(var i=0; i<ans.length; i++){
        if(ans[i].checked == false){
            counter++;
        }
    }

    console.log("Counter: " + counter)
    if(counter == ans.length){
        return false;
    } else {
        return true;
    }
}

function showError(error_id){

    document.getElementById(error_id).innerHTML = "Please select an answer!";

}

function getSelectedValue(qName){

    var userAns = document.getElementsByName(qName);

    for(var i=0; i<userAns.length; i++){
        if(userAns[i].checked){
            return userAns[i].value; // Returns the checked value
        }
    }   
}

function displayResult(answerList, score, wrongAnswer){
    var output = "";
    var result = document.getElementById("result");
    // document.getElementsByTagName("table")[0].style.display = "none";
    document.getElementById("quiz").style.display = "none";

    var btn = document.getElementsByTagName("button")[0];
    btn.innerHTML = "Retake Quiz";
    btn.onclick = function(){
        location.reload();
    }

    result.style.display = "block";
    output = "<center> Your score is " + "<b>" + score + "/" + answerList.length + "</b>" + "<br><b>" +
                Math.floor((score/answerList.length)*100) + "% </b>correct! </center>";

    if(wrongAnswer.length > 0){
        output += "<center> <b>List of wrong Answers:</b> <br>";
            for(var i=0; i<wrongAnswer.length; i++){
                output += "<li>" + wrongAnswer[i] + "</li>";
            } "</center>"
    }

    result.innerHTML = output;

    console.log("Your score is " + score + "/" + answerList.length);
    console.log( (Math.floor((score/answerList.length)*100)) + "% correct");

}

function clearErr(id){
    document.getElementById(id).innerHTML = "";
}













/*var answers, wrongAnswers, score, hasError = undefined;

function showScore(){

    answers = ["b", "a", "c", "d", "b", "b", "a", "c", "b", "a"];
    wrongAnswers = [];
    score = 0;
    hasError = false;

    var q0 = document.getElementsByName("q0");
    var q1 = document.getElementsByName("q1");
    var q2 = document.getElementsByName("q2");
    var q3 = document.getElementsByName("q3");
    var q4 = document.getElementsByName("q4");
    var q5 = document.getElementsByName("q5");
    var q6 = document.getElementsByName("q6");
    var q7 = document.getElementsByName("q7");
    var q8 = document.getElementsByName("q8");
    var q9 = document.getElementsByName("q9");

    if(validate(q0) == false){
        document.getElementById("error_q0").innerHTML = "Please select an answer!";
        hasError = true;
    } else {
        var q0Ans = getSelectedValue(q0);
        if(q0Ans == answers[0]){
            score += 1;
        }else {
            wrongAnswers.push("Question 1");
        }
    } // End of outer if

    if(validate(q1) == false){
        document.getElementById("error_q1").innerHTML = "Please select an answer!";
        hasError = true;
    } else {
        var q1Ans = getSelectedValue(q1);
        if(q1Ans == answers[1]){
            score += 1;
        } else {
            wrongAnswers.push("Question 2");
        }
    } // End of outer if

    if(validate(q2) == false){
        document.getElementById("error_q2").innerHTML = "Please select an answer!";
        hasError = true;
    } else {
        var q2Ans = getSelectedValue(q2);
        if(q2Ans == answers[2]){
            score += 1;    
        } else {
            wrongAnswers.push("Question 3");
        }
    } // End of outer if

    if(validate(q3) == false){
        document.getElementById("error_q3").innerHTML = "Please select an answer!";
        hasError = true;
    } else {
        var q3Ans = getSelectedValue(q3);
        if(q3Ans == answers[3]){
            score += 1;
        } else {
            wrongAnswers.push("Question 4");
        }
    } // End of outer if

    if(validate(q4) == false){
        document.getElementById("error_q4").innerHTML = "Please select an answer!";
        hasError = true;
    } else {
        var q4Ans = getSelectedValue(q4);
        if(q4Ans == answers[4]){
            score += 1;
        } else {
            wrongAnswers.push("Question 5");
        }
    } // End of outer if

    if(validate(q5) == false){
        document.getElementById("error_q5").innerHTML = "Please select an answer!";
        hasError = true;
    } else {
        var q5Ans = getSelectedValue(q5);
        if(q5Ans == answers[5]){
            score += 1;
        } else {
            wrongAnswers.push("Question 6");
        }
    } // End of outer if

    if(validate(q6) == false){
        document.getElementById("error_q6").innerHTML = "Please select an answer!";
        hasError = true;
    } else {
        var q6Ans = getSelectedValue(q6);
        if(q6Ans == answers[6]){
            score += 1;
        } else {
            wrongAnswers.push("Question 7");
        }
    } // End of outer if

    if(validate(q7) == false){
        document.getElementById("error_q7").innerHTML = "Please select an answer!";
        hasError = true;
    } else {
        var q7Ans = getSelectedValue(q7);
        if(q7Ans == answers[7]){
            score += 1;
        } else {
            wrongAnswers.push("Question 8");
        }
    } // End of outer if

    if(validate(q8) == false){
        document.getElementById("error_q8").innerHTML = "Please select an answer!";
        hasError = true;
    } else {
        var q8Ans = getSelectedValue(q8);
        if(q8Ans == answers[8]){
            score += 1;
        } else {
            wrongAnswers.push("Question 9");
        }
    } // End of outer if

    if(validate(q9) == false){
        document.getElementById("error_q9").innerHTML = "Please select an answer!";
        hasError = true;
    } else {
        var q9Ans = getSelectedValue(q9);
        if(q9Ans == answers[9]){
            score += 1;
        } else {
            wrongAnswers.push("Question 10");
        }
    } // End of outer if

    if(hasError == false){

        var result = document.getElementById("result");
        document.getElementsByTagName("table")[0].style.display = "none"; 
        var btn = document.getElementsByTagName("button")[0];
        btn.innerHTML = "Retake Quiz"

        btn.onclick = function(){
            location.reload();
        }
        var output = "Your score is " + score + "/" + answers.length + "<br><b>" +
                     Math.floor(((score/answers.length)*100)) + "% correct!</b>";

        if(wrongAnswers.length > 0){
            output += "<br> List of wrong answers <br>";
            for(var i=0; i<wrongAnswers.length; i++){
                output += "<li>" + wrongAnswers[i] + "</li>";
            }
        }
        result.style.display = "block";
        result.innerHTML = output;

        console.log("Your score is " + score + "/" + answers.length);
        console.log( ((score/answers.length)*100) + "% correct");

    }

} // End of showScore function

/*function validate (qName){
    if(qName[0].checked == false &&
       qName[1].checked == false &&
       qName[2].checked == false &&
       qName[3].checked == false){
           return false;
       } else {
           return true;
       }
}*/ // End of validate function

/*function validate (qName){
    for (var x=0; x<qName.length; x++){
        if (qName[x].checked == true){
          return true; 
        } 
    }       
    return false;   
} // End of validate function

function getSelectedValue(qName){
    for(var i=0; i<qName.length; i++){
        if(qName[i].checked){
            return qName[i].value; //return the checked value
        }
    }
}

function clearErr(id){
    document.getElementById(id).innerHTML = "";
}
*/

