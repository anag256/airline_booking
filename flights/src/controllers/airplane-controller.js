const { StatusCodes } = require('http-status-codes');
const {AirplaneService}=require('../services');

const {SuccessResponse,ErrorResponse}=require('../utils/common');
async function createAirplane(req,res) {
    console.log("body",req.body)
    try {
        const airplane=await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        });
        SuccessResponse.message="Successfully create an airplane";
        SuccessResponse.data=airplane;
      return res.status(StatusCodes.CREATED).json(SuccessResponse)  
    } catch (error) {
      console.log("error",error)
      ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse)  
    }
}

async function getAirplanes(req,res) {
  try {
    const airplanes=await AirplaneService.getAirplanes();
    SuccessResponse.data=airplanes;
     return res.status(StatusCodes.OK).json(SuccessResponse)  
    
  } catch (error) {
     console.log("error",error)
      ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse)  
    }
  
}
async function getAirplane(req,res) {
  try {
    const airplanes=await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.data=airplanes;
     return res.status(StatusCodes.OK).json(SuccessResponse)  
    
  } catch (error) {
     console.log("error",error)
      ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse)  
    }
  
}


async function destroyAirplane(req,res) {
  try {
    const airplanes=await AirplaneService.destroyAirplane(req.params.id);
    SuccessResponse.data=airplanes;
     return res.status(StatusCodes.OK).json(SuccessResponse)  
    
  } catch (error) {
     console.log("error",error)
      ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse)  
    }
  
}
module.exports={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}