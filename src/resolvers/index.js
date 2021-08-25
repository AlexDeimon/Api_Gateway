const tasksResolver = require('./tasks_resolver');
const categoryResolver = require('./category_resolver');
const userResolver = require('./users_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(tasksResolver, categoryResolver, userResolver);

module.exports = resolvers;