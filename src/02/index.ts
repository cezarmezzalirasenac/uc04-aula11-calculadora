import Scanner from "@codeea/scanner";

const scanner = new Scanner();

async function main() {
  const menu = `
    0 - SAIR
    1 - SOMA
    2 - SUBTRACAO
    3 - DIVISAO
    4 - MULTIPLICACAO
    5 - POTENCIACAO
    6 - CHECA SE NUMERO É PAR
    7 - SOMAR LISTA DE NUMEROS
  `;
  let operacao = 0;
  do {
    console.log(menu);
    operacao = parseInt(await scanner.question("Informe a operação: "));
    
    switch (operacao) {
      case 0:
        break;
      case 1:
        await somar();
        break;
      case 2:
        await subtrair();
        break;
      case 3:
        await dividir();
        break;
      case 4:
        await multiplicar();
        break;
      case 5:
        await exponencial();
        break;
      case 6:
        await numeroPar();
        break;
      case 7:
        await somarNumeros();
        break;
      default:
        console.log("Operação Inválida");
        break;
    }
  } while (operacao !== 0);
}

async function somar() {
  const a = await scanner.questionFloat("Informe o primeiro número: ");
  const b = await scanner.questionFloat("Informe o segundo número: ");
  const resultado = a + b;
  console.log(`A soma de ${a} + ${b} é igual a: ${resultado}`);
}

async function subtrair() {
  const a = await scanner.questionFloat("Informe o primeiro número: ");
  const b = await scanner.questionFloat("Informe o segundo número: ");
  const resultado = a - b;
  console.log(`A subtração de ${a} - ${b} é igual a: ${resultado}`);
}

async function dividir() {
  const a = await scanner.questionFloat("Informe o primeiro número: ");
  const b = await scanner.questionFloat("Informe o segundo número: ");
  const resultado = a / b;
  console.log(`A divisão de ${a} por ${b} é igual a: ${resultado}`);
}

async function multiplicar() {
  const a = await scanner.questionFloat("Informe o primeiro número: ");
  const b = await scanner.questionFloat("Informe o segundo número: ");
  const resultado = a * b;
  console.log(`A multiplicação de ${a} e ${b} é igual a: ${resultado}`);
}

async function exponencial() {
  const base = await scanner.questionFloat("Informe a base: ");
  const expoente = await scanner.questionFloat("Informe o expoente: ");
  let resultado = 1;
  for (let i = 1; i <= expoente; i++) {
    resultado = resultado * base;
  }
  console.log(`${base} elevado a ${expoente} é igual a: ${resultado}`);
}

async function numeroPar() {
  const numero = await scanner.questionFloat("Informe o número: ");
  let par = "não é par";
  if (numero % 2 === 0) {
    par = "é par";
  }
  // let par = numero % 2 === 0 ? "é par": "não é par";
  console.log(`O ${numero} ${par}.`);
}

async function somarNumeros() {
  const numerosString = await scanner.question(
    "Informe os números separados por virgula"
  );
  const listaNumeros: number[] = numerosString
    .trim()
    .split(",")
    .map((numero) => parseFloat(numero))
    //nego o valor para validar se ele é um NaN e se ele for, eu nego novamente para que ele não seja retornado.
    .filter((numero) => !!numero);

  let total = 0;
  for (let numero of listaNumeros) {
    total += numero;
  }

  console.log(`A soma dos números ${numerosString.trim()} é ${total}`);
}

(async () => {
  await main();
  scanner.close();
})();
