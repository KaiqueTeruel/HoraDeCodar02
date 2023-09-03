////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder2Atividade1() {
  const num01 = parseInt(prompt("Escreva um Numero"));
  const num02 = parseInt(prompt("Escreva um Numero"));
  const maiorNum = num01 > num02 ? num01 : num02;

  alert("O Maior Numero é " + maiorNum);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder2Atividade2() {
  const num01 = parseInt(
    prompt("Informe um Numero Negativo, Positivo ou Zero")
  );

  if (num01 == 0) {
    alert("O Valor é Zero");
  } else if (num01 < 0) {
    alert("O Valor é Negativo");
  } else if (num01 >= 1) {
    alert("O Valor e Positivo");
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder2Atividade3() {
  let num01 = parseInt(prompt("Escreva o Primeiro Numero"));
  let num02 = parseInt(prompt("Escreva o Segundo Numero"));
  let num03 = parseInt(prompt("Escreva o Terceiro Numero"));
  let maior;

  if (num01 > num02 && num01 > num03) {
    maior = num01;
  } else if (num02 > num01 && num01 > num02) {
    maior = num02;
  } else {
    maior = num03;
  }

  alert("O numero maior é " + maior);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder2Atividade4() {
  let num01 = parseInt(prompt("Digite o Valor 1"));
  let num02 = parseInt(prompt("Digite o Valor 2"));
  let num03 = parseInt(prompt("Digite o Valor 3"));
  let resultado;

  if (num01 > num02 && num01 > num03) {
    if (num02 > num03) {
      resultado = num01 + num02;
    } else {
      resultado = num01 + num03;
    }
  } else if (num02 > num01 && num02 > num03) {
    if (num01 > num03) {
      resultado = num02 + num01;
    } else {
      resultado = num02 + num03;
    }
  } else {
    if (num01 > num02) {
      resultado = num03 + num01;
    } else {
      resultado = num03 + num02;
    }
  }

  alert("O resultado é " + resultado);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder2Atividade5() {
  let num01 = parseInt(prompt("Digite o primeiro valor"));
  let num02 = parseInt(prompt("Digite o segundo valor"));
  let num03 = parseInt(prompt("Digite o terceiro valor"));
  let num04 = parseInt(prompt("Digite o quarto valor"));
  let num05 = parseInt(prompt("Digite o quinto valor"));
  let num06 = parseInt(prompt("Digite o sexto valor"));
  let soma = 0;

  document.write(
    "<p>" +
      num01 +
      ", " +
      num02 +
      ", " +
      num03 +
      ", " +
      num04 +
      ", " +
      num05 +
      ", " +
      num06 +
      "</p>"
  );

  soma = num01 + num02 + num03 + num04 + num05 + num06;

  alert("A soma é " + soma);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder2Atividade6() {
  let num1 = parseFloat(prompt("Digite o primeiro valor:"));
  let num2 = parseFloat(prompt("Digite o segundo valor:"));
  let num3 = parseFloat(prompt("Digite o terceiro valor:"));
  let num4 = parseFloat(prompt("Digite o quarto valor:"));

  let maiorValor = num1;

  if (num2 > maiorValor) {
    maiorValor = num2;
  }

  if (num3 > maiorValor) {
    maiorValor = num3;
  }

  if (num4 > maiorValor) {
    maiorValor = num4;
  }

  document.write("<p>Primeiro valor: " + num1 + "</p>");
  document.write("<p>Último valor: " + num4 + "</p>");
  document.write("<p>Maior valor: " + maiorValor + "</p>");
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder2Atividade7() {
  let num1 = parseFloat(prompt("Digite o primeiro número:"));
  let num2 = parseFloat(prompt("Digite o segundo número:"));
  let num3 = parseFloat(prompt("Digite o terceiro número:"));
  let num4 = parseFloat(prompt("Digite o quarto número:"));
  let num5 = parseFloat(prompt("Digite o quinto número:"));
  let num6 = parseFloat(prompt("Digite o sexto número:"));

  let somaValoresMenores72 = 0;

  if (num1 < 72) {
    somaValoresMenores72 += num1;
  }

  if (num2 < 72) {
    somaValoresMenores72 += num2;
  }

  if (num3 < 72) {
    somaValoresMenores72 += num3;
  }

  if (num4 < 72) {
    somaValoresMenores72 += num4;
  }

  if (num5 < 72) {
    somaValoresMenores72 += num5;
  }

  if (num6 < 72) {
    somaValoresMenores72 += num6;
  }

  document.getElementById("resultado").innerHTML =
    "<p>A soma dos valores menores que 72 é: " +
    somaValoresMenores72 +
    "</p>" +
    "<p>Valores informados: " +
    num1 +
    ", " +
    num2 +
    ", " +
    num3 +
    ", " +
    num4 +
    ", " +
    num5 +
    ", " +
    num6 +
    "</p>";
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder2Atividade8() {
  let num1 = parseFloat(prompt("Digite o primeiro número:"));
  let num2 = parseFloat(prompt("Digite o segundo número:"));
  let num3 = parseFloat(prompt("Digite o terceiro número:"));
  let num4 = parseFloat(prompt("Digite o quarto número:"));

  if (
    num1 >= 0 &&
    num1 < 10 &&
    num2 >= 0 &&
    num2 < 10 &&
    num3 >= 0 &&
    num3 < 10 &&
    num4 >= 0 &&
    num4 < 10
  ) {
    let media = (num1 + num2 + num3 + num4) / 4;

    if (media > 5) {
      alert("Você passou no teste.");
    } else {
      alert("Tente novamente.");
    }
  } else {
    alert("Os números devem estar no intervalo entre 0 e 10.");
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder2Atividade9() {
  let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
  let anoAtual = 2023;
  let idade = anoAtual - anoNascimento;

  if (idade >= 18) {
    alert("Você pode votar este ano.");
  } else {
    alert("Você não pode votar este ano.");
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder2Atividade10() {
  let altura = parseFloat(prompt("Informe sua altura"));
  let sexo = parseInt(prompt("Informe seu sexo"));
  let resultado10;

  if (sexo == 1) {
    resultado10 = 62.1 * altura - 44.7;
  } else if (sexo == 2) {
    resultado10 = 72.7 * altura - 58;
  } else {
    alert("Operação Invalida");
  }

  alert("Sua altura ideal é " + resultado10);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder2Atividade11() {
  let num1, num2;
  let operacao;

  alert("Vamos Fazer um Cálculo?\n");

  num1 = parseFloat(prompt("Digite o Valor para o Primeiro Número:"));
  num2 = parseFloat(prompt("Digite o Valor para o Segundo Número:"));

  operacao = prompt("Escolha uma Operação para Continuar (+, -, *, /):");

  switch (operacao) {
    case "+":
      alert("O resultado da Soma é: " + (num1 + num2));
      break;

    case "-":
      alert("O resultado da Subtração é: " + (num1 - num2));
      break;

    case "*":
      alert("O resultado da Multiplicação é: " + num1 * num2);
      break;

    case "/":
      if (num2 !== 0) {
        alert("O resultado da Divisão é: " + num1 / num2);
      } else {
        alert("Não é possível dividir por zero.");
      }
      break;

    default:
      alert("Operação Inválida");
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
