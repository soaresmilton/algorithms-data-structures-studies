const exercicio1 = nome => `Olá, ${nome}!`;

const exercicio2 = idade => {
  let idadeEmDias = idade * 365;
  return idadeEmDias;
}

const exercicio3 = (horasTrabalhadas, valorPorHora) => {
  let salarioPorMes = horasTrabalhadas * valorPorHora;
  return `Salário igual a R$ ${salarioPorMes}`;
}

const exercicio4 = (numeroDoMes) => {
  let meses = [null, 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  if (numeroDoMes < 1 || numeroDoMes > 12) {
    return console.error("Ensira um número de 1 a 12");
  } else {
    return meses[numeroDoMes];
  }
}

const exercicio5 = (a, b) => {
  if (typeof a != typeof b) return false
  return a >= b;
}

const exercicio6 = (valor) => {
  let tipoDoValor = typeof valor;
  if (tipoDoValor == "boolean") return !tipoDoValor;
  if (tipoDoValor == "number") return tipoDoValor * (-1);
  if (tipoDoValor != "number" || typeof tipoDoValor != "boolean") return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof tipoDoValor}`;
}

const exercicio7 = (numero, minimo, maximo, inclusivo = false) => {
  return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}

const exercicio8 = (a, b) => {
  let resultado = 0
  for (let i = 0; i < b; i++) {
    resultado += a;
  }
  return resultado;
}

const exercicio9 = (looping, contador) => {
  // let arr = [];
  // for (let i = 0; i < contador; i++) {
  //   arr.push(looping);
  // }
  // return arr;

  return Array(contador).fill(looping);
}

const exercicio10 = (numero) => {
  let str = "";
  if (numero == 0) return str;

  for (let i = 0; i < numero; i++) {
    str += "+";
  }

  return str;
}

const exercicio11 = (arr) => {
  let primeiroElemento = arr[0];
  let ultimoElemento = arr[arr.length - 1];
  return [primeiroElemento, ultimoElemento];
}

const exercicio12 = (obj, prop) => {
  const copiaObj = { ...obj };
  delete copiaObj[prop];
  return copiaObj
}

const exercicio13 = arr => {
  // return arr.filter(elemento => typeof elemento === "number");
  return arr.filter(elemento => { if (typeof elemento === "number") return elemento });

}

const exercicio14 = (obj) => {
  let arr = Object.entries(obj);
  return arr;
}

const exercicio15 = (arr) => {
  return arr.filter((element, index) => {
    let elementoPar = element % 2 === 0;
    let indicePar = index % 2 === 0;

    if (elementoPar && indicePar) return [elementoPar, indicePar];
  })
}

const exercicio16 = (ano) => {
  if (ano % 100 == 0 || ano % 4 != 0) return false

  if (ano % 100 == 0 && ano % 400 == 0 || ano % 4 == 0) return true
}

const exercicio17 = (arr) => {
  return arr.reduce((a, b) => a + b);
}

const exercicio18 = (produtos) => {
  return produtos.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0);
}

const exercicio19 = (arr) => {
  let numeroDeValores = arr.length;
  let somaDosValores = arr.reduce((acumulador, valorAtual) => acumulador + valorAtual);
  return somaDosValores / numeroDeValores;
}

const exercicio20 = (baseDoTriangulo, alturaDoTriangulo) => {
  const areaDoTriangulo = (baseDoTriangulo * alturaDoTriangulo) / 2;
  return areaDoTriangulo;
}

const exercicio21 = (arr) => {
  return Math.min(...arr);
}

const exercicio22 = (numero) => {
  if (numero > 10 || numero < 1) return "Por favor, Insira um número de 1 a 10";
  
  let numeroAleatorio = (Math.random() * 10).toFixed();
  return numero == numeroAleatorio ? `Parabéns! O número sorteado foi ${numeroAleatorio}` : `Que pena! O Número sorteado foi ${numeroAleatorio}`;
}


const exercicio23 = (str) => {
  const numeroDePalavras = str.split(' ');
  return numeroDePalavras.length;
}

// const ecercicio24 = () => {
  
// }


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
// console.log(exercicio16(2100));
// console.log(exercicio17([10, 50, 10]));

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
// console.log(exercicio19([1, 2, 3, 4, 5]));
// console.log(exercicio20(7, 9))
// console.log(exercicio21([-10, 2, 3, -400]))
// console.log(exercicio22(5));
// console.log(exercicio23('Milton Ant'))
