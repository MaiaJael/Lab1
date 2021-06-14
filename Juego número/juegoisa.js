var numAleatorioA;
var numAleatorioB;
var operation;
var operaciones = ["+","-","/","*"];
var points = 0;
var timer;
var seconds = 0;
var levels = 0;
var aciertos = 0;
var fracasos = 0;

function startNewLevel()
{
  if(levels <= 10){
    levels++;
  	createRandomData();
  	showData();
  	timer = setInterval(function (){
   	 seconds++;
   	 document.getElementById("seconds").innerHtml = "llevas "+seconds;
  	  endLevel();
 	 },1000);
 }else{
   alert("juego finalizados aciertos "+aciertos+" fracasitos "+fracasos)
   
 }
  
}

function endLevel()
{
  if(seconds <= 10){
     clearInterval(timer);
     startNewLevel();
     fracasos++;
  }
}


function showData()
{
document.getElementById("seconds").innerHtml = numAleatorioA + " " + operation + " " + numAleatorioB;
}

function createRandomData()
{

   numAleatorioA = parseInt(Math.random()*10);
   numAleatorioB = parseInt(Math.random()*10);
   var operIndex = parseInt(Math.random()*4);
   operation = operaciones[operIndex];
   

}

function calculate()
{
  var response = document.getElementById("respuesta");
  var correct_response = 0;
  
  switch(operation){
    case '+':
    	correct_response = numAleatorioA + numAleatorioB;
      break;
    case '-':
    	correct_response = numAleatorioA - numAleatorioB;
      break;
    case '/':
    	correct_response = numAleatorioA / numAleatorioB;
      break;
    case '*':
    	correct_response = numAleatorioA * numAleatorioB;
      break;
    default:
    	break;
  }
  
  
  
  
  if (correct_response == response) {
     points = points +10;
     aciertos++;
  }else{
     fracasos++;
     points = points -5;
  }
  
  clearInterval(timer);
  startNewLevel();
  

}