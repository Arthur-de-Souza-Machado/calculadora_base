const resultado = document.getElementById('resultado');
const botoes = document.getElementById('botoes');

let calculo = '';
let resultadoMostrado = false;

function Clique(valor) {
  if (valor === 'C') {
    calculo = '';
  } else if (valor === '=') {
    try {
      calculo = eval(calculo);
      resultadoMostrado = true;
    } catch (error) {
      calculo = 'Erro';
    }
  } else if (valor === '←') {
    calculo = calculo.slice(0, -1);
  } else {
    if (resultadoMostrado && !'+-*/'.includes(valor)) {
      calculo = '';
      resultadoMostrado = false;
    }
    calculo += valor;
  }

  atualizarVisor();
}

function atualizarVisor() {
  resultado.textContent = calculo;
}

botoes.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const valorBotao = event.target.textContent;
    Clique(valorBotao);
  }
});