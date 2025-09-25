import { getModelForClass, prop } from "@typegoose/typegoose"

class Product {
    //#Region de Variables privadas

    @prop({ required: true, trim: true, type: () => String })
    private name: string

    @prop({ required: true, trim: true, type: () => String })
    private description: string

    @prop({ required: true, type: () => Number, min: 1 })
    private price: number

    @prop({ required: true, type: () => Number, min: 0 })
    private quantity: number

    @prop({ required: true, trim: true, type: () => String })
    private status: string

    //# End de variables Privadas

    //#Region Constructor
    constructor(name: string, description: string, price: number, quantity: number, status: string) {
            this.name = name,
            this.description = description,
            this.price = price,
            this.quantity = quantity,
            this.status = status
    }
    //# End Region Constructor

    //#Region Get
    get _name() {
        return this.name
    }
    get _description() {
        return this.description
    }
    get _price() {
        return this.price
    }
    get _quantity() {
        return this.quantity
    }
    get _status() {
        return this.status
    }
    //#End Region Get

    //# Region Set
    set _name(name: string) {
        this._name = name
    }
    set _description(description: string) {
        this._description = description
    }
    set _price(price: number) {
        this._price = price
    }
    set _quantity(quantity: number) {
        this._quantity = quantity
    }
    set _status(status: string) {
        this._status = status
    }
    //# End Region Set

}
const ProductModel = getModelForClass(Product) // construye un modelo a partir de una clase
export default ProductModel