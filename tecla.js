var x = 0
var y = 16

var vx = 0
var vy = 0

let t = size/2

function tecla(){
  
  if (keyIsDown(LEFT_ARROW)){
    vx = -1
    vy = 0
  } else if (keyIsDown(RIGHT_ARROW) ){
    vx = 1
    vy = 0
  } else if (keyIsDown(UP_ARROW)){
    vx = 0
    vy = -1
  } else if (keyIsDown(DOWN_ARROW)){
    vx = 0
    vy = 1
  }
  
  x += vx
  y += vy
  
  
  if(x < 0) x = nx -1
  else
  if(x > nx -1) x = 0
  
  if(y < 0) y = ny -1
  else
  if(y > ny -1) y = 0

  
}

function jogador(){
  let jogador = calcCoordenadas(x, y)
  
  rectMode(CENTER)
  
  fill(255, 133, 10)
  stroke(255, 100, 15)
  strokeWeight(0.5)
  rect(jogador[0] + t, jogador[1]  + t, t, t)
  
  frameRate(9)
}
  
