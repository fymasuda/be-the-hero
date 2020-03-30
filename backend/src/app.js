/**
 * Rota(rocketseat.com) / Recurso (/users)
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 * TIPOS DE PARAMETROS:
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, Paginação)
 * users?page=2&name=Diego&idade=25
 * 
 * Route Params: Parâmetros utilizados para identificar recursos
 * 
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Miscrosoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Utilização do SQL no JS
 * (SQL) Driver: SELECT * FROM users
 * (JS) Query Builder: table('users').select('*').where()
 */

const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
 * ENTIDADES
 * ONG
 * Caso (incident)
 * 
 * FUNCIONALIDADES
 * Login de ONG
 * Logout de ONG
 * Cadastro de ONG
 * Cadastrar novos casos
 * Deletar casos
 * Listar casos específicos de uma ONG
 * Listar todos os casos
 * Entrar em contato com a ONG
 */
