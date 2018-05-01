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

*/

var string1 = 'tHe eYeS';
var string2 = 'they sEe';

var sort = function(str) {
  return str.replace(/\s+/g,'').toLowerCase().split('').sort().join('');
}

var isAnagram = function(original, test) {
  return original.trim() === test.trim() ? false : sort(original) === sort(test);
}

console.log(isAnagram(string1,string2)); // true