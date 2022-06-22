var characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
var symbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let firstPassword = document.getElementById("password1")
let secondPassword = document.getElementById("password2")
var symbolsTF = true
var numbersTF = true
var messageNumbers = document.getElementById("messageNumber")
var messageSymbols = document.getElementById("messageSymbol")



function numbersON(){
     numbersTF = true
     messageNumbers.textContent = "Numbers are ON"     
}
function numbersOF(){
    numbersTF = false
    messageNumbers.textContent = "Numbers are OFF" 
    messageSymbols.textContent = "Symbols are ON" 
    //symbolsTF = true
}

function symbolON(){
     symbolsTF = true
    messageSymbols.textContent = "Symbols are ON"
}
function symbolOF(){
   symbolsTF = false
   numbersTF = true
   messageSymbols.textContent = "Symbols are OFF"
   messageNumbers.textContent = "Numbers are ON"
   
}

var arrayLength = characters.length
console.log(arrayLength)
console.log(symbols)


function passwordGenerator(){   
  let inputnumber = document.getElementById("myInput").value;
  if (inputnumber < 16){
    passwordGenerator2()     
    function passwordGenerator2(){
       firstPassword.textContent = ""
       secondPassword.textContent = ""
       for(var i = 0; i < inputnumber; i++){
        if (numbersTF === false){
            arrayLength = symbols.length
            let number1 = Math.floor(Math.random()*arrayLength)
            let number2 = Math.floor(Math.random()*arrayLength)
          
            firstPassword.textContent += symbols[number1]
            secondPassword.textContent += symbols[number2]
            
        } else if(symbolsTF === false){
            arrayLength = numbers.length
            let number1 = Math.floor(Math.random()*arrayLength)
            let number2 = Math.floor(Math.random()*arrayLength)
          
            firstPassword.textContent += numbers[number1]
            secondPassword.textContent += numbers[number2]
        } else{
          arrayLength = characters.length
          let number1 = Math.floor(Math.random()*arrayLength)
          let number2 = Math.floor(Math.random()*arrayLength)
          
          firstPassword.textContent += characters[number1]
          secondPassword.textContent += characters[number2]
          }
       }
    }
  }
}


 
function copyFP() {
    var text = document.getElementById("password1").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}

function copySP() {
    var text = document.getElementById("password2").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}