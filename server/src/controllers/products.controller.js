import productModel from "../models/product.model.js";
import { uploadImages } from "../services/storage.service.js";

export const createProduct = async (req, res) => {
  const { title, description, category, price, stock } = req.body;
  
  console.log(req.files);

  const filesUrls = [];


  for (let i = 0; i < req.files.length; i++) {
    const response = await uploadImages({
      buffer: req.files[i].buffer,
      fileName: req.files[i].originalname,
    });
    filesUrls.push(response.url);
  }

  const product = await productModel.create({
    title: title,
    description: description,
    category: category,
    price: {
        amount: price.amount,
    },
    images: filesUrls,
    stock: stock,
  });

  res.status(201).json({
    message: "Product created successfully",
    data: {
      product: {
        title,
        description,
        category,
        price: price.amount,
        stock,
      },
    },
  });
};



export const listAllProduct = async (req, res) => {
  const products = await productModel.find()

  if(products.length === 0){
    return res.status(400).json({
      message:"There is no any product"
    })
  }

  res.status(200).json({
    message:"Product data fetched successfully",
    data:{
      products
    }
  })


}


export const deleteProduct = async (req, res) => {

  const productId = req.params.id
  const product = await productModel.findByIdAndDelete(productId)

  if(!product){
    return res.status(400).json({
      message:"product doesn't exists"
    })
  }
 
  return res.status(200).json({
    message: "product deleted successfully",
    data:{
      product
    }
  })

}


export const getSingleProduct = async (req,res) => {
  const productId = req.params.id

  const product = await productModel.findById(productId)
  if(!product){
    return res.status(404).json({
      message:"product not found" 
    })
  }


  res.status(200).json({
      message:"product fetched successfully",
      data:{
        product
      }
    })
}

export const updateProduct = async (req, res) => {
  const productId = req.params.id

  const {title, description, category, price, stock} = req.body

  const product = await productModel.findByIdAndUpdate(productId,{
      title, description, category, price, stock
  },{new: true})


  if(!product){
    return res.status(404).json({
      message: "Product not found",
    })
  }

  res.status(200).json({
    message:"Product Updated successfully",
    newData:{
      product
    }
  })


}