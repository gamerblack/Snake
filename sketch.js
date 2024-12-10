let borda = 0


function setup(){
  fundo = createCanvas(WIDTH, HEIGHT)
    Tabuleiro();
   Centralizar();

}

function draw() {
  
  background(0)
  
  rectMode(CENTER)
 

  
  frameRate(10)
  
  Tabuleiro();
  tecla();
  jogador();
  Bolinha();
  colisao();
  
}




// centralização do Projeto na tela 
function Centralizar(){
  let l = (windowWidth - width)/2
  let a = (windowHeight  - height)/2
  
  fundo.position(l, a);
}

function windowResized(){
  Centralizar();
}



