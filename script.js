var buttons = document.getElementsByClassName("button");

var display = document.getElementById("output");
let j = 1;
let screenValue= "";

for(var i = 0; i < buttons.length; i++){
    
    buttons[i].addEventListener("click", (e) => {
      
        buttonText = e.target.innerText;

        if(buttonText == "*"){
            screenValue += buttonText;
            display.value += buttonText;
        }

        else if(buttonText == "="){
            display.value = eval(screenValue);
        }
        
        else if(buttonText == "C"){
           
            display.value = screenValue.slice(0 , screenValue.length - 1);
   
        }

        else if(buttonText == "AC"){
            screenValue = "";
            display.value = screenValue;
        }
        else{
            screenValue += buttonText;
            display.value += buttonText;
        }

    })
}
