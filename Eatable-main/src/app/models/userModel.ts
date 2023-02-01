import { ordersModel } from "./ordersModel";

export interface userModel {
    _id: string,
    name?: string,
    email: string,
    password: string,
    phone?: number,
    address?: string,
}