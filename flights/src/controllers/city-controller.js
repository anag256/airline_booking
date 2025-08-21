const { StatusCodes } = require('http-status-codes');
const {CityService}=require('../services');

const {SuccessResponse,ErrorResponse}=require('../utils/common');

async function createCity(req,res) {
    console.log("body",req.body)
    try {
        const city=await CityService.createCity({
            name:req.body.name
        });
        SuccessResponse.message="Successfully create a city";
        SuccessResponse.data=city;
      return res.status(StatusCodes.CREATED).json(SuccessResponse)  
    } catch (error) {
      console.log("error",error)
      ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse)  
    }
}

module.exports={
    createCity
}