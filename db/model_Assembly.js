const mongoose=require('mongoose')

const assemblies
=mongoose.model('assemblies',{

 
    name:{
        type:String,
        required:true,
        trim:true
    },
    type:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports=assemblies