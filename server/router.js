const express = require('express');
const router = express.Router();




function is_url(str) {
 
  const regex = /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/gm;
  if (regex.test(str))
        {
          return true;

        }
        else
        {
         return false;
        }
      }

router.post('/', function(req, res) {
 is_url(req.body.userInput)? res.status(200).send('valid'):res.status(400).send('invalid');
});



module.exports = router;
