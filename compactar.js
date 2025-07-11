const fs = require('fs');
const { buildTree, generateCodes } = require('./arvore');

const inputText = fs.readFileSync('input.txt', 'utf8');

// Conta a frequência dos caracteres
const freqMap = {};
for (const char of inputText) {
  freqMap[char] = (freqMap[char] || 0) + 1;
}

// Cria a árvore e os códigos
const root = buildTree(freqMap);
const codes = generateCodes(root);

// Codifica o texto
let encoded = '';
for (const char of inputText) {
  encoded += codes[char];
}

// Salva em JSON com o código binário e o dicionário
const json = {
  encoded,
  codes,
};

fs.writeFileSync('compactado.json', JSON.stringify(json, null, 2));
console.log('Texto compactado salvo em compactado.json');
