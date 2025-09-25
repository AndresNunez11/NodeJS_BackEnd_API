import type { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import labels from "../labels.js";


const validateFieldsRequest = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                msg: labels.msg_400,
                response: labels.empty_field,
                errors
            })
        }
        next()
    } catch (e) {
        console.error(e)
        res.status(500).json({
            msg: labels.msg_500,
            response: labels.failed_server
        })
    }
}

export {
    validateFieldsRequest // no se exporta por default ya que podemos tener mas funciones para exportar
}
