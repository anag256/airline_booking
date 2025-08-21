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


module.exports={
    createAirplane,
    getAirplanes
}