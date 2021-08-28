const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class TasksAPI extends RESTDataSource{
    constructor() {
        super();
        this.baseURL = serverConfig.task_api_url;    
    }

    async createTask(task){
        task = new Object(JSON.parse(JSON.stringify(task)));
        return await this.post(`/newTask`, task);
    }

    async updateTask(task){
        task = new Object(JSON.parse(JSON.stringify(task)));
        return await this.put(`/updateTask`, task);
    }

    async deleteTask(userId, taskTittle){
        return await this.delete(`/deleteTask/${userId}/${taskTittle}`);
    }

    async taskByUserIdAndTaskTittle(userId, taskTittle){
        return await this.get(`/getTask/${userId}/${taskTittle}`);
    }

    async taskByUserIdAndFinalDate(userId, finalDate){
        return await this.get(`/${userId}/${finalDate}`);
    }

    async createCategory(category){
        category = new Object(JSON.parse(JSON.stringify(category)));
        return await this.put(`/newCategory`, category);
    }

    async deleteCategory(userId, categoryName){
        return await this.delete(`/deleteCategory/${userId}/${categoryName}`);
    }
}

module.exports = TasksAPI;