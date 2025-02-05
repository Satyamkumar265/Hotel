const express = require('express');
const router = express.Router();
const Person = require('./../modles/person');

router.post('/', async(req, res) => {

    try {
  
      const data = req.body;
  
      //Creating a new person to  the database
      const newperson = new Person(data);
  
      //Save the  new person to the database
     const response = await newperson.save();
      console.log("Data saved");
      res.status(200).json(response);
  
      }
  
    catch (error) {
      console.log(error);
      res.status(500).json({error: 'Internal server error'});
  
    }
  })

  router.get('/', async(req, res) => {
    try {
      const data = await Person.find();
      console.log("Data fetched");
      res.status(200).json(data);
    }
    catch(error){
      console.log(error);
      res.status(500).json({error: 'Internal server error'});
    }
  })

  router.get('/:ageType', async(req, res) => {
    try{
      const ageType = req.params.ageType;
      if(ageType == 20 || ageType == 21){
        const findAge = await Person.find({age: ageType});
        console.log("Data fetched");
        res.status(200).json(findAge);
      }
      else{
        res.status(404).json({error: 'Not found'});
      }
    }
    catch(error){
      console.log(error);
      res.status(500).json({error: 'Not found'});
    }
  })

  router.put('/:id', async(req, res) => {
    try {
        const personId = req.params.id;
        const updated_data = req.body;
    
        const updatePerson = await Person.findByIdAndUpdate(personId, updated_data, {
          new: true,
          runValidators: true,
        });

      if (!updatePerson) {
        console.log("Person not found");
        return res.status(404).json({ error: 'Person not found' });
      }

      console.log("Data updated");
    res.status(200).json(updatePerson);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

router.delete('/:id', async(req, res) => {
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if(!response){
          console.log("Person not found");
          return res.status(404).json({ error: 'Person not found' });
        }

        console.log("Person deleted");
        return res.status(200).json({ message: 'Person deleted successfully' });
    }
    catch(error){
      console.log(error);
      res.status(500).json({error: 'Not found'});
    }
})


  module.exports = router;
