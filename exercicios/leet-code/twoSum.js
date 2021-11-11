/* 
as chaves da hashTable == complemento
 
os valores da hashTable == índice do elemento que complementa o valor do target retirado do array principal
*/


const twoSum = (nums, target) => {
  let hashTable = new Map();
  let complement;

  nums.forEach((item, i) => {
    hashTable.set(item, i)
  })

  for (let i in nums) {
    complement = target - nums[i];

    if (hashTable.has(complement) && i != hashTable.get(complement)) {
      return [Number(i), hashTable.get(complement)]
    }
  }
}


const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));