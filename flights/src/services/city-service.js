const {CityRepository}=require('../repositories');
const {StatusCodes}=require('http-status-codes');
const AppError = require('../utils/errors');

const cityRepository=new CityRepository();

async function createCity(data) {
     try {
      const city=await cityRepository.create(data);
      return city;  
    } catch (error) {
        if(error.name==='SequelizeValidationError' || error.name==='SequelizeUniqueConstraintError'){
            let explaination =[];
            error.errors.forEach(err=>{
                explaination.push(err.message);
            });
            throw new AppError(explaination,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new City object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports={
    createCity
}