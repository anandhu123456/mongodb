const express = require('express');
const studentmodel = require('../model/studentmodel');

const router = express.Router();


router.use(express.json());

router.get('/',async(req,res)=>{
    try{
        const data = await studentmodel.find();
    res.send(data);

    }catch(error){
        console.log(error)
    }
})

router.post('/add',async(req,res)=>{
    try{

        var item = req.body;
        await studentmodel(item).save()
    }catch (error){
        console.log(error)

    }
})
router.put('/edit/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const item = req.body;
        await studentModel.findByIdAndUpdate(id,item);
        res.send("date remove")
    }catch (error){
        console.log(error)
    }
})




module.exports = router;