//CRUD --create/read*all or one/update/delete

import { response, type Request, type Response } from "express";
import Product from '../models/product.model.js'
import labels from "../labels.js";

//Listado de todos los productos
export const getProducts= async(req:Request, res: Response)=>{
    try{
        const products = await Product.find()

        if(products.length === 0){
            res.status(204).json({
                msg: labels.msg_204,
                response: labels.empty_query,
                products
            })
        }else {
            res.status(200).json({
                msg:labels.succesfull_response,
                products

            })
        }
    }catch(e){
        console.error(e)
        res.status(500).json({
            msg: labels.msg_500,
            res: labels.failed_server
        })
    }
}

//Listado de los productos con un filtro por precio
export const getProductsByPrice = async(req:Request, res:Response)=>{
    try{

        const {min, max} = req.body //  se pueden revciubir los valores como prametros o como body

        const products = await Product.find({price:{$gte:min, $lte:max}}) // gte mayores o igual // lte menores o igual

        if(products.length===0){
            res.status(204).json({
                msg: labels.msg_204,
                response: labels.empty_query,
                products
            })
        }else {
            res.status(200).json({
                msg:labels.succesfull_response,
                products}
            )
        }
    }catch(e){
        console.error(e)
        res.status(500).json({
            msg: labels.msg_500,
            res: labels.failed_server
        })

    }
}

//Registrar el producto en BD
export const createProducts= async(req:Request, res: Response)=>{
    try{
        const {name, description, price, quantity, status} = req.body
        const product = new Product({name, description, price, quantity, status})
        await product.save()
        res.status(201).json({
            msg: labels.msg_201,
            response:labels.succesfull_response
        })
    }catch(e){
        console.error(e)
        res.status(500).json({
            msg: labels.msg_500,
            res: labels.failed_server
        })
    }

}

//Actualizar un producto en la base de datos
export const updateProduct= async(req:Request, res: Response)=>{
    try{
        const id = req.params.id
        const {_id,...rest} = req.body
        const product = await Product.findByIdAndUpdate(id, rest)

        res.status(200).json({
            msg: labels.msg_205,
            response: labels.succesfull_update,
            product
        })

    }
    catch(e){
        console.error(e)
        res.status(500).json({
            msg: labels.msg_500,
            res: labels.failed_server
        })
    }

}

//Eliminar un registro d ela base de datos
export const deleteProduct = async(req: Request, res: Response)=>{
    try{
        const id = req.params.id
        const product = await Product.findByIdAndDelete(id)

        res.status(200).json({
            msg: labels.msg_206,
            response: labels.succesfull_delete,
            product
        })

    }
    catch(e){
        console.error(e)
        res.status(500).json({
            msg: labels.msg_500,
            res: labels.failed_server
        })
    }
}