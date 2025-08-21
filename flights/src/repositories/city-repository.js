const CrudRepository=require('./crud-repository');
const {City}=require('../models/index');

class CityRepository extends CrudRepository{
    constructor(){
        console.log("airplane",City, typeof(City))
        super(City);
    }
}

module.exports=CityRepository;