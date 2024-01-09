const express=require('express')
const {catAdd, get_Categories, subcatAdd, assembliAdd, get_subCategories, get_assemblies, assembli_Desc_Add, get_assembliesDesc, }=require('../controllers/logic')

const router=new express.Router()

//Add categories
router.post('/project/categories/add',catAdd)

//add sub category
router.post('/project/subcategories/add',subcatAdd)

//Add assembli
router.post('/project/assembli/add',assembliAdd)

//Add assembli description
router.post('/project/assembliDesc/add',assembli_Desc_Add)

//get all categories
router.get('/project/categories/getdetails',get_Categories)

//get all subcategories
router.get('/project/subcategories/getdetails',get_subCategories)

//get all assemblies
router.get('/project/assemblies/getdetails',get_assemblies)


// //get all assembliesdescription
router.get('/project/assembliesDesc/getdetails',get_assembliesDesc)

module.exports=router