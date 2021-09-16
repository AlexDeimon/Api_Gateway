const usersResolver = {
    Mutation: {
        authenticate: (_, { credentials }, { dataSources }) => dataSources.usersAPI.authRequest(credentials),
        refreshToken: (_, { refresh }, { dataSources }) => dataSources.usersAPI.refreshToken(refresh),
        createUser: (_, {user}, {dataSources}) => dataSources.usersAPI.createUser(user),
    }
};

module.exports = usersResolver;