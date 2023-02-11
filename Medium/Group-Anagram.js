// Create a hash of how many times a letter shows up in a word
// Create a map that takes the hash as a key, and stores every word with that key as the value




var groupAnagrams = function(strs, map = new Map()) {
    if(!strs.length) return [];

    groupWords(strs,map);

    return [ ...map.values() ];

};

let groupWords = (strs, map) => {

    // iterate through the words in the array;
    for(const word of strs){
        const hash = getHash(word);
        const values = map.get(hash) || [];

        values.push(word);
        map.set(hash, values);
        // console.log(map)
    }
};

let getHash = (word) => {
    // Create an array representing every letter in the alphabet
    const freq = new Array(26).fill(0);
    // console.log(freq, "First")

    for(const char of word){
        const charCode = getCode(char);
        console.log(char.charCodeAt(0) - 'a'.charCodeAt(0));

        freq[charCode]++;
        // console.log(freq, "second");
    }

    return buildHash(freq);
}

const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);
const buildHash = (freq) => freq.toString();
