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
  const convertString = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  return string.replace(/[aeiou]+/g, (e) => convertString[e]);
}
console.log(encode('hi there'));

function decode(string) {
  const convertString = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return string.replace(/[12345]+/g, (e) => convertString[e]);
}
console.log(decode('h3 th2r2'));

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
