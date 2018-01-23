//1, reads (runs) v
var userValue;

//2, reads (runs) v
var BeepBoopFunc = function(count) {
  //15, goes through the for loop.
  //inside the loop
  if (count != 0 && count % 3 == 0) {
    return " I'm sorry, Dave. I'm afraid I can't do that.";
    //count converted into string, find the index of the char 1, since its a if statments
    //making sure the index -1 (as long as string of function is anything but -1
  //-1 means it not in the string (not not found, it never occur))
  //it did not not find it outside the string (anything other then that neg then true)
} else if (count.toString().indexOf("1") != -1) {
    return " Boop!";
  } else if (count.toString().indexOf("0") != -1) { //
    return " Beep!";
  } else {
    return count;
  }
}
//3, reads (runs) v
//4, starts running here when the page is ready (called life cycle event)
$(function() {
  //5, once user submits it runs the function (because the submit is the listener
  //and listens for that submit after the user hits submit)V
  //6, qjuery selecting the element with the id beepBoop
  //7, .sumbit is the listener function to be trigger when the form is sumbitted
  //8, once listener is trigger it trys to rin function which is called a called back
  //9, passes in argument (event) which means to prevent the default action from happaning
  //10, stops it from being sumbitted
  $('#beepBoop').submit(function(event) {
    event.preventDefault();
    //11, defining an empty array because your going to do something with it soon
    var resultsArray = [];
    //12, taking your global var and sets uservalue to equal the value of the element
    // with id userInput
    userValue = $('#userInput').val();
    //13, running a for loop with conidtions; assigns value, checks the value against uservalue
    //and counts it up by one value
    for (var count = 0; count <= userValue; count += 1) {
      //14, setting the var result equal to the return value of BeepBoopFunc
      var result = BeepBoopFunc(count);
      //16, (push) adding the results to the resultsArray
      resultsArray.push(result);
      //end of for loop, repeat as needed, until count is greater than userValue, then it exits loop
    };
    // 17 set the text of the element with id results to the results array populated in earier steps
    $('#results').text(resultsArray);
  })
});
