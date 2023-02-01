import { productoModel } from "./productoModel"

export interface ordersModel {
    // _id: string,
    delivery_address: string,
    phone: number
    user_id: string,
    items: items[],
    created_date: Date,
    total: number,
    // toggle details
    show?: boolean,
}

export interface items {
    product_id: string,
    // order_id: string,
    quantity: number,
    price:number,
    productDetail?: productoModel,
}

