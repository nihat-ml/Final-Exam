import { data } from "react-router";
import { ProductModel } from "../models/ProductsModel.js";

export let ProductController = {
    getAll: async (req, res)=>{
        let products = await ProductModel.find()
        res.send(products)
    },
    getById: async (req, res)=>{
        let id = req.params.id
        let myproduct = await ProductModel.findById(id)
        res.send({
            message: "finded by id",
            data: myproduct
        })
    },
    deleteProduct: async (req, res)=>{
        let id = req.params.id
        await ProductModel.findByIdAndDelete(id)
        res.send({
            message:"Deleted"
        })
    },
    postProduct: async (req, res)=>{
        let newproduct = ProductModel(req.body)
        await newproduct.save()
        res.send({
            message: "Posted Product",
            data: req.body
        })
    }
}