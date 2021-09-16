const { gql } = require('apollo-server');

const taskTypeDefs = gql`
    type Task {
        taskId: String
        userId: String
        taskTittle: String
        taskCategory: String
        taskDescription: String
        taskStatus: String
        taskDate: String
    }
    
    input TaskInput {
        userId: String
        taskTittle: String
        taskCategory: String
        taskDescription: String
        taskStatus: String
        taskDate: String
    }

    type message{
        response: String
    }

    type Query {
        taskByUserIdAndTaskTittle(userId: String!, taskTittle: String!): Task
        taskByUserIdAndTaskDate(userId: String!, taskDate: String!): [Task]
    }
    
    type Mutation {
        createTask(task: TaskInput!): Task
        updateTask(taskId: String!, task: TaskInput!): Task
        deleteTask(userId: String!, taskTittle: String!): message
    }
`;

module.exports = taskTypeDefs; 