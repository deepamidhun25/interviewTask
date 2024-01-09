const mongoose=require('mongoose')

const assembli_descriptions
=mongoose.model('assembli_descriptions',{

 
    description:{
        type:String,
        required:true,
        trim:true
    },
    quantity:{
        type:Number,
        required:true,
        trim:true
    },
    fct1:{
        type:Number,
        required:true,
        trim:true
    },
    fct2:{
        type:Number,
        required:true,
        trim:true
    },
    cat_num:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports=assembli_descriptions
