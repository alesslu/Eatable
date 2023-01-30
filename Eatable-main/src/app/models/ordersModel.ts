export interface ordersModel{
    id?:string,
    delivery_address?:string,
    id_user?:string,
    items?:items[],
}

export interface items{
    id_product?:string,
    id_order?:string,
    quantify?:string,
}

