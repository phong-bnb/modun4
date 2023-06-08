const express = require('express')
const app = express();
const port = 3000
 app.listen(port,()=>{
  console.log(`ngu ngu là port này ${port}`)
 })
app.get('/',(req,res)=>{
 res.send('hello World')
})