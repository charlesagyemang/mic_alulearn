

// Public functions
function getChosenAnswer(inputName){
  if(document.querySelectorAll("input[type='radio'][name=" + inputName + "]:checked").length > 0){
    return document.querySelector("input[name=" + inputName + "]:checked").value
  } else {
    return false;
  }

}



document.addEventListener("DOMContentLoaded", function(event) {

    // set click lister for submit button
    var networkingQuizSubmitButton  =  document.getElementById('quiz-finished-networking');
    var questionDiv                 =  document.getElementById('questions');
    var answersDiv                  =  document.getElementById('answers');
    var scores                      =  0;
    // array of correct answers 
    var answersArray                =  [0, 1, 2, 0, 1, 3, 1, 0, 1, 0, 2, 2, 1];



    networkingQuizSubmitButton.addEventListener('click', function(){
      var chosenAnswersArray          =  [];
      // get all the answers;
      var quesOne      = getChosenAnswer("quesOne");
      var quesTwo      = getChosenAnswer("quesTwo");
      var quesThree    = getChosenAnswer("quesThree");
      var quesFour     = getChosenAnswer("quesFour");
      var quesFive     = getChosenAnswer("quesFive");
      var quesSix      = getChosenAnswer("quesSix");
      var quesSeven    = getChosenAnswer("quesSeven");
      var quesEight    = getChosenAnswer("quesEight");
      var quesNine     = getChosenAnswer("quesNine");
      var quesTen      = getChosenAnswer("quesTen");
      var quesEleven   = getChosenAnswer("quesEleven");
      var quesTwelve   = getChosenAnswer("quesTwelve");
      var quesThirteen = getChosenAnswer("quesThirteen");

      // check if all questions have been tackled
      if (
          quesOne         !== false
          && quesTwo      !== false
          && quesThree    !== false
          && quesFour     !== false
          && quesFive     !== false
          && quesSix      !== false
          && quesSeven    !== false
          && quesEight    !== false
          && quesNine     !== false
          && quesTen      !== false
          && quesEleven   !== false
          && quesTwelve   !== false
          && quesThirteen !== false
         )
      {
        window.alert("hey")
        // push answers to array

        chosenAnswersArray.push(quesOne, quesTwo,
                                quesThree, quesFour,
                                quesFive, quesSix,
                                quesSeven, quesEight,
                                quesNine, quesTen,
                                quesEleven, quesTwelve,
                                quesThirteen);
        console.log(chosenAnswersArray);

        // Marking logic

        // compare both arrays and introduce a total score
        score = 0;

        for(var i = 0; i < answersArray.length; i++){
          // check the values at each position
          if (answersArray[i] == chosenAnswersArray[i]){
            score += 1;
          }

        }


        // release scores
        questionDiv.style.display = "none";
        this.style.display     = "none";
        answersDiv.innerHTML      = "<h1> You scored " + score +" / 13 </h1><br /><button class= 'btn btn-primary'>View Answers</button>"


      } else {
        window.alert("attempt all question")
      }

        //console.log(getChosenAnswer("quesSeven"));
    })





    // List query selctor with the ids and log the results on click for test
    // var quesOne = document.querySelector('input[name=quesOne]:checked').value;
    // console.log(quesOne);

});
