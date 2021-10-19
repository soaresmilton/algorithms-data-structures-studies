const proposicaoNao = A => !A ? false : true;

const propisicaoE = (A, B) => A && B ? true : false;

const proposicaoOU = (A, B) => A || B  ? true : false;

console.log(proposicaoNao(true));
console.log(propisicaoE(true, false));
console.log(proposicaoOU(true, true));
