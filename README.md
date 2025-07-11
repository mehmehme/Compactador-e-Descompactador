# 🐸 Compactador de Texto com Árvore Binária – JavaScript Style

![Frog Coding](https://media.tenor.com/YUzRkMOL-3EAAAAM/programming-computer-frog.gif)

Esse projeto é uma experiência maneira de como a gente pode usar estruturas de dados (tipo árvore binária) pra criar um **compactador e descompactador de texto**, que transforma arquivos `.txt` em `.json` e depois volta com o conteúdo original, só que usando lógica de compressão estilo Huffman! 🧠💾

---

## 📁 Estrutura dos Arquivos

- `input.txt`: o texto que será compactado
- `arvore.js`: contém a estrutura da árvore binária e a lógica de geração de códigos
- `compactar.js`: lê o `input.txt`, monta a árvore e gera o `compactado.json`
- `compactado.json`: contém o texto codificado e o dicionário de códigos
- `descompactar.js`: usa o JSON pra reconstruir o texto original
- `descompactado.txt`: o texto restaurado com sucesso!

---

## 🚀 Como rodar esse projeto

### 1. 📦 Instale o Node.js

Se ainda não tiver instalado, baixa a versão LTS do site:

👉 [https://nodejs.org](https://nodejs.org)

Durante a instalação, **marca a opção "Add to PATH"**.

---

### 2. 🧪 Teste se está tudo ok

Abre o terminal (CMD ou VS Code) e digita:

```bash
node -v
npm -v
```
Se aparecer as versões, tá show!

3. 🔨 Clona o projeto ou cria a estrutura assim:
```css
📁 Compactador/
├─ 📄 input.txt
├─ 📄 arvore.js
├─ 📄 compactar.js
├─ 📄 descompactar.js
```
📌 Pode copiar os códigos dos arquivos no corpo do repositório (ou me pedir que te mando tudo compactado).

🧠 Como funciona?
Etapa 1: Compactar
```bash
node compactar.js
```
Isso vai gerar um arquivo compactado.json com o seguinte:

```json
{
  "encoded": "0110100101...",
  "codes": {
    "a": "00",
    "b": "01",
    ...
  }
}
```
Etapa 2: Descompactar
```bash
node descompactar.js
```
Isso lê o JSON e gera um descompactado.txt com o texto original restaurado com sucesso!

📌 Observações
A árvore binária usada é baseada na frequência dos caracteres (igual Huffman).

Esse projeto não usa bibliotecas externas — só Node puro! 🚫📦

Ideal pra quem quer aprender compressão, estruturas de dados e manipulação de arquivos em JS.

Pode ser usado como base pra compactação de arquivos maiores, com ajustes.

💡 Melhorias futuras?
Transformar os bits em binário real (usando buffers)

Suporte a leitura de arquivos binários

UI com Electron? Por que não? 👀

🧑‍💻 Autora
Elisa Nascimento ✨
Estudante de Análise e Desenvolvimento de Sistemas
