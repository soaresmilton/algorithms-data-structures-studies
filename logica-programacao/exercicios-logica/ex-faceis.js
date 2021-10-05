// Exercício 1 - Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
//   função) e com ponto de exclamação "!" no final.

const exercicio1 = nome => `Olá, ${nome}!`;

//Exercício 2 - Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias
const exercicio2 = idade => {
  let idadeEmDias = idade * 365;
  return idadeEmDias;
}

// Exercício 3 - Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
// funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
// X", em que X é o quanto o funcionário ganhou no mês.

const exercicio3 = (horasTrabalhadas, valorPorHora) => {
  let salarioPorMes = horasTrabalhadas * valorPorHora;
  return `Salário igual a R$ ${salarioPorMes}`;
}


// Exercício 4 - Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
//   exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

const exercicio4 = (numeroDoMes) => {
  let meses = [null, 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  if (numeroDoMes < 1 || numeroDoMes > 12) {
    return console.error("Ensira um número de 1 a 12");
  } else {
    return meses[numeroDoMes];
  }
}

// Exercício 5 -Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

const exercicio5 = (a, b) => {
  if (typeof a != typeof b) return false
  return a >= b;
}

// Exercício 6 - Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
// retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
// de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
// tipo ...".

const exercicio6 = (valor) => {
  let tipoDoValor = typeof valor;
  if (tipoDoValor == "boolean") return !tipoDoValor;
  if (tipoDoValor == "number") return tipoDoValor * (-1);
  if (tipoDoValor != "number" || typeof tipoDoValor != "boolean") return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof tipoDoValor}`;
}

// Exercício 7 - Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
// o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
// "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
// inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
// considerando se numero é igual a minimo ou a maximo.

const exercicio7 = (numero, minimo, maximo, inclusivo = false) => {
  return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}

// Exercício 8 - Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.

const exercicio8 = (a, b) => {
  let resultado = 0
  for (let i = 0; i < b; i++) {
    resultado += a;
  }
  return resultado;
}

// Exercício 9 - Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.

const exercicio9 = (looping, contador) => {
  // let arr = [];
  // for (let i = 0; i < contador; i++) {
  //   arr.push(looping);
  // }
  // return arr;

  return Array(contador).fill(looping);
}

// Exercício 10 - Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.

const exercicio10 = (numero) => {
  let str = "";
  if (numero == 0) return str;

  for (let i = 0; i < numero; i++) {
    str += "+";
  }

  return str;
}

// Exercício 11 - Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
const exercicio11 = (arr) => {
  let primeiroElemento = arr[0];
  let ultimoElemento = arr[arr.length - 1];
  return [primeiroElemento, ultimoElemento];
}

// Exercício 12 -

const exercicio12 = (obj, prop) => {
  const copiaObj = { ...obj };
  delete copiaObj[prop];
  return copiaObj
}

// Exercicio 13 - Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.

const exercicio13 = arr => {
  // return arr.filter(elemento => typeof elemento === "number");
  return arr.filter(elemento => { if (typeof elemento === "number") return elemento });

}

// Eexercicio 14 -Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
// elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
// exemplos abaixo para um melhor entendimento:

const exercicio14 = (obj) => {
  let arr = Object.entries(obj);
  return arr;
}

// Exercício 15 - Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.

const exercicio15 = (arr) => {
  return arr.filter((element, index) => {
    let elementoPar = element % 2 === 0;
    let indicePar = index % 2 === 0;

    if (elementoPar && indicePar) return [elementoPar, indicePar];
  })
}



//  console.log(exercicio1("Mundo"));
// console.log(exercicio2(70));
// console.log(exercicio3(150, 40.5));
// console.log(exercicio4(12));
// console.log(exercicio5(5,1));
// console.log(exercicio6(5));
// console.log(exercicio6(true));
// console.log(exercicio7(3, 150, 3, true));
// console.log(exercicio8(5,5)); // => Varias resoluções por meio da recursividade 
// console.log(exercicio9('código', 5));
// console.log(exercicio10(5));
// console.log(exercicio11([-100, 2, "alo miltin"]));

// var obj = {
//   nome: 'Miltinho',
//   idade: 25,
//   altura: 1.70
// }

// console.log(exercicio12(obj, 'idade'));
// console.log(Object.is(exercicio12(obj, 'altura'), obj));

// console.log(exercicio13(["milton", "sara", 2, "12", true, 4, 6]));
// console.log(exercicio14({
//   nome: 'Milton',
//   idade: 25,
//   altura: 1.7
// }));

// console.log(exercicio15([1, 2, 3, 4]));