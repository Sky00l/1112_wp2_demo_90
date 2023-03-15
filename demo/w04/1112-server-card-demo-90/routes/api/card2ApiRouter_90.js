var express = require('express');
var router = express.Router();


const db = require('../../utils/database');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    // const results = await db.query(`select * from card2_90`);
    // console.log('json data', JSON.stringify(results.rows));
    res.json(results.rows);
  }catch(error){
    console.log(error);
  }
 
});

module.exports = router;