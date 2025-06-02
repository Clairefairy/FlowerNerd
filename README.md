# FlowerNerd - Aplicativo de Identificação de Flores

## Requisitos Prévios

### Software Necessário
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [MongoDB](https://www.mongodb.com/try/download/community) instalado localmente
- [Expo Go](https://expo.dev/client) instalado no seu dispositivo móvel
- [Git](https://git-scm.com/) (opcional, para clonar o repositório)

### Configuração do MongoDB
1. Certifique-se de que o MongoDB está instalado e rodando em sua máquina
2. Abra o MongoDB Compass ou terminal do MongoDB
3. Crie um novo banco de dados chamado `FlowerNerd`
4. Dentro do banco de dados, crie uma coleção chamada `flowers`
5. Importe o arquivo `flowers.json` para a coleção `flowers`

## Instalação

### Backend
1. Navegue até a pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
node index.js
```
O servidor estará rodando em `http://localhost:3000`

### Frontend (FlowerNerd)
1. Em um novo terminal, navegue até a pasta do frontend:
```bash
cd FlowerNerd-app
```

2. Instale as dependências necessárias:
```bash
npm install
```

3. Inicie o aplicativo:
```bash
npx expo start
```

## Configuração do IP

Para que o aplicativo funcione corretamente, você precisa atualizar o endereço IP nas chamadas de API:

1. Descubra seu IP local executando:
   - Windows: `ipconfig` no terminal
   - Mac/Linux: `ifconfig` ou `ip addr` no terminal

2. Atualize o IP no arquivo de configuração do frontend (geralmente em `FlowerNerd/src/config/api.js` ou similar) substituindo o IP atual pelo seu IP local

## Executando o Aplicativo

1. Certifique-se de que o backend está rodando (`node index.js` na pasta backend)
2. Certifique-se de que o frontend está rodando (`npx expo start` na pasta FlowerNerd)
3. Abra o aplicativo Expo Go no seu dispositivo móvel
4. Escaneie o QR Code que aparece no terminal ou no navegador
5. O aplicativo deve abrir automaticamente no seu dispositivo

## Solução de Problemas

- Se o aplicativo não conseguir conectar ao backend, verifique se:
  - O MongoDB está rodando
  - O backend está rodando na porta 3000
  - O IP configurado no frontend está correto
  - Seu dispositivo móvel está na mesma rede Wi-Fi que o computador

- Se houver problemas com as dependências:
  - Delete a pasta `node_modules`
  - Delete o arquivo `package-lock.json`
  - Execute `npm install` novamente

## Estrutura do Projeto

```
FlowerNerd/
├── backend/           # Servidor Node.js
│   ├── index.js      # Arquivo principal do backend
│   └── package.json  # Dependências do backend
├── FlowerNerd/       # Aplicativo React Native
│   ├── src/         # Código fonte do frontend
│   └── package.json # Dependências do frontend
└── flowers.json     # Dados das flores para importação
``` 
