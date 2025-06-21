let getAllProducts =(req, res) => {
    //   res.send('Hello World!')
    res.json(products).status(200)
    }
let getSingleProducts =(req, res) => {
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
}
let addProducts =(req, res) => {
    const product ={
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    price: req.body.rice,
    stock: req.body.stock,
    }
    console.log(product);
    products = [...products,product]
    
     res.json({message:"Product added successfully", 
      productAdded:product});
     
    }
let deleteProducts =(req, res) => {
    const id = req.params.id;
    products = products.filter((item,index) =>{
    if(item.id != id){
    return item;
    }
    })
     res.json({message:"Product deleted successfully", 
    });
     
    }

    const productController ={getAllProducts,getSingleProducts,addProducts}