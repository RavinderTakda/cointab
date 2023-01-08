
const mongoose =require("mongoose")
require('dotenv').config()

const connection = mongoose.connect(process.env.MongoURL)


const cointabSchema =new mongoose.Schema({

    cell:{type:String,required:true},
    dob:{date:{type:Date,required:true},age:{type:Number,required:true}},
    email:{type:String,required:true},
    gender:{type:String,required:true},
    // id:{name:{type:String,required:true},value:{type:String,required:true}},
    location: {
        street: {
          number: {
            type: Number,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
        postcode: {
          type: String,
          required: true,
        },
        coordinates: {
          latitude: {
            type: String,
            required: true,
          },
          longitude: {
            type: String,
            required: true,
          },
        },
        timezone: {
          offset: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
        },
      },
    login:{md5:{type:String,required:true},password:{type:String,required:true},salt:{type:String,required:true},sha256:{type:String,required:true},username:{type:String,required:true},uuid:{type:String,required:true}},
    name:{first:{type:String,required:true},last:{type:String,required:true},title:{type:String,required:true}},
    nat:{type:String,required:true},
    phone:{type:String,required:true},
    picture:{large:{type:String,required:true},medium:{type:String,required:true},thumbnail:{type:String,required:true}},
    registered:{age:{type:Number,required:true},date:{type:Date,required:true}},

  
   




})


const CointabModel =mongoose.model("cointabdd",cointabSchema)



module.exports={
    connection,
    CointabModel
}

