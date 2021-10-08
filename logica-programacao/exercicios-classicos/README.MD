# Exercícios Clássicos de Lógica de Programação

Esta é uma lista de exercícios preparatórios para entrevistas de emprego, cujo intuito é avaliar as habilidades técnicas de lógica de programação e estrutura de dados dos participantes. 

O objetivo principal desse repositório é armazenar exercícios encontrados principalmente em [freeCodeCamp](https://www.freecodecamp.org/learn/coding-interview-prep/) e [HackerRank](https://www.hackerrank.com/dashboard), mostrando minhas soluções para tais problemas.

Dentre os exercícios, temos níveis de dificuldade variados, abordando exercícios fáceis, médios e difíceis.

## LISTA DE EXERCÍCIOS

### Ex. 1

Dado um número *n* encontre seu fatorial. [Resolução](factorial.js)

---

### Ex. 2

The mathematical term *symmetric difference* (`△` or `⊕`) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets `A = {1, 2, 3}` and `B = {2, 3, 4}`, `A △ B = {1, 4}`.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among *three* elements (`A △ B △ C`), you must complete one operation at a time. Thus, for sets `A` and `B` above, and `C = {2, 3}`, `A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}`.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (*no duplicates*).

[Resolução](symmetricDifference.js)

---

### Ex. 3

You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.

[Resolução](sumOfTwo.js)

---

### Ex. 4

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

[Resolução](inventoryUpdate.js)

---

### Ex. 5
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

[Resolução](noRepeatsPlease.js)

---