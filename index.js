let vitorias = 65;
let derrotas = 19;
let resultado = vitorias - derrotas;

function rank(resultado) {
  console.log("Seu herói está com o saldo de " + resultado);
  
  if (resultado <= 10) {
    console.log("Você está no nível Ferro");
  } else if (resultado >= 11 && resultado < 20) {
    console.log("Você está no nível Bronze");
  } else if (resultado >= 21 && resultado < 50) {
    console.log("Você está no nível Prata");
  } else if (resultado >= 51 && resultado < 80) {
    console.log("Você está no nível Ouro");
  } else if (resultado >= 81 && resultado < 90) {
    console.log("Você está no nível Diamante");
  } else if (resultado >= 91 && resultado < 100) {
    console.log("Você está no nível Lendário");
  } else if (resultado >= 101) {
    console.log("Você está no nível Imortal");
  }
}

rank(resultado);
