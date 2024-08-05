const express = require("express");
const app = express();

//require('dotenv').config()

const PORT = process.env.PORT || 3030;// iza fi env 2ri menu w chuf chu l port iza mafi st3ml 3030 
//console.log(process.env.sako);
// your code
app.get('/', function (req, res) {
    res.send('Hello World')
  })
app.listen(1234, () => {
  console.log(`server started on port ${PORT}`);
});