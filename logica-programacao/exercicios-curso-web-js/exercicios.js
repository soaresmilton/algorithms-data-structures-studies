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

//  console.log(exercicio1("Mundo"));
// console.log(exercicio2(70));
// console.log(exercicio3(150, 40.5));
// console.log(exercicio4(12));
// console.log(exercicio5(5,1));
// console.log(exercicio6(5));
// console.log(exercicio6(true));
// console.log(exercicio7(3, 150, 3, true));
console.log(exercicio8(5,5));