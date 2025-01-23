import mongoose from "mongoose";

let ProductSchema = new mongoose.Schema({
    image:String,
    title:String,
    desc:String,
    price:Number
})

export let ProductModel = mongoose.model("products", ProductSchema)