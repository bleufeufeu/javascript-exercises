const palindromes = function (string) {
    string = string.replace(/[,.?! ]/g, "").toLowerCase();
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        //console.log(string[string.length - i - 1].match(/[A-Za-z]/g) !== null);
            newString += string[string.length - i - 1].toLowerCase();
        
    }
    return string == newString;
};

// Do not edit below this line
module.exports = palindromes;
