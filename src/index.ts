// Calculadora para terminal

import Scanner from "@codeea/scanner";

// Operações básicas: soma, substração, divisão e multiplicação

async function main() {
  // 0 - SAIR
  // 1 - SOMA
  // 2 - SUBTRACAO
  // 3 - DIVISAO
  // 4 - MULTIPLICACAO
  const scanner = new Scanner();
  const menu = `
    0 - SAIR
    1 - SOMA
    2 - SUBTRACAO
    3 - DIVISAO
    4 - MULTIPLICACAO
    5 - POTENCIACAO
    6 - CHECA SE NUMERO É PAR
  `;

  let operacao = 0;
  do {
    console.log(menu);
    operacao = parseInt(await scanner.question("Informe a operação: "));
    if (operacao === 1) {
      // SOMA
      console.log("SOMANDO");
      const a = await scanner.questionFloat("Informe o primeiro número: ");
      const b = await scanner.questionFloat("Informe o segundo número: ");
      const resultado = a + b;
      console.log(`A soma de ${a} + ${b} é igual a: ${resultado}`);
    } else if (operacao === 2) {
      // SUBTRACAO
      console.log("SUBTRAINDO");
      const a = await scanner.questionFloat("Informe o primeiro número: ");
      const b = await scanner.questionFloat("Informe o segundo número: ");
      const resultado = a - b;
      console.log(`A subtração de ${a} - ${b} é igual a: ${resultado}`);
    } else if (operacao === 3) {
      // DIVISAO
      console.log("DIVIDINDO");
      const a = await scanner.questionFloat("Informe o primeiro número: ");
      const b = await scanner.questionFloat("Informe o segundo número: ");
      const resultado = a / b;
      console.log(`A divisão de ${a} por ${b} é igual a: ${resultado}`);
    } else if (operacao === 4) {
      // MULTIPLICAO
      console.log("MULTIPLICANDO");
      const a = await scanner.questionFloat("Informe o primeiro número: ");
      const b = await scanner.questionFloat("Informe o segundo número: ");
      const resultado = a * b;
      console.log(`A multiplicação de ${a} e ${b} é igual a: ${resultado}`);
    } else if (operacao === 5) {
      // EXPONENCIACAO
      console.log("CALCULANDO...");
      const base = await scanner.questionFloat("Informe a base: ");
      const expoente = await scanner.questionFloat("Informe o expoente: ");
      let resultado = 1;
      for (let i = 1; i <= expoente; i++) {
        resultado = resultado * base;
      }
      console.log(`${base} elevado a ${expoente} é igual a: ${resultado}`);
    } else if (operacao === 6) {
      // NUMERO É PAR
      console.log("CALCULANDO...");
      const numero = await scanner.questionFloat("Informe o número: ");
      let par = "não é par";
      if (numero % 2 === 0) {
        par = "é par";
      }
      // let par = numero % 2 === 0 ? "é par": "não é par";
      console.log(`O ${numero} ${par}.`);
    } else if (operacao !== 0) {
      console.log("Opção Inválida");
    }
  } while (operacao !== 0);
  scanner.close();
  console.log("Encerrou");
}

(async () => {
  await main();
})();
