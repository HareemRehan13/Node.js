// console.log("first server")

import express from 'express'
import fs from 'node:fs'
import { json } from 'node:stream/consumers'    

const app = express()
const port = 3000
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
console.log(data);
let products = data.products;
app.get('/', (req, res) => {
//   res.send('Hello World!')
res.json(products).status(200)
})

//Route Parameter
app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
   
    let product = products.filter((item,index)=>{
 if(item.id == id){
        return item;
    }
    })
    if(product.length > 0){
        res.json(product)
    }
    else{
res.status(404).json({message:"Product not found"})
    }
//   res.json({title:'Apple Watch'})
})

app.get('/test', (req, res) => {
  res.json({title:'Testing live server'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
