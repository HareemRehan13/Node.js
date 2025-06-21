// console.log("first server")

import express from 'express'
import fs from 'node:fs'

const app = express()
const port = 3000
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
// console.log(data);

let products = data.products;
//Middleware
//Body Parser
app.use(express.json())
app.use('/', router )

// app.get('/', (req, res) => {
// //   res.send('Hello World!')
// res.json(products).status(200)
// })

//Rest API's
//Route Parameter
// app.get('/product/:id', (req, res) => {
//     const id = req.params.id;
//     console.log(id);
   
//     let product = products.filter((item,index)=>{
//  if(item.id == id){
//         return item;
//     }
//     })
//     if(product.length > 0){
//         res.json(product)
//     }
//     else{
// res.status(404).json({message:"Product not found"})
//     }
// })

// app.get('/test', (req, res) => {
//   res.json({title:'Testing live server'})
// })


//Add  , Edit & Delete

// app.post('/addProduct', (req, res) => {
// const product ={
// id: req.body.id,
// title: req.body.title,
// description: req.body.description,
// price: req.body.rice,
// stock: req.body.stock,
// }
// console.log(product);
// products = [...products,product]

//  res.json({message:"Product added successfully", 
//   productAdded:product});
 
// })

// app.delete('/deleteProduct/:id', (req, res) => {
// const id = req.params.id;
// products = products.filter((item,index) =>{
// if(item.id != id){
// return item;
// }
// })
//  res.json({message:"Product deleted successfully", 
// });
 
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
