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

    let valores;
    let resultado = 0;
    switch (operacao) {
      case 0:
        break;
      case 1:
        valores = await lerDoisValores();
        resultado = await somar(valores.primeiroNumero, valores.segundoNumero);
        console.log(
          `A soma de ${valores.primeiroNumero} + ${valores.segundoNumero} é igual a: ${resultado}`
        );
        break;
      case 2:
        valores = await lerDoisValores();
        resultado = await subtrair(
          valores.primeiroNumero,
          valores.segundoNumero
        );
        console.log(
          `A subtração de ${valores.primeiroNumero} - ${valores.segundoNumero} é igual a: ${resultado}`
        );
        break;
      case 3:
        valores = await lerDoisValores();
        resultado = await dividir(
          valores.primeiroNumero,
          valores.segundoNumero
        );
        console.log(
          `A divisão de ${valores.primeiroNumero} por ${valores.segundoNumero} é igual a: ${resultado}`
        );
        break;
      case 4:
        valores = await lerDoisValores();
        resultado = await multiplicar(
          valores.primeiroNumero,
          valores.segundoNumero
        );
        console.log(
          `A multiplicação de ${valores.primeiroNumero} e ${valores.segundoNumero} é igual a: ${resultado}`
        );
        break;
      case 5:
        const base = await scanner.questionFloat("Informe a base: ");
        const expoente = await scanner.questionFloat("Informe o expoente: ");
        resultado = await exponencial(base, expoente);
        console.log(`${base} elevado a ${expoente} é igual a: ${resultado}`);
        break;
      case 6:
        const numero = await scanner.questionFloat("Informe o número: ");
        const par = await numeroPar(numero);
        console.log(`O ${numero} ${par}.`);
        break;
      case 7:
        const listaNumeros = await lerListaNumeros();
        resultado = await somarNumeros(listaNumeros);
        console.log(
          `A soma dos números ${listaNumeros.join(",")} é ${resultado}`
        );
        break;
      default:
        console.log("Operação Inválida");
        break;
    }
  } while (operacao !== 0);
}

async function lerDoisValores() {
  const a = await scanner.questionFloat("Informe o primeiro número: ");
  const b = await scanner.questionFloat("Informe o segundo número: ");
  return { primeiroNumero: a, segundoNumero: b };
}

async function somar(a: number, b: number) {
  return a + b;
}

async function subtrair(a: number, b: number) {
  return a - b;
}

async function dividir(a: number, b: number) {
  return a / b;
}

async function multiplicar(a: number, b: number) {
  return a * b;
}

async function exponencial(base: number, expoente: number) {
  let resultado = 1;
  for (let i = 1; i <= expoente; i++) {
    resultado = resultado * base;
  }
  return resultado;
}

async function numeroPar(numero: number) {
  let par = "não é par";
  if (numero % 2 === 0) {
    par = "é par";
  }
  // let par = numero % 2 === 0 ? "é par": "não é par";
  return par;
}

async function somarNumeros(listaNumeros: number[]) {
  let total = 0;
  for (let numero of listaNumeros) {
    total += numero;
  }
  return total;
}

async function lerListaNumeros(): Promise<number[]> {
  const numerosString = await scanner.question(
    "Informe os números separados por virgula"
  );
  // Sanitização da lista, deixando apenas números
  const listaNumeros: number[] = numerosString
    .trim()
    .split(",")
    .map((numero) => parseFloat(numero))
    //nego o valor para validar se ele é um NaN e se ele for,
    // eu nego novamente para que ele não seja retornado.
    .filter((numero) => !!numero);
  return listaNumeros;
}

(async () => {
  await main();
  scanner.close();
})();
