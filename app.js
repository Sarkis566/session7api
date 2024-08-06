const express = require("express");
const app = express();
var cors = require('cors')
const xlsx=require('xlsx');
let wb= xlsx.readFile('data.xlsx');
let ws= wb.Sheets['names'];
let _data = xlsx.utils.sheet_to_json(ws)
 
app.use(cors())
//require('dotenv').config()

const PORT = process.env.PORT || 3030;// iza fi env 2ri menu w chuf chu l port iza mafi st3ml 3030 
//console.log(process.env.sako);
// your code
app.get('/', function (req, res) {
    res.send('Hello World')
  })

  app.get('/students', function (req, res) {
    // var data=[
    //     {id:1, name: 'sako'},
    //     {id:2, name: 'sarkis'},
    //     {id:3, name: 'fadlallah'}
    // ]
    res.send(_data)
  })
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});