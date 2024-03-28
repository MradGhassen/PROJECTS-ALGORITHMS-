// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

function removeBlanks(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c ")); // "PlayThatFunkyMusic"
console.log(removeBlanks("I can not BELIEVE it's not BUTTER")); // "IcannotBELIEVEit'snotBUTTER"

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

function getDigits(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            result += str[i];
        }
    }
    return Number(result);
}


console.log(getDigits("abc8c0d1ngd0j0!8")); // => 801008

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); // => 1357924680

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

function acronym(str) {
    return str.match(/\b(\w)/g).join('').toUpperCase()
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "));  // => "TNFL-GPYW". 

console.log(acronym("Live from New York, it's Saturday Night!")); // => "LFNYISN".

// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

function countNonSpaces(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            count++;
        }
    }
    return count;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy")); // => 29
console.log(countNonSpaces("Hello world !")); // => 11

// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

function shorterStrings(arr, length) {

    for (i = 1; i < arr.length; i++) {
        if (arr[i].length < length) {
            arr.pop(arr[i])
        }
    }
    return arr
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)); // => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)); // => ['There', 'bug', 'the', 'system']

