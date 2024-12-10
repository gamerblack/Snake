let cx = -1
let cy = -1


function colisao(){
   if (cx == x && cy == y){
     console.log("colidiu")
     DrawBolinha();
   }
}

function DrawBolinha(){
   cx = Math.floor(random(14))
   cy = Math.floor(random(14))
  
   
    while (cx == x && cy == y){
     cx = Math.floor(random(14))
     cy = Math.floor(random(14))
    }
    
}
  
function Bolinha(){
    
  if (cx == -1 && cy == -1){
    DrawBolinha();
  }
    
  let bolinha = calcCoordenadas(cx, cy)

  fill (220,20,60)
  stroke (128,0,0)
  strokeWeight(2)
  
 
  circle(bolinha[0] + 20, bolinha[1] + 20, 20)
  //variável sendo declarada no sketch
   
  
  
}

function verificacao(x, y){
  if (sq(x - cx[contador]) + sq(cy[contador] - y) <= 10 * 10){
    // console.log("bateu")
    return true
  } else {
  // console.log("não bateu");
  return false
  }
} 
