var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { getModelForClass, prop } from "@typegoose/typegoose";
class Product {
    //#Region de Variables privadas
    name;
    description;
    price;
    quantity;
    status;
    //# End de variables Privadas
    //#Region Constructor
    constructor(name, description, price, quantity, status) {
        this.name = name,
            this.description = description,
            this.price = price,
            this.quantity = quantity,
            this.status = status;
    }
    //# End Region Constructor
    //#Region Get
    get _name() {
        return this.name;
    }
    get _description() {
        return this.description;
    }
    get _price() {
        return this.price;
    }
    get _quantity() {
        return this.quantity;
    }
    get _status() {
        return this.status;
    }
    //#End Region Get
    //# Region Set
    set _name(name) {
        this._name = name;
    }
    set _description(description) {
        this._description = description;
    }
    set _price(price) {
        this._price = price;
    }
    set _quantity(quantity) {
        this._quantity = quantity;
    }
    set _status(status) {
        this._status = status;
    }
}
__decorate([
    prop({ required: true, trim: true, type: () => String })
], Product.prototype, "name", void 0);
__decorate([
    prop({ required: true, trim: true, type: () => String })
], Product.prototype, "description", void 0);
__decorate([
    prop({ required: true, type: () => Number, min: 1 })
], Product.prototype, "price", void 0);
__decorate([
    prop({ required: true, type: () => Number, min: 0 })
], Product.prototype, "quantity", void 0);
__decorate([
    prop({ required: true, trim: true, type: () => String })
], Product.prototype, "status", void 0);
const ProductModel = getModelForClass(Product); // construye un modelo a partir de una clase
export default ProductModel;
//# sourceMappingURL=product.model.js.map