class Node {
  constructor(char, freq, left = null, right = null) {
    this.char = char;
    this.freq = freq;
    this.left = left;
    this.right = right;
  }
}

function buildTree(freqMap) {
  const nodes = Object.entries(freqMap).map(
    ([char, freq]) => new Node(char, freq)
  );

  while (nodes.length > 1) {
    nodes.sort((a, b) => a.freq - b.freq);
    const left = nodes.shift();
    const right = nodes.shift();
    const parent = new Node(null, left.freq + right.freq, left, right);
    nodes.push(parent);
  }

  return nodes[0];
}

function generateCodes(node, prefix = '', codes = {}) {
  if (node.char !== null) {
    codes[node.char] = prefix;
  } else {
    generateCodes(node.left, prefix + '0', codes);
    generateCodes(node.right, prefix + '1', codes);
  }
  return codes;
}

module.exports = { Node, buildTree, generateCodes };
