# Algorithms and Data Strucutre

Esse repositório tem como objetivo armazenar meu progresso nos estudos de Lógica de programação, Algoritmos e Estrutura de Dados.

Aqui, irei concentrar todos os tópicos que tenho estudado, incluindo partes teóricas, links para referências, resolução de exercícios, entre outros aspectos que irei desenvolvendo conforme minha evolução nos estudos.

De forma geral, a intenção é criar um local seguro e robusto de informações, organizadas a respeito do tema e propiciar um ambiente de estudos para qualquer um que se interesse.

Confira esse [repositorio](https://github.com/trekhleb/javascript-algorithms/blob/master/README.pt-BR.md) para um estudo mais detalhado a respeito de **Algoritmos e Estrutura de Dados**.

## Algorithms

### O que é algoritmo?

Em matemática e ciência da computação, um algoritmo é uma sequência finita de ações executáveis que visam obter uma solução para um determinado tipo de problema. Segundo Dasgupta, Papadimitriou e Vazirani; "Algoritmos são procedimentos precisos, não ambíguos, padronizados, eficientes e corretos.".[3]

As suas características são: finitas, o algoritmo deve eventualmente resolver o problema; bem definidas: os passos devem ser definidos de modo a serem entendidos; efetivas, deve sempre resolver o que tem para solucionar, antecipando falhas. [Wikipedia](https://pt.wikipedia.org/wiki/Algoritmo)

Exemplo:
*ALGORITMO PARA MONTAR UM SANDUÍCHE COM REQUEIJÃO E PRESUNTO*

1. Pegue duas fatias de pão 
2. Pegue o pote de requeijão
3. Pegue o presunto em fatias
4. Pegue uma faca
5. Abra o pote de requeijão
5. Com a faca pegue um pouco de requeijão, dentro do pote de requeijão.
6. Passe a faca com requeijão em uma fatia do pão, de modo a espalhar o requeijão por toda a fatia
7. Com a faca, pegue mais um pouco de requeijão
8. Passe a faca com requeijão na outra fatia do pão, que não tem requeijão. 
9. Espalhe o requeijão de modo a cobrir toda a superfície da fatia de pão.
10. Pegue uma fatia de presunto
11. Dobre a fatia de presunto na metade
12. coloque a fatia de presunto em cima de umas da fatia de pão, com a superfície preenchida de requeijão.
13. Junte as duas fatias de pão, de modo que o presunto fique entre as superfícies com requeijão
14. Morda o pão de requeijão e presunto

*ALGORITMO PARA ESCOVAR OS DENTES*

1. Ir ao banheiro
2. Ir até a pia do banheiro
3. Pegar a escova de dentes dentro do suporte para escova de dentes
4. Pegar o tubo pasta de dente
5. Abrir o tubo da pasta de dente
6. Passar pasta de dente na superfície das sardas da escova
7. Fechar o tubo de pasta de dente
8. Abrir a torneira da pia do banheiro
9. Molhar por 0.5s a pasta de dente que está sob as sardas da escova de dentes
10. Levar a escova de dentes do lado das sardas até a boca
11. Esfregar as sardas com pasta de dente nos dentes em movimentos circuláres
12. Passar as sardas em todos os dentes na parte dianteira dos dentes
13. Cuspir o excesso de espuma da boca dentro da pia do banheiro
14. Levar a pasta de dente com o lado das sardas de volta a boca
15. Esfregar a parte traseira de todos os dentes com as sardas da escova de dente
16. Cuspir o excesso de espuma
17. Voltar a escova de dentes com o lado da sarda de volta a boca
18. Escovar a linha com as sardas da escova de dente
19. Cuspir novamente o excesso de espuma
20. Abrir a torneira da pia do banheiro
21. Com as mãos coloque agua da torneira na boca, até encher
22. Faça um bucheco com a água
23. Cuspa a agua na pia do banheiro
24. Passe agua na escova de dentes até limpar completamente a escova e as sardas
25. Desligue a torneira
26. Com uma toalha seque a boca e a escova de dente
27. Guarde a escova de dentes no suporte para escova de dentes
## Lógica de programação
Lógica de programação é a técnica de encadear pensamentos para atingir determinado objetivo. Estes pensamentos, podem ser descritos como uma sequência de instruções, que devem ser seguidas para se cumprir uma determinada tarefa. Sequência Lógica são passos executados até atingir um objetivo ou solução de um problema. ⇒ Algoritmos.

De forma complementar aos algoritmos, existe a lógica de programação, que é o conceito prático e técnico aplicado para montar os Algoritmos específicos para um computador executar uma determinada função que resolverá determinado problema.
## Lógica proposicional

```jsx
const proposicaoNao = A => !A ? false : true;

const propisicaoE = (A, B) => A && B ? true : false;

const proposicaoOU = (A, B) => A || B  ? true : false;

console.log(proposicaoNao(true));
console.log(propisicaoE(true, false));
console.log(proposicaoOU(true, true));
```


---
# Estrutura de dados
**O que são estrutura de dados?**

Estrutura de Dados é a forma como nós organizamos os dados. 

Existem diversas estruturas de dados utilizadas na programação, as quatro principais são: 
**Listas** e suas variações (filas, pilhas, deques, listas circulares…), **Árvores** e suas variações (binárias, binárias de busca, não binárias…), **Grafos**, **Tabelas Hash**, que são largamente utilizadas na implementação de aplicações. Exemplificando:

- **Listas**: Processos executados em um sistema operacional (fila); chamadas de funções num interpretador de código (pilha); cartas em um jogo de baralho (variação de deque).
- **Árvores**: Aplicativos de pesquisa com entrada constante de dados (Árvores binárias); algoritmos de compactação de dados.
- **Grafos**: Redes sociais; algoritmos de sugestão de conexões; algoritmos de cálculo de relacionamentos (professores, disciplinas); aplicações voltadas para distribuição de malha elétrica.
- **Tabelas Hash**: Algoritmos de movimentação de personagens em jogos; bancos de dados; implementação de compiladores

## Anotações importantes

Propriedades fundamentais das estruturas de dados:

- Armazenar dados
- Devolver dados com comandos ⇒ Buscar dados

### Arrays

Array ou vetor, é uma estrutura de dado clássica em qualquer linguagem de programação. O array, basicamente, é uma lista de dados, cujo valores são referenciados por um índice que inicia em 0 e termina em n, em que ***n = comprimento do array - 1***.

- Zero indexed:
    
    ```jsx
    let array = [1, 2, 3]
    console.log(array[0]) // => retorna 1, ou seja, nosso primeiro elemento do array
    console.log(array.length) // => retorna 3, ou seja, o tamanho do nosso array
    console.log(array.indexOf(3)) // => retorna 2, ou seja, o índice do nosso último item do array
    ```
    
- São mutáveis. Ou seja, podemos mudar seus valores arbitrariamente. Inclusive para outro tipo de dados que quisermos. No exemplo abaixo mudamos o valor do índice 1 do tipo *Number* para uma *String*.
    - Os métodos *push()* e *unshift()* possuem métodos contrários, ou seja, que removem os itens do final e do início de um array, eles são, respectivamente: *pop()* e *shift().* Única diferença entre esses dois últimos, com os outros dois primeiros, é que o pop e o shift, não permitem remover mais de um item simultaneamente.
    
    ```jsx
    array[1] = "Não será mais o número 2"
    console.log(array) // retorna [1, "Não será mais o número 2", 3]
    array.push(2); // Adiciona um item no final do Array
    console.log(array) // retorna [1, "Não será mais o número 2", 3, 2]
    array.unshift(0); // Adiciona um item no início do Array
    console.log(array) //retorna [0, 1, "Não será mais o número 2", 3, 2]
    ```
    
- Outra forma para realizar modificação de arrays é através do método splice(). Esse método recebe 2 parâmetros obrigatórios, e outros opcionais. `arr.splice(indiceDoElementoInicial, quantidadeDeElementosARemover, opcional1, opcional2, [...)`
    
    ```jsx
    let arr1 = [1, 2, 3, 4, 5];
    arr1.splice(1, 2);
    console.log(arr1); // RETORNA um novo array: [ 1, 4, 5 ]
    
    ```
    
    **Usando splice para substituir elementos:**
    
    ```jsx
    let arr1 = [1, 2, 3, 4, 5];
    arr1.splice(1, 2, "dois", "três");
    console.log(arr1); // RETORNA um novo array: [ 1, "dois", "tres", 4, 5]
    ```
    
- Outra função que podemos utilizar para manipular arrays é o *slice()*. De forma geral, o slice **cria um novo array extraindo os elementos de um array existente**. A função *slice* recebe dois parâmetros: O primeiro é o índice do elemento que começaremos a extração e o segundo é o índice em que a extração será interrompida. 
`array.slice(indiceDoElementoInicial, indiceDoElementoEmQueSeEncerraAExtracao)`
**OBS:** No caso do segundo parâmetro do slice, o elemento do índice em que será interrompido a extração, **NÃO** será removido. 
**OBS:** Ao contrário do splice(), *slice()* não modifica o array inicial. Ele cria uma cópia e extrai os elementos com base em seu índice no array principal.
Vejamos na prática:
    
    ```jsx
    let arr1 = [1, 2, 3, 4, 5];
    console.log(arr1.slice(1, 3)); // RETORNA o array com as extrações: [ 2, 3 ]
    console.log(arr1); // RETORNA o array inicial sem modificação: [ 1, 2, 3, 4, 5 ]
    ```
    
- **Spread operator:** é uma forma de fazermos referência ou copiar arrays e objetos, criando novas instâncias desses elementos em uma nova variável. Dessa forma, podemos fazer tratativas nesses elementos, sem alterar seus valores iniciais. Para utilizar o spread operator, basta usar ... antes do nome do array que desejamos copiar. Vejamos na prática:
    
    ```jsx
    const arr1 = [1, 2, 3, 4, 5];
    let arr2 = [...arr1];
    
    console.log(arr2) // RETORNA uma cópia do arr1: [ 1, 2, 3, 4, 5 ]
    ```
    
    Dessa forma, por exemplo, se quisermos aplicar o método *splice* nos elementos do arr1, porém, sem modificar seus valores, podemos usar o spread operator para criar uma nova instância do arr1 em uma nova variável, fazer as tratativas necessárias e ainda manter o arr1 inalterado.
    
    ```jsx
    const arr1 = [1, 2, 3, 4, 5];
    let arr2 = [...arr1];
    arr2.splice(1, 2)
    console.log(arr1); //RETORNA o arr1 inalterado: [ 1, 2, 3, 4, 5 ]
    console.log(arr2); //RETORNA o novo array alterado: [ 1, 4, 5 ]
    ```



**REFERÊNCIAS:**
- [freeCodeCamp - Basic of Data Structures with JS](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-data-structures)
- [Blog Cod3r](https://blog.cod3r.com.br/estruturas-de-dados/)

---
# Complexidade de tempo e espaço O(n)

---
## LISTA DE EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO
- Confira as resoluções de alguns exercícios que venho desenvolvendo [clicando aqui](exercicios)