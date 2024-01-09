const mongoose=require('mongoose')

const subcategories
=mongoose.model('subcategories',{

 
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

module.exports=subcategories