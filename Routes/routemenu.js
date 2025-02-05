const express = require('express');
const router = express.Router();
const menuItems = require('./../modles/menu');

router.post('/', async(req, res) => {
    try{
      const menu = req.body;
      const newmenu = new menuItems(menu);
      const response = await newmenu.save();
      console.log("Data saved");
      res.status(200).json(response);
    }
    catch(error){
      console.log(error);
      res.status(500).json({error: 'Internal server error'});
    }
  })

  router.get('/', async(req, res) => {
    try{
  
      const menuItem = await menuItems.find();
      console.log("Data fetched");
      res.status(200).json(menuItem);
    }
    catch(error){
      console.log(error);
      res.status(500).json({error: 'Internal server error'});
    }
  })

  router.get('/:menuType', async (req, res) => {
    try {
      const menuType = req.params.menuType;
      if (menuType === 'chicken' || menuType === 'vegetables' || menuType === 'fish') {
        console.log(menuType);
        const menuData = await menuItems.find({ menu: menuType });
        
        console.log('Fetched menu data for type:', menuData); 
        console.log(menuData); 
        res.status(200).json(menuData);
      } else {
        res.status(404).json({ error: 'Not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

 


  module.exports= router;