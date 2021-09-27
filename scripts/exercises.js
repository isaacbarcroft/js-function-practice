(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
function max(num1, num2){
if (num1 > num2) {
  return num1;
}
else if (num2 > num1) {
return num2;
}
}

 function max(num1, num2) {
if (num1 > num2) {
  return num1;
}
else {
  return num2;
}
 }





  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
function maxOfThree(num1, num2, num3){
  return Math.max(num1, num2, num3);
}

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
return num1;
  }
  else if (num2 > num3) {
    return num2;
  }
  else {
    return num3;
  }
}



  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
function isVowel(str) {
  if (str.includes("a", "e", "i", "o", "u")) {
    return true;
  }
  else{
    return false;
  }
}

function isVowel(char) {
  if  (char ===  'a' || char ===  'e' || char ===  'i' || char ===  'o' || char ===  'u'){
  return true;
}
return false;
}

'aeiou'.includes(str);

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
  var consonants = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j',
    'k', 'l', 'm', 'n', 'p', 'q', 'r',
    's', 't', 'v', 'w', 'x', 'z'
  ];
  function rovarspraket(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        if (consonants.indexOf(str[i]) === -1) {
            result += str[i];
            continue;
        }
        result += str[i] + 'o' + str[i];
    }
    return result;
};

function rovarspraket(text) {
  text= text.toLowerCase().split("");  // splits into an array = 'fun' = ['f', 'u', 'n']
for(let i =0; i <text.length; i++){
  if ('bcdfghjklmnpqrstvwxy'.includes(text[i])){
text[i]= text[i] + 'o' + text[i]; // 'f' => 'fof'; ['fof', 'u', 'non']
  }
 }
return text.join(""); // array => string // 'fofunon' 
}



  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
  function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // sum = sum + arr[i];
  }
  return sum;
}


function multiply(numbers) {
	var total = 1; // 1 because multiplication 
	for (var i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
}
  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
function reverse(sen) {
return sen.split("").reverse().join("");
}


function reverse(str) { // happy
  const strArray= []; 

  for(let i = 0; i < str.length; i++){
    strArray.unshift(str[i]);
  }
  return strArray.join(''); 
}

  // ---------------------

  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  function findLongestWord(str) {
   
    let maxLength = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i].length > maxLength) { // if greater than length, then update 'length' value 
        maxLength = str[i].length;
      }
    }
    return maxLength;
  }
  



  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
function filterLongWords(array, i ) {
  var newArray = [];
    array.forEach(function (word) {
        if( word.length > i ) { newArray.push(word)};
    });
    return newArray;
}

function filterLongWords(array, i) {
const longWordsArr = [];
for(let j = 0; j < arr.length; j++) {
  if(arr[j].length > i) {
    longWordsArr.push(arr[j]); // adds longer words into the array
  }
}
return longWordsArr;
}
  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
function charFreq(str) {
 var freq = {};
for (var i=0; i<str.length;i++) {
    var character = str.charAt(i);
    if (freq[character]) {
       freq[character]++;
    } else {
       freq[character] = 1;
    }
}

return freq;
}

function charFreq(str) {
const freqList = {};
for (let i =0; i < str.lngth; i++){
  let testCase = str[i];
  if(freqList[testCase]){
    freqList[testCase] = freqList[testCase] + 1; 
    //freqList[testCase]++;
  }
  else {
    freqList[testCase] = 1;
  }
}
return freqList;
}

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
