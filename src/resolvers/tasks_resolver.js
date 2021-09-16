const taskResolver = {
    Query: {
        taskByUserIdAndTaskTittle: (_, {userId, taskTittle}, {dataSources, userIdToken}) => {
            if(userId == userIdToken)
                return dataSources.tasksAPI.taskByUserIdAndTaskTittle(userId, taskTittle)
            else
                null
        },
        taskByUserIdAndTaskDate: (_, {userId, taskDate}, {dataSources, userIdToken}) => {
            if(userId == userIdToken)
                return dataSources.tasksAPI.taskByUserIdAndTaskDate(userId, taskDate)
            else
                null
        }
    },
    Mutation: {
        createTask: (_, {task}, {dataSources, userIdToken}) => {
            if(task.userId == userIdToken)
                return dataSources.tasksAPI.createTask(task)
            else
                return null
        },
        updateTask: (_, {taskId, task}, {dataSources, userIdToken}) => {
            if(task.userId == userIdToken)
                return dataSources.tasksAPI.updateTask(taskId, task)
            else
                return null
        },
        deleteTask: (_, {userId, taskTittle}, {dataSources, userIdToken}) => {
            if(userId == userIdToken)
                return dataSources.tasksAPI.deleteTask(userId, taskTittle)
            else
                return null
        }
    }
};

module.exports = taskResolver;