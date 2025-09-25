import { getModelForClass, prop } from "@typegoose/typegoose"

class Login {

    //#Region Variables
    @prop({ required: true, trim: true, unique: true, type: () => String })
    private username: string

    @prop({ required: true, trim: true, type: () => String }) // match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ // como esta encryptada no tiene sentido tener la validacion de minimos o maximos , minlength: 7, maxlength: 8
    private password: string

    @prop({ required: true, type: () => String })
    private role: string

    @prop({ required: true, type: () => Boolean, default: true })
    private status: boolean
    //#End Region Variables

    //#Region Constructor
    constructor(username: string, password: string, role: string, status: boolean) {
        this.username = username
        this.password = password
        this.role = role
        this.status = status
    }
    //#End Region Constructor

    //#region  Getter
    get _username() {
        return this.username
    }
    get _password() {
        return this.password
    }
    get _role() {
        return this.role
    }
    get _status() {
        return this.status
    }
    //#End Region Getter

    //#Region Setter
    set _username(username: string) {
        this.username = username    
    }
    set _password(password: string) {
        this.password = password    
    }
    set _role(role: string) {
        this.role = role
    }

    set _status(status: boolean) {
        this.status = status
    }
    //# End Region Setter

}

const LoginModel = getModelForClass(Login)

export default LoginModel
