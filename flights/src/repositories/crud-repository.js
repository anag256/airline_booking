const { where } = require('sequelize');
const {Logger} =require('../config');

class CrudRepository{
    constructor(model){
        console.log("model",model)
        this.model=model;
    }

    async create(data){
        try {
            console.log("inner in",data);
           const response=await this.model.create(data);
           console.log("inner out");
           return response; 
        } catch (error) {
            Logger.error('Something went wrong in the crud Repo: create',error);
            throw error;
        }
    }

    async destroy(data){
        try {
            const response=await this.model.destroy({
                where:{
                    id:data
                }
            })
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the crud Repo: destroy');
            throw error;
        }
    }

    async get(data){
        try {
            const response=await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the crud Repo: get');
            throw error;
        }
    }
       async getAll(){
        try {
            const response=await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the crud Repo: getAll');
            throw error;
        }
    }

    async update(id,data){ //data:{col:val,...}
           try {
            const response=await this.model.update(data,{
                where:{
                    id:id
                }
            })
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the crud Repo: getAll');
            throw error;
        }
    }
}


module.exports=CrudRepository;