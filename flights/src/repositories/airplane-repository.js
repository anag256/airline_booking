const CrudRepository=require('./crud-repository');
const {airplane}=require('../models/index');

class AirplaneRepository extends CrudRepository{
    constructor(){
        console.log("airplane",airplane, typeof(airplane))
        super(airplane);
    }
}

module.exports=AirplaneRepository;