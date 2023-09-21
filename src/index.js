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
};

function decode(expr) {
    let count = expr.length / 10;
    let result ="";
    let letter_numb;
    let delete_zero="";
    let sybmols="";
    let small_numb="";
    let decode;
    let fr=0;
    let unt=10;
    for(i = 0; i < count; i++) {
        letter_numb = expr.slice(fr, unt);
        delete_zero="";
        sybmols="";
        small_numb="";
    if (letter_numb == "**********"){result += " ";
fr +=10; unt+=10;} else {
        for(j = 0; j < letter_numb.length; j++) {
            if ((letter_numb[j] == 1) || (letter_numb[j - 1] == 1))  {
                delete_zero += letter_numb[j]}
            }
        decode = delete_zero;
        for (d = 0; d < delete_zero.length; d++) {
            small_numb = decode[0] + decode[1];
            decode = decode.slice(2);
            if (small_numb == "10") {sybmols += "."} else if (small_numb == "11") {sybmols += "-"};
        }
        result += MORSE_TABLE[sybmols];
        fr +=10;
        unt +=10;
        }
    }
        return result;
    }


module.exports = {
    decode
}