var main, time, interest, limbo, lowkey, newMain;

function compute()
  {
      p = document.getElementById("initial").value;
      r = document.getElementById("years").value;
      i = document.getElementById("textInput").value;
      main = parseInt(p);
      time = parseInt(r);
      interest = parseInt(i);
      interest = interest /100;
     // interest = interest + 0.005
     var newInterest = interest.toFixed(3);
      console.log(newInterest);

      //Sum of Variables 
      // final message variable

      var final = main * newInterest * time;
      var year = 2021
      var finalTime = (year + time);
      console.log(year + time);
      console.log(final);
      var finalMes = ("if you deposit" + " " + main + " " +
      "at an interest rate of" + " " +  i + " " + "You will receive an amount of"
      + " " + final  + ", in the year" + " " + finalTime );
      
      //Checks if code is not a negative number
      //prints out message
      if(main <= 0 || document.getElementById("initial").value.length == 0){ 
          window.alert("Please enter positive number");
        
        }

        
        else{
          var tag = document.createElement("p");
          var text = document.createTextNode(finalMes);
          tag.appendChild(text);
          var element = document.getElementById("answer");
          element.appendChild(tag);
          
          //disbables compute button
          document.getElementById("compute").disabled = true;
        
        }
         
      }  
//<input type="text" id="sum" onchange ="updateTextInput(this.final);">
  //      <input type="text" id="output" value=""></input>

      
  
  //Slider    
function updateTextInput(val) {
    document.getElementById('textInput').value=val + '%';
    var interest = parseInt(val);
  }
  //reset button
  function clear(){
    document.getElementById("clearButton").reset();
      }




  

  



  