  const botoes = document.querySelectorAll('.menu-btn');
  const secoes = document.querySelectorAll('.secao');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const alvo = botao.getAttribute('data-target');

      // esconder tudo
      secoes.forEach(sec => sec.classList.remove('ativa'));

      // mostrar a escolhida
      document.getElementById(alvo).classList.add('ativa');
    });
  });


  function calcular() {
  try {
    let exp = document.getElementById("expressao").value;

    // permite usar ^ como potência
    exp = exp.replace(/\^/g, "**");

    // permite usar sqrt()
    exp = exp.replace(/sqrt/g, "Math.sqrt");

    let resultado = eval(exp);

    document.getElementById("resultado").innerText = resultado;
  } catch (erro) {
    document.getElementById("resultado").innerText = "Expressão inválida";
  }
}

function calcueq() {
  let a = Number(document.getElementById("valor1").value);
  let b = Number(document.getElementById("valor2").value);
  let c = Number(document.getElementById("valor3").value);

  const delta = b * b - (4 * a * c);

  if (delta < 0) {
    document.getElementById("resultad").innerText = "Não existem raízes reais";
    return;
  }

  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  document.getElementById("resultad").innerText = `x1 = ${x1} | x2 = ${x2}`;
}

