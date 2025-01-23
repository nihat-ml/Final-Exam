import { ProductController } from "../controllers/ProductControllers.js";
import express from "express"
export let route = express.Router()


route.get("/", ProductController.getAll)
route.get("/:id", ProductController.getById)
route.delete("/:id", ProductController.deleteProduct)
route.post("/", ProductController.postProduct)