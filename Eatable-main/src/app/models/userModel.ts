import { ordersModel } from "./ordersModel";

export interface userModel {
    _id: string,
    name?: string,
    email: string,
    password: string,
<<<<<<< HEAD
    phone?: number,
    address?: string,
=======
    address?: string,
    phone: number,
    
>>>>>>> 945eb7379754c8fa87ea0770f4d15249ac9f8d31
}