const categories= require('../db/model_Categories')
const subcategories=require('../db/mode_Subcategories')
const assemblies=require('../db/model_Assembly')
const assembli_descriptions=require('../db/model_assembli_desc')
//add category
exports.catAdd = async(req,res)=>{
    const{name,type}=req.body
    try{
        const newCat = await categories({name,type})
         await newCat.save()
         res.status(200).json(newCat)

    }
    catch(error){
        res.status(401).json(error)

    }
}

   //add Subcategory

   exports.subcatAdd = async(req,res)=>{
    const{name,type}=req.body
    try{
        const newsubCat = await subcategories({name,type})
         await newsubCat.save()
         res.status(200).json(newsubCat)

    }
    catch(error){
        res.status(401).json(error)

    }
}

//Add assemblies

exports.assembliAdd = async(req,res)=>{
  const{name,type}=req.body
  try{
      const newassbli = await assemblies({name,type})
       await newassbli.save()
       res.status(200).json(newassbli)


  }
  catch(error){
      res.status(401).json(error)

  }
}
//Add assemblies description

exports.assembli_Desc_Add = async(req,res)=>{
  const{description,
    quantity,
    fct1,
    fct2,
    cat_num}=req.body
  try{
      const newassbli = await  assembli_descriptions({description,
        quantity,
        fct1,
        fct2,
        cat_num})
       await newassbli.save()
       res.status(200).json(newassbli)


  }
  catch(error){
      res.status(401).json(error)

  }
}





//get All categories
exports.get_Categories = async(req,res)=>{
  try{ 
   const documents=await categories.find().sort()
   res.status(200).json(documents);
 
   
 }
 catch(err){
   res.status(500).json(err)
 }
 
 
 }
 //get All subcategories
exports.get_subCategories = async(req,res)=>{
  try{ 
   const documents=await subcategories.find().sort()
   res.status(200).json(documents);
 
   
 }
 catch(err){
   res.status(500).json(err)
 }
 
 
 }
  //get All Assemblies
exports.get_assemblies = async(req,res)=>{
  try{ 
   const documents=await assemblies.find().sort()
   res.status(200).json(documents);
 
   
 }
 catch(err){
   res.status(500).json(err)
 }
}
 
 //get All AssembliesDEScription
exports.get_assembliesDesc = async(req,res)=>{
  try{ 
   const documents=await assembli_descriptions.find().sort()
   res.status(200).json(documents);
 
   
    }
 catch(err){
   res.status(500).json(err)
 }
 
 
 }
 
 