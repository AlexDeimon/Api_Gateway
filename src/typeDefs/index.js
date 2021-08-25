//Se llama al typedef (esquema) de cada submodulo
const tasksTypeDefs = require('./tasks_type_def');
const categoryTypeDefs = require('./category_type_def');
const usersTypeDefs = require('./users_type_defs');

//Se unen
const schemasArrays = [tasksTypeDefs, categoryTypeDefs, usersTypeDefs];

//Se exportan
module.exports = schemasArrays; 