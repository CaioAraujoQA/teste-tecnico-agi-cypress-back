# Automação de Testes Back-End - Dog API

Este projeto contém testes automatizados para a **Dog API**, garantindo que os endpoints estejam funcionando corretamente, retornando dados no formato esperado e validando cenários de sucesso e falha.

---

## Cenários de Teste

### Cenário 1 - Listar todas as raças de cães (CT001)

**Objetivo:**  
Validar que o endpoint retorna todas as raças de cães corretamente.

**Passos automatizados:**

1. Enviar requisição GET para `https://dog.ceo/api/breeds/list/all`  
2. Validar que o status HTTP seja `200`  
3. Validar que `response.body.status` seja `"success"`  
4. Validar que `message` seja um objeto  
5. Validar que `message` contenha a propriedade `"hound"`  

---

### Cenário 2 - Listar imagens de uma raça específica (CT002)

**Objetivo:**  
Validar que é possível obter imagens de uma raça específica de cachorro.

**Passos automatizados:**

1. Enviar requisição GET para `https://dog.ceo/api/breed/hound/images`  
2. Validar que o status HTTP seja `200`  
3. Validar que `response.body.status` seja `"success"`  
4. Validar que `message` seja um array  
5. Validar que o array tenha pelo menos 1 item  
6. Validar que o primeiro item do array contenha a string `"hound"`  

---

### Cenário 3 - Não retornar imagens para raça inválida (CT003)

**Objetivo:**  
Validar que o endpoint retorna erro ao solicitar imagens de uma raça inexistente.

**Passos automatizados:**

1. Enviar requisição GET para `https://dog.ceo/api/breed/racaInexistente/images`  
2. Validar que o status HTTP seja `404`  

---

### Cenário 4 - Retornar uma imagem aleatória de cachorro (CT004)

**Objetivo:**  
Validar que é possível obter uma imagem aleatória de cachorro.

**Passos automatizados:**

1. Enviar requisição GET para `https://dog.ceo/api/breeds/image/random`  
2. Validar que o status HTTP seja `200`  
3. Validar que `response.body.status` seja `"success"`  
4. Validar que `message` seja uma string  
5. Validar que a URL do `message` contenha `"images.dog.ceo"`  

---

### Cenário 5 - Validar o contrato da resposta da API (CT005)

**Objetivo:**  
Garantir que a resposta da API está conforme o contrato esperado.

**Passos automatizados:**

1. Enviar requisição GET para `https://dog.ceo/api/breeds/image/random`  
2. Validar que o status HTTP seja `200`  
3. Validar que `body` possua apenas as chaves `message` e `status`  
4. Validar que `message` seja uma string  
5. Validar que `status` seja `"success"`  

---

## Pré-requisitos

- Node.js (preferencialmente versão LTS)  
- npm (gerenciador de pacotes do Node.js)  
- Cypress (instalado localmente no projeto)  
- VSCode (ou outro editor de código)  
- Yarn (opcional, caso queira usar CI/CD ou GitHub Actions)  

---

## 1 - Instale Node.js

Acesse o site: https://nodejs.org/pt  

Faça o download e execute o instalador.  
Após a instalação, reinicie o computador.  
Quando o sistema reiniciar, siga para o próximo passo.  

---

## 2 - Instale o VSCode

No navegador digite `vscode download` ou acesse o link: https://code.visualstudio.com/download  

Após baixar, execute o instalador.  

Entre na pasta do projeto, clique com o botão direito do mouse e selecione **Abrir no Terminal**  

Digite o comando:  code . e pressione Enter.  

---

## 3 - Instalação das Dependências

Com o VSCode aberto dentro do projeto:  

1. Clique em **Terminal** → **New Terminal**  
2. No terminal que abriu, digite:  npm install
> Esse comando instalará todas as dependências listadas no `package.json`, incluindo Cypress, Mochawesome e plugins necessários.

---

## 4 - Executar os Testes

### 4.1 Abrir Cypress Test Runner (modo visual)

npx cypress open


> Esse comando abrirá o **Cypress Test Runner**, onde você poderá selecionar e executar os testes individualmente ou em conjunto abrindo o navegador.

### 4.2 Executar testes em modo headless e gerar relatório

npm run test


> Este comando executa todos os testes automaticamente e gera relatórios Mochawesome em:  cypress/reports/report.html
cypress/reports/report.json


---

## 5 - Abrindo o relatório

**Opção 1 – Live Server (recomendado)**  

1. Instale a extensão **Live Server** no VSCode  
2. Clique com o botão direito em `report.html` → **Open with Live Server**  

**Opção 2 – Preview interno**  

1. Clique com o botão direito em `report.html` → **Open Preview** (`Ctrl+Shift+V`)  

**Opção 3 – Terminal integrado**  

Windows

start cypress\reports\report.html

Mac

open cypress/reports/report.html

Linux

xdg-open cypress/reports/report.html


---

## 6 - Execução automática no GitHub Actions

Este projeto possui execução automática de testes configurada no **GitHub Actions**.  

Sempre que há alterações no repositório, o pipeline executa automaticamente os testes Cypress.  

Para visualizar a execução:  

1. Acesse o repositório no GitHub  
2. Clique na aba **Actions**  
3. Selecione o workflow chamado **Cypress Tests**  
4. Abra a execução mais recente para visualizar os passos do pipeline:  
   - Instalação das dependências  
   - Execução dos testes Cypress  
   - Status final da execução (sucesso ou falha)  

> Assim é possível acompanhar a execução dos testes diretamente pelo GitHub, sem precisar rodar localmente.

---

## 7 - Observações

- Todos os testes tiram **screenshots automáticas** após execução (`afterEach`)  
- A pasta `cypress/reports` pode ser limpa antes de rodar os testes para gerar relatórios do zero  
- O relatório HTML permite verificar facilmente falhas e sucessos, incluindo cenários negativos como CT003  
- É possível integrar o projeto em **GitHub Actions** usando `yarn test` ou `npm run test`  
