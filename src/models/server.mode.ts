import express from 'express';
import type { Application } from 'express';
import labels from '../labels.js';
import db_connect from '../database/config.js';
import loginRoutes from '../routes/login.routes.js'
import userRoutes from '../routes/user.routes.js'
import cors from 'cors';
import productRoutes from "../routes/product.routes.js"


class Server {
    private app: Application
    private port: string

    //Paths
    private login_path: string
    private user_path: string
    private product_path: string


    constructor(){
        this.app = express()
        this.port = process.env.PORT  || "3000"
        this.login_path="/api/login"
        this.user_path="/api/user"
        this.product_path="/api/products"
        this.connect_db()
        this.middlewares()
        this.routes()
        
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(labels.Listes_server+ this.port)
        })
    }
    async connect_db(){
        await db_connect()
    }

    routes (){
        this.app.use(this.login_path, loginRoutes)
        this.app.use(this.user_path, userRoutes)
        this.app.use(this.product_path, productRoutes)
    }
    middlewares(){
        //Todo: CORS -- 

        /*
        const allowedOrigins = process.env.allowed_cors || ''
        this.app.use(cors({origin: allowedOrigins}))
        const allowedOrigins = process.env.allowed_CORS.split(",");
        */
        this.app.use(cors()) // CORS -- Validacion que permite ciertas URL this.app.use(cors({allowed_cors, allowed}))
        this.app.use(express.json())
    }
}
export default Server