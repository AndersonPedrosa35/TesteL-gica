// Desafio 1
function compareTrue(boo1, boo2) {
  if (boo1 === true && boo2 === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  return Math.max(...array);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1; // 2
  let distanciaCat2 = mouse - cat2; // -6
  if (Math.abs(distanciaCat1) < Math.abs(distanciaCat2)) {
    return 'cat1';
  }
  if (Math.abs(distanciaCat2) < Math.abs(distanciaCat1)) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8

function fizzBuzz(array) {
  let arrayIndx = [];
  array.forEach((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return arrayIndx.push('fizzBuzz');
    }
    if (number % 3 === 0) {
      return arrayIndx.push('fizz');
    }
    if (number % 5 === 0) {
      return arrayIndx.push('buzz');
    }
    return arrayIndx.push('bug');
  });
  return arrayIndx;
}

// Desafio 9
function encode(string) {
  let array = ' ';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      array[index] += '1';
    } else if (string[index] === 'e') {
      array[index] += '2';
    } else if (string[index] === 'i') {
      array[index] += '3';
    } else if (string[index] === 'o') {
      array[index] += '4';
    } else if (string[index] === 'u') {
      array[index] += '5';
    } else {
      array[index] += string[index];
    }
  } return array;
} console.log(encode('hi there'));

function decode(string) {
  let array = '';
  array = string.replace('a', '1');
  array = string.replace('e', '2');
  array = string.replace('i', '3');
  array = string.replace('o', '4');
  array = string.replace('u', '5');
  return array;
}
console.log(decode('hi there'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
