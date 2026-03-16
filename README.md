Pré-requisitos

- Node.js (preferencialmente versão LTS)

- npm (gerenciador de pacotes do Node.js)

- Cypress (instalado localmente no projeto)


1 - Instale Node.js

Acesse o site https://nodejs.org/pt e faça o download, em seguida execute o arquivo baixado

Após a instalação reinicie o computador

Quando o sistema reiniciar


2 - Instale o Vscode

no navegador digite vscode download ou no link https://code.visualstudio.com/download

após baixar execute o arquivo para instalar.


Entre na pasta do projeto e clique com o direito do mouse e selecione 'Abrir no Terminal'

digite o comando code . e de um enter



3 - Instalação das Dependências

No vscode aberto dentro do projeto Clique em terminal no canto superior a esquerda e em seguida em new terminal

No terminal que abriu na parte inferior, digite o seguinte comando:

npm install cypress --save-dev

Após instalar digite o comando npm install 

Isso instalará todas as dependências listadas no arquivo package.json, incluindo o Cypress e plugins necessários.


4 - Configuração do SonarQube

Instalação do SonarQube:

Faça o download e instale o SonarQube localmente conforme as instruções do site oficial https://www.sonarsource.com/products/sonarqube/downloads/.

Inicie o SonarQube:

Navegue até o diretório de instalação do SonarQube e inicie o servidor usando o comando apropriado para o seu sistema operacional.
Exemplo: sonarqube-9.9.6.92038\bin\windows-x86-64

No local do arquivo StartSonar.bat, clique com o direito do mouse na pasta e selecione 'Abrir no Terminal'

digite StartSonar.bat no terminal e de um enter, isso ira subir o sonar na maquina local

4.1

Acessando o SonarQube

Abra seu navegador e acesse http://localhost:9000.

Faça login usando as credenciais padrão (usuário admin, senha admin)

Mude a senha de admin para admin2 da forma que está no projeto, no arquivo sonar-project.properties.


5 - Execute o projeto

Após instalar e configurar tudo entre no projeto com o vscode e abra o terminal, digite o comando 'npx cypress open' Isso abrirá o Cypress Test Runner, onde você pode selecionar e executar os testes individualmente ou em conjunto abrindo o navegador.

Para gerar relatorios e rodar em modo headless execute o comando no terminal do vscode 'npm run cy:run' e de um enter

Este comando limpa os relatórios existentes, executa os testes especificados no arquivo e gera relatórios usando Mochawesome.

e por ultimo

com o servidor do sonaqube local iniciado conforme o passo 4.1, Execute depois o comando 'npm run sonar' gerar o relatorio do sonarqube onde voce ira conseguir ver acessando http://localhost:9000. com login admin e senha admin2 após ter mudado pois o sonarqube exige.








