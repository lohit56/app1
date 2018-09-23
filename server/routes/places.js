const express = require('express');

const router =express.Router();

const Place = require('../models/place');


router.get('',(req,res)=>{

Place.find({}, function(err, foundPlaces){

    res.json(foundPlaces);
})


});

router.get('/:id',(req,res)=>{


    const rentalId= req.params.id;

    Place.findById(rentalId,(err,foundPlace)=>{

        if(err)
        {

            res.status(422).send({errors: [{ title:'Place Error',detail:'Could not find the place'}]});


        }

        res.json(foundPlace);
    })




});

module.exports =router;