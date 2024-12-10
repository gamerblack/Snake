let tabuleiro = [nx] [ny]

function Tabuleiro(){
  
  rectMode(CORNER)
 
  for ( let i = 0; i < nx; i++){
    for ( let j = 0; j < ny; j++){
      noFill()
      strokeWeight(1)
      stroke(100, 205, 200)
      let coordenada = calcCoordenadas(i, j)
      rect(coordenada[0], coordenada[1], size, size);
    }
  }

}


function calcCoordenadas(coluna, linha){
  return[coluna * size + borda, linha * size + borda]
}
