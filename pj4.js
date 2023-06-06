//Fahad Mohammed
// 02/25/21
// Project 4
  //This function alows us to get the hiden information for the hint button
  function myFunction0() {
    var x = document.getElementById("hints0");
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none'; 
    }
  }
  
  //This function alows us to get the hiden information for the hint button
  function myFunction1() {
    var x = document.getElementById("hints1");
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none'; 
    }
  }
   //This function alows us to get the hiden information for the hint button
  function myFunction2() {
    var x = document.getElementById("hints2");
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none'; 
    }
  }
  //This function alows us to get the hiden information for the hint button 
  function myFunction3() {
    var x = document.getElementById("hints3");
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none'; 
    }
  }
 
   //This function alows us to get the hiden information for the hint button
  function myFunction4() {
    var x = document.getElementById("hints4");
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none'; 
    }
  }
  //This function lets us set the correct and incorrect answers 
  //So that the function knows which answer is right or wrong
    function clickEventHandler( ) 
    {
        const correctAnswers = ["c", "a", "b", "b", "a"];
        var numCorrectAnswers = 0;
        for(let i = 1; i <= 5; i++) {
            var radioButtons = document.getElementsByName(i + "");
            for(let k = 0; k <= 2; k++) {
                if (radioButtons[k].checked &&
                    radioButtons[k].value == correctAnswers[i-1]){
                    numCorrectAnswers++;
                }
            }
        }//this shows the score by declaring a variable
        var para = document.getElementById("score");
        para.innerHTML = "Score: " + numCorrectAnswers;
    }
  
    function init( ) {
        var button2 = document.getElementById("btn2"); //button 2 set up
        button2.onclick = clickEventHandler; // tells the button process the scores after being clicked
    }
    window.onload = init;// loads the init