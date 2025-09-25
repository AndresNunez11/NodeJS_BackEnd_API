var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { getModelForClass, prop } from "@typegoose/typegoose";
class Login {
    //#Region Variables
    username;
    password;
    role;
    status;
    //#End Region Variables
    //#Region Constructor
    constructor(username, password, role, status) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.status = status;
    }
    //#End Region Constructor
    //#region  Getter
    get _username() {
        return this.username;
    }
    get _password() {
        return this.password;
    }
    get _role() {
        return this.role;
    }
    get _status() {
        return this.status;
    }
    //#End Region Getter
    //#Region Setter
    set _username(username) {
        this.username = username;
    }
    set _password(password) {
        this.password = password;
    }
    set _role(role) {
        this.role = role;
    }
    set _status(status) {
        this.status = status;
    }
}
__decorate([
    prop({ required: true, trim: true, unique: true, type: () => String })
], Login.prototype, "username", void 0);
__decorate([
    prop({ required: true, trim: true, type: () => String }) // match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ // como esta encryptada no tiene sentido tener la validacion de minimos o maximos , minlength: 7, maxlength: 8
], Login.prototype, "password", void 0);
__decorate([
    prop({ required: true, type: () => String })
], Login.prototype, "role", void 0);
__decorate([
    prop({ required: true, type: () => Boolean, default: true })
], Login.prototype, "status", void 0);
const LoginModel = getModelForClass(Login);
export default LoginModel;
//# sourceMappingURL=login.model.js.map