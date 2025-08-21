const {AirplaneRepository}=require('../repositories');
const {StatusCodes}=require('http-status-codes');
const AppError = require('../utils/errors');

const airplaneRepository=new AirplaneRepository();

async function createAirplane(data){
    try {
        console.log("in",data)
      const airplane=await airplaneRepository.create(data);
      return airplane;  
    } catch (error) {
        if(error.name==='SequelizeValidationError'){
            let explaination =[];
            error.errors.forEach(err=>{
                explaination.push(err.message);
            });
            throw new AppError(explaination,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airplane object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function  getAirplanes() {
    try{
        const airplanes=await airplaneRepository.getAll();
        return airplanes;
    }
    catch(err){
        throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function  getAirplane(id) {
    try{
        const airplane=await airplaneRepository.get(id);
        return airplane;
    }
    catch(err){
        if(err.statusCode===StatusCodes.NOT_FOUND){
             throw new AppError('The airplane you requested is not present.',err.statusCode)
        }
        throw new AppError('Cannot fetch data of the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function destroyAirplane(id) {
     try{
        const response=await airplaneRepository.destroy(id);
        return response;
    }
    catch(err){
         if(err.statusCode===StatusCodes.NOT_FOUND){
             throw new AppError('The airplane you requested to delete is not present.',err.statusCode)
        }
        throw new AppError('Cannot destroy airplane',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}