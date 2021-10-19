const exercicio1 = nome => `Olá, ${nome}!`;

var sara = "Sara"
var milton = "Milton"
 console.log(exercicio1(sara));
 console.log(exercicio1(milton));

const exercicio2 = idade => {
  let idadeEmDias = idade * 365;
  return idadeEmDias;
}
// console.log(exercicio2(70));

const exercicio3 = (horasTrabalhadas, valorPorHora) => {
  let salarioPorMes = horasTrabalhadas * valorPorHora;
  return `Salário igual a R$ ${salarioPorMes}`;
}
// console.log(exercicio3(150, 40.5));

const exercicio4 = (numeroDoMes) => {
  let meses = [null, 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  if (numeroDoMes < 1 || numeroDoMes > 12) {
    return console.error("Ensira um número de 1 a 12");
  } else {
    return meses[numeroDoMes];
  }
}
// console.log(exercicio4(12));

const exercicio5 = (a, b) => {
  if (typeof a != typeof b) return false
  return a >= b;
}
// console.log(exercicio5(5,1));

const exercicio6 = (valor) => {
  let tipoDoValor = typeof valor;
  if (tipoDoValor == "boolean") return !tipoDoValor;
  if (tipoDoValor == "number") return tipoDoValor * (-1);
  if (tipoDoValor != "number" || typeof tipoDoValor != "boolean") return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof tipoDoValor}`;
}
// console.log(exercicio6(5));
// console.log(exercicio6(true));

const exercicio7 = (numero, minimo, maximo, inclusivo = false) => {
  return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}
// console.log(exercicio7(3, 150, 3, true));

const exercicio8 = (a, b) => {
  let resultado = 0
  for (let i = 0; i < b; i++) {
    resultado += a;
  }
  return resultado;
}
// console.log(exercicio8(5,5)); // => Varias resoluções por meio da recursividade 


const exercicio9 = (looping, contador) => {
  // let arr = [];
  // for (let i = 0; i < contador; i++) {
  //   arr.push(looping);
  // }
  // return arr;

  return Array(contador).fill(looping);
}
// console.log(exercicio9('código', 5));

const exercicio10 = (numero) => {
  let str = "";
  if (numero == 0) return str;

  for (let i = 0; i < numero; i++) {
    str += "+";
  }

  return str;
}
// console.log(exercicio10(5));

const exercicio11 = (arr) => {
  let primeiroElemento = arr[0];
  let ultimoElemento = arr[arr.length - 1];
  return [primeiroElemento, ultimoElemento];
}
// console.log(exercicio11([-100, 2, "alo miltin"]));

const exercicio12 = (obj, prop) => {
  const copiaObj = { ...obj };
  delete copiaObj[prop];
  return copiaObj
}
// var obj = {
//   nome: 'Miltinho',
//   idade: 25,
//   altura: 1.70
// }
// console.log(exercicio12(obj, 'idade'));
// console.log(Object.is(exercicio12(obj, 'altura'), obj));

const exercicio13 = arr => {
  // return arr.filter(elemento => typeof elemento === "number");
  return arr.filter(elemento => { if (typeof elemento === "number") return elemento });
}
// console.log(exercicio13(["milton", "sara", 2, "12", true, 4, 6]));

const exercicio14 = (obj) => {
  let arr = Object.entries(obj);
  return arr;
}
// console.log(exercicio14({
//   nome: 'Milton',
//   idade: 25,
//   altura: 1.7
// }));

const exercicio15 = (arr) => {
  return arr.filter((element, index) => {
    let elementoPar = element % 2 === 0;
    let indicePar = index % 2 === 0;

    if (elementoPar && indicePar) return [elementoPar, indicePar];
  })
}
// console.log(exercicio15([1, 2, 3, 4]));

const exercicio16 = (ano) => {
  if (ano % 100 == 0 || ano % 4 != 0) return false

  if (ano % 100 == 0 && ano % 400 == 0 || ano % 4 == 0) return true
}
// console.log(exercicio16(2100));

const exercicio17 = (arr) => {
  return arr.reduce((a, b) => a + b);
}
// console.log(exercicio17([10, 50, 10]));

const exercicio18 = (produtos) => {
  return produtos.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0);
}
// const produtos = [
//   {
//     nome: 'Produto 1', categoria: 'Categoria 1', preco: 50.00
//   },

//   {
//     nome: 'Produto 2', categoria: 'Categoria 2', preco: 25.00
//   },

//   {
//     nome: 'Produto 3', categoria: 'Categoria 3', preco: 35.00
//   }
// ]

// console.log(exercicio18(produtos));

const exercicio19 = (arr) => {
  let numeroDeValores = arr.length;
  let somaDosValores = arr.reduce((acumulador, valorAtual) => acumulador + valorAtual);
  return somaDosValores / numeroDeValores;
}
// console.log(exercicio19([1, 2, 3, 4, 5]));

const exercicio20 = (baseDoTriangulo, alturaDoTriangulo) => {
  const areaDoTriangulo = (baseDoTriangulo * alturaDoTriangulo) / 2;
  return areaDoTriangulo;
}
// console.log(exercicio20(7, 9))

const exercicio21 = (arr) => {
  return Math.min(...arr);
}
// console.log(exercicio21([-10, 2, 3, -400]))

const exercicio22 = (numero) => {
  if (numero > 10 || numero < 1) return "Por favor, Insira um número de 1 a 10";

  let numeroAleatorio = (Math.random() * 10).toFixed();
  return numero == numeroAleatorio ? `Parabéns! O número sorteado foi ${numeroAleatorio}` : `Que pena! O Número sorteado foi ${numeroAleatorio}`;
}
// console.log(exercicio22(5));


const exercicio23 = (str) => {
  const numeroDePalavras = str.split(' ');
  return numeroDePalavras.length;
}
// console.log(exercicio23('Milton Ant'))

const exercicio24 = (caractere, str) => {
  // let contador = 0;
  // for (let i = 0; i < str.length; i++) {
  //   if (str.charAt(i) === caractere) contador++
  // }
  // return contador;

  return [...str].filter(char => char === caractere).length;
}
// console.log(exercicio24("F", "Eu sou uma FFFFrase"))

const exercicio25 = (palavraBuscada, arrayComPalavrasASeremBuscadas) => {

  // const resultado = []
  // for (let palavra of palavras)
  //   if (palavra.includes(inicio))
  //     resultado.push(palavra)
  // return resultado

  return arrayComPalavrasASeremBuscadas.filter(palavra => palavra.includes(palavraBuscada));

}
// const palavraBuscada = "pro";
// const arrayComPalavrasASeremBuscadas = ['programação', 'mobile', 'profissional'];
// console.log(exercicio25(palavraBuscada, arrayComPalavrasASeremBuscadas));

const exercicio26 = (str) => {
  const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  vogais.forEach(vogal => str = str.replace(vogal, ''))
  return str
}

// console.log(exercicio26('Cod3r'))

const exercicio27 = (obj) => {

  const pairValuesAndKeysReversed = Object.entries(obj);
  pairValuesAndKeysReversed.map(pairValueAndKey => {
    pairValueAndKey.reverse();
  })

  return Object.fromEntries(pairValuesAndKeysReversed);
}

// const obje = {
//   nome: 'Miltinho',
//   idade: 25,
//   altura: 1.7
// }
// console.log(exercicio27(obje));

const exercicio28 = (numeros, quantidade) => {
  return numeros.filter(numero => {
    const quantidadeDeDigitos = String(numero).length;

    return quantidadeDeDigitos === quantidade;
  })
}

// console.log(exercicio28([1, 2, 3, 40, 25, 1, 300], 2));

function exercicio29(numeros) {
  const maxNumber = () => Math.max(...numeros);
  const indexOfMaxNumber = numeros.findIndex(number => number == maxNumber());

  numeros.splice(indexOfMaxNumber, 1);
  return maxNumber();
}

// const exercicio29 = (numeros) => {
//   const maxNumber = Math.max(...numeros);
//   const newArr = numeros.filter(number => number != maxNumber);
//   return Math.max(...newArr);
// }

// const numeros = [10, 2, 3, 18, 55, 25, 4, 5, 6, 110, 1500, 122, 23, -500000, 2561];
// console.log(exercicio29(numeros));

const notasDosEstudantes = {
  Milton: [10, 8, 7, 6.5],
  Sara: [8.5, 9.0, 10, 9.5],
  Joao: [7.5, 8.5, 10, 10],
  Maria: [3.5, 5.5, 8, 4.5]
}

const soma = arr => arr.reduce((a, b) => a + b, 0);
const media = arr => soma(arr) / arr.length;

function exercicio30(notasDosEstudantes) {
  const mediasDosEstudantes = Object.entries(notasDosEstudantes);
  const objetoDosEstudantesComAsMedias = mediasDosEstudantes.map(estudante => {
    const key = 0, value = 1

    return { nome: estudante[key], media: media(estudante[value]) }
  })

  const constOrdenarArrayDeEstudantesComMedias = objetoDosEstudantesComAsMedias.sort((estudanteA, estudanteB) => {
    return estudanteB.media - estudanteA.media
  })

  const estudanteComMelhorNota = constOrdenarArrayDeEstudantesComMedias[0]

  return estudanteComMelhorNota;
}
// console.log(exercicio30(notasDosEstudantes));
