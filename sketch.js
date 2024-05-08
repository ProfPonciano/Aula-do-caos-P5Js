let palavra; //cria a variavel GLOBAL palavra

function palavraAleatoria() {   //cria função palavraAleatória
  let palavras = ["Tecnologia", "JavaScript", "Programação", "Alura", "Robótica", "P5JS", "Escola"];                   //cria uma variavel tipo array palavras

  return random(palavras);  //retona a palavra sorteada paraa chamada da função
}


function setup() {
  createCanvas(600, 400);  //cria a tela e define tamnho (x,y)(largura/altura)
  palavra = palavraAleatoria();        //chama a função palavraAleatoria()
}

function inicializaCores(){ //cria a função inicializaCores
  background ("#32CD99"); // cor de fundo da tela
  fill (random(0,100), random(0,100), random(0,100));       //cor da caneta /letra
  stroke("rgb(1,0,14)")
  textSize (80);            //tamanho da fonte
  textAlign(CENTER, CENTER); //alinhamento do texto
  textFont('algerian');
}

function draw(){
  inicializaCores(); //chama a função inicializaCores
  let maximo = width; //cria a variavel maximo e define valor como largura da tela
  let minimo = 0;  //cria a variavel minomo e define o valor como 0
  let quantidade = map(mouseX, 0, width, 0, palavra.length); //cria avariavel quantidade
  
  if(quantidade<1){
    palavra = palavraAleatoria();
  }
  
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 300, 200);
  
  
}