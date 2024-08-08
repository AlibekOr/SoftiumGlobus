export interface ICartType {
    id: number,
    name: string,
    price: number,
    amount: number,
    images: [],
    qty: number,
    cart_items: number,
    productId: number,
    tokens: string
}

export interface ICartReq {
    product: number,
    quantity: number,
    headers: string
}