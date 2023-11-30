const expressao = document.getElementById('expressao');
const resultado = document.getElementById('resultado');
const botoes = document.getElementById('botoes');

let calculo = '';
let resultadoMostrado = false;

function Clique(valor) {
  if (valor === 'C') {
    calculo = '';
    limparVisor();
  } else if (valor === '=') {
    calcularResultado();
  } else if (valor === '←') {
    calculo = calculo.slice(0, -1);
    atualizarVisor();
  } else {
    if (resultadoMostrado && !'+-*/'.includes(valor)) {
      calculo = '';
      resultadoMostrado = false;
      limparVisor();
    }
    calculo += valor;
    atualizarVisor();
  }
}

function atualizarVisor() {
  expressao.textContent = calculo;
}

function limparVisor() {
  expressao.textContent = '';
  resultado.textContent = '';
}

function calcularResultado() {
  try {
    const resultadoCalculo = eval(calculo);
    resultado.textContent = `= ${resultadoCalculo}`;
    resultadoMostrado = true;
  } catch (error) {
    resultado.textContent = 'Erro';
  }
}

botoes.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const valorBotao = event.target.textContent;
    Clique(valorBotao);
  }
});

