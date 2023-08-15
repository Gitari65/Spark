const mongoose= require("mongoose")

mongoose.connect("mongodb://0.0.0.0/SparkLogin", {
    connectTimeoutMS: 30000, // Increase the timeout if needed
    // ... other options
  })
.then(()=>{
    console.log("connection to mongo succesful")
}).catch((error)=>{
    console.log("failed to connect to mongo")
})

const LoginSchema=new mongoose.Schema({
    password:{type:String},
    email:{type:String}
    
})
const collection=new mongoose.model("collectionLogin",LoginSchema)
module.exports=collection