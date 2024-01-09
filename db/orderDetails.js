const mongoose=require('mongoose')

const orderDetails
=mongoose.model('orderDetails',{

 
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