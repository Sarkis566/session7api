const express = require("express");
const app = express();
var cors = require('cors')

 
app.use(cors())
//require('dotenv').config()

const PORT = process.env.PORT || 3030;// iza fi env 2ri menu w chuf chu l port iza mafi st3ml 3030 
//console.log(process.env.sako);
// your code
app.get('/', function (req, res) {
    res.send('Hello World')
  })

  app.get('/students', function (req, res) {
    var data=[
        {id:1, name: 'sako'},
        {id:2, name: 'sarkis'},
        {id:3, name: 'fadlallah'}
    ]
    res.send(data)
  })
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});