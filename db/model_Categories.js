const mongoose=require('mongoose')

const categories
=mongoose.model('categories',{

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

module.exports=categories