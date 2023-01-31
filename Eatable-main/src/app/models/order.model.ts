export interface Order {
    _id: string;
    delivery_adress: string;
    user_id: number;
    items: [
        {
            quantity: number,
            _id: string
        }
    ];
    __v: number
  }

  export interface items{
    id_product?:string,
    id_order?:string,
    quantify?:string,
}