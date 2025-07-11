const fs = require('fs');

const json = JSON.parse(fs.readFileSync('compactado.json', 'utf8'));
const { encoded, codes } = json;

// Inverte o dicionário
const reverseCodes = Object.fromEntries(
  Object.entries(codes).map(([k, v]) => [v, k])
);

// Decodifica o binário
let buffer = '';
let decoded = '';
for (const bit of encoded) {
  buffer += bit;
  if (reverseCodes[buffer]) {
    decoded += reverseCodes[buffer];
    buffer = '';
  }
}

fs.writeFileSync('descompactado.txt', decoded);
console.log('Texto descompactado salvo em descompactado.txt');
