// declarar as variáveis x e y


// a definir o status



//  API de fala para texto




// para iniciar o reconhecimento de fala, vamos definir uma função como start
function start()
{
    
    recognition.start();
} 
 
// exibir o resultado na página HTML
recognition.onresult = function(event) {

 console.log(event); 

//  buscar o texto da transcrição que está dentro de 0, o código
// será event.results[0][0].transcript


// atualizar esse texto com o status 
  
    
// desenhar circulo
   if(content =="círculo")
      {
        x = Math.floor(Math.random() * 900);
      
        // atualizar o status
 
        // atualizar o valor da variável drawCircle
        
      }

// desenhar retângulo
      if(content =="retângulo")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Desenhando um retângulo."; 
        drawRect = "set";
      }
}

// criar uma tela
function setup() {
  
}

// escrever o código para realmente desenhar a forma na tela
function draw() {
  if(drawCircle == "set")
  {
    // obter o raio do círculo
   
    // usar a função circle()

    // atualizar o ID de status da tag span para texto como “Círculo desenhado” 
    
  
  }
// da mesma forma fazer o retângulo
  if(drawRect == "set")
  {
    rect(x,y,70,50);
    document.getElementById("status").innerHTML = "Retângulo desenhado. ";
    drawRect = "";
  }

}








