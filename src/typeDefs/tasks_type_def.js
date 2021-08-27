const { gql } = require('apollo-server');

const taskTypeDefs = gql`
    type Task {
        taskId: String!
        taskTittle: String
        description: String
        finalDate: String
        status: String
        taskCategory: String
        userId: String
    }
    
    input TaskInput {
        taskTittle: String
        description: String
        finalDate: String
        status: String
        taskCategory: String
        userId: String
    }

    type message{
        response: String;
    }

    extend type Query {
        taskByUserIdAndTaskTittle(userId: String!, taskTittle: String!): Task
        taskByUserIdAndFinalDate(userId: String!, finalDate: String!): [Task]
    }
    
    type Mutation {
        createTask(task: TaskInput!): Task
        updateTask(task: TaskInput!): task
        deleteTask(userId: String!, taskTittle: String!): message
    }
`;

module.exports = taskTypeDefs; 