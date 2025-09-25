import type { NextFunction, Request, Response } from "express";
import labels from "../labels.js";
import jwt from "jsonwebtoken";
import Login from "../models/login.model.js";

//roleToValidate se valida que se envie y sea un string, como que no se envie
const validatejwt = (roleToValidate?: string) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.header(labels.Authorization) || ''.split(' ')[1]

            if (!token) {
                return res.status(401).json({
                    msg: labels.failied_valid_token
                })
            }
            const { uid, role } = <any>jwt.verify(token, process.env.secret_key || '')
            const user = await Login.findById(uid)

            if (!user) {
                return res.status(401).json({
                    msg: labels.failied_valid_token_user
                })
            }
            if (!user._status) {
                return res.status(401).json({
                    msg: labels.failied_valid_token_status,
                    user
                })
            }
            if(user._role !== roleToValidate && user._role!=="ADMIN" && roleToValidate){
                return res.status(401).json({
                    msg:labels.Role_not_access,
                    role: user._role
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
}
export default validatejwt