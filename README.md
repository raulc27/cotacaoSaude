# cotacaoSaude

Backend em node usando Adonis, o foco além de realizar as operações crud comuns, também realizar o cálculo de cotação e apresentar os resultados. 

Após realizar o download, para rodar o app:

```bash
npm install
```

E então, depois:
```bash
npm start
```

O backend irá rodar em: http://localhost:3333

Por enquanto a rota é única e é a "planos". Portanto os verbos http deverão ser direcionados para a http://localhost:3333/planos (GET, POST, PUT...)


Ainda em desenvolvimento, quando estiver ok estarei subindo para o heroku... 

Autor: Raul Castro. http://raulcastro.com.br






# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
