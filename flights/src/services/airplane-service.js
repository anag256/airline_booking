const {AirplaneRepository}=require('../repositories');

const airplaneRepository=new AirplaneRepository();

async function createAirplane(data){
    try {
        console.log("in",data)
      const airplane=await airplaneRepository.create(data);
      return airplane;  
    } catch (error) {
        throw error;
    }
}

module.exports={
    createAirplane
}