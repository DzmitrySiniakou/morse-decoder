const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' '
};

function decode(expr) {
    let letterArr = expr.split('');
    let stringFinal = '';
    while (letterArr.length > 0){
        stringFinal += myFun(letterArr.splice(0,10));
    } 
    return stringFinal;
}
function myFun(dotArr) {
    let letter = '';
    for(let i=0; i<10; i += 2){
        if (dotArr[i] == '0' && dotArr[i+1] == '0') letter += '';
        if (dotArr[i] == '1' && dotArr[i+1] == '1') letter += '-';
        if (dotArr[i] == '1' && dotArr[i+1] == '0') letter += '.';
        if (dotArr[i] == '*') return ' ';
    }
    return MORSE_TABLE[letter];
}

module.exports = {
    decode
}