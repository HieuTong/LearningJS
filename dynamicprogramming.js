
//dynamic programming

// function memoizedAddTo80() {
// 	let cache = {};
// 	return function(n) {
// 		if (n in cache) {
// 			return cache[n];
// 		} else {
// 			console.log('long time')
// 			cache[n] = n + 80;
// 			return cache[n]
// 		}
// 	}
// }


// const fib = (n, cache = {}) => {
//     if (n in cache) return cache[n];
//     if (n <= 2) return 1;
//     cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
//     return cache[n];
// }

// console.log(fib(5))

// const memorized = memoizedAddTo80()
// console.log('1', memorized(5))
// console.log('2', memorized(5))



// const wayToBottomRight = (n, m, cache = {}) => {
//     const key = m + ', ' + n
//     if (key in cache) {
//         return cache[key];
//     }
//     if (n === 0 || m === 0) return 0;
//     if (n === 1 && m === 1) return 1;
//     cache[key] = wayToBottomRight(n - 1, m) + wayToBottomRight(n, m - 1);
//     return cache[key];
// } 

// console.log(wayToBottomRight(2,3))

// const canSum = (targetSum, numbers, cache = {}) => {
//     if (targetSum in cache) return cache[targetSum];
//     if (targetSum === 0) return true;
//     if (targetSum < 0) return false;
    
//     for (let item of numbers) {
//         const remainder = targetSum - item;
//         if (canSum(remainder, numbers, cache) === true) {
//             cache[remainder] = true
//             return true;
//         }
//     }

//     cache[remainder] = false;
//     return false;
// };

// console.log(canSum(7, [1, 2, 3]));

// const howSum = (targetSum, numbers, cache = {}) => {
//     if (targetSum in cache) return cache[targetSum];
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     for (let item of numbers) {
//         const remainder = targetSum - item;
//         let remainderResult = howSum(remainder, numbers, cache);
//         if (remainderResult !== null) {
//             cache[targetSum] = [ ...remainderResult, item ]
//             return [ ...remainderResult, item ];    
//         }
//     }

//     cache[targetSum] = null
//     return null
// }

// console.log(howSum(300, [2, 6]));

// const bestSum = (targetSum, numbers, cache = {}) => {
//     if (targetSum in cache) return cache[targetSum];
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     for (let item of numbers) {
//         const remainder = targetSum - item;
//         let remainderResult = bestSum(remainder, numbers, cache);
//         if (remainderResult !== null) {
//             cache[targetSum] = [ ...remainderResult, item ]
//             return [ ...remainderResult, item ];    
//         }
//     }

//     cache[targetSum] = null
//     return null
// }

// console.log(bestSum(300, [2, 6]));

// const bestSumWithSortestCombination = (targetSum, numbers) => {
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     let shortestCombination = null;
//     for (let item of numbers) {
//         let remainder = targetSum - item;
//         let remainderResult = bestSumWithSortestCombination(remainder, numbers);
//         if (remainderResult !== null) {
//             let combinationResult = [...remainderResult, item];
//             if (shortestCombination === null || shortestCombination.length > combinationResult.length) {
//                 shortestCombination = combinationResult
//             }
//         }
//     }

//     return shortestCombination
// }

// console.log(bestSumWithSortestCombination(300, [25, 6]));

// const canContruct = (targetString, arrayString, cache = {}) => {
//     if (targetString in cache) return cache[targetString];
//     if (targetString === '') return true;

//     for (let word of arrayString) {
//         if (targetString.indexOf(word) === 0) {
//             const suffixString = targetString.slice(word.length);
//             if (canContruct(suffixString, arrayString, cache = {}) === true) {
//                 cache[targetString] = true
//                 return true;
//             }
//         }
//     }

//     cache[targetString] = false
//     return false;
// };

// console.log(canContruct("eeeeeeeeeeeeeeeeeeeeeeeeee", ["e", "ee", "eee"]))


// const countCanConstruct = (targetString, arrayString, cache = {}) => {
//     if (targetString in cache) return cache[targetString];
//     if (targetString === '') return 1;
    
//     let counter = 0

//     for (let word of arrayString) {
//         if (targetString.indexOf(word) === 0) {
//             const suffixString = targetString.slice(word.length);
//             const counterRest = countCanConstruct(suffixString, arrayString, cache);
//             counter += counterRest;
//         }
//     }

//     cache[targetString] = counter;
//     return counter;
// };

// console.log(countCanConstruct("abc", ["a", "bc", "c", "b"]))

// const allContruct = (targetString, arrayString, cache = {}) => {
//     if (targetString in cache) return cache[targetString];
//     if (targetString === '') return [[]];
//     let allContructString = [];

//     for (let word of arrayString) {
//         if (targetString.indexOf(word) === 0) {
//             const suffixString = targetString.slice(word.length);
//             const suffixResult = allContruct(suffixString, arrayString);
//             const result = suffixResult.map(item => [word, ...item]);
//             allContructString.push(...result);
//         }
//     }

//     cache[targetString] = allContructString;
//     return allContructString;
// };

// console.log(allContruct("abc", ["a", "bc", "b", "c"]))

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// https://leetcode.com/problems/house-robber/
// https://leetcode.com/problems/climbing-stairs/

