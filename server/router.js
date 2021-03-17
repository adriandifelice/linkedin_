const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const Api = process.env.API_KEY;
const SEID = process.env.SE_ID;


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

async function handleClick (userInput) {
  try {
      let resp = await fetch(`https://www.googleapis.com/customsearch/v1?key=${Api}&cx=${SEID}&q=${userInput}`)
      let data = resp.json();
      return data;
  } 
  catch (error) {
    console.log('error', error)
  }

}

router.post('/', async function(req, res) {
  const userInput = req.body.userInput;
  if(is_url(userInput)) {
    const searchData = await handleClick(userInput);
    return res.status(200).send(searchData);
 } else {
  res.status(400).send('invalid');
 }
});

module.exports = router;
