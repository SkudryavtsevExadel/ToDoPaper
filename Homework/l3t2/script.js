/*
Task:
Implement a function with two string arguments, which returns true if the given strings are anagrams, and
false otherwise. Anagrams are the strings, which consist of the same symbols, but perhaps in a different
order. For example ‘melon’ and ‘lemon’ are anagrams, but ‘ball’ and ‘lab’ - no, because they have different
amounts of letter ‘l’
Anagrams:
string1 = 'the eyes'
string2 = 'Built to stay free'

Not anagrams:
string1 = 'the eye'
string2 = 'Built to stay free'

Rewrite you last homework (correcting it according to my comments) using ES-2015 (as much as you can).
No more vars, anonymous functions. Use string templates and destructuring.

*/

let string1 = "tHe eYeS";
let string2 = "they sEe";

let sort = function(str) {
  return str.replace(/\s+/g,'').toLowerCase().split('').sort().join('');
}

let isAnagram = function(original, test) {
  return original.trim() === test.trim() ? false : sort(original) === sort(test);
}

console.log(isAnagram(string1,string2)); // true