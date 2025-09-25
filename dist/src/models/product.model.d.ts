declare class Product {
    private name;
    private description;
    private price;
    private quantity;
    private status;
    constructor(name: string, description: string, price: number, quantity: number, status: string);
    get _name(): string;
    get _description(): string;
    get _price(): number;
    get _quantity(): number;
    get _status(): string;
    set _name(name: string);
    set _description(description: string);
    set _price(price: number);
    set _quantity(quantity: number);
    set _status(status: string);
}
declare const ProductModel: import("@typegoose/typegoose").ReturnModelType<typeof Product, import("@typegoose/typegoose/lib/types.js").BeAnObject>;
export default ProductModel;
//# sourceMappingURL=product.model.d.ts.map