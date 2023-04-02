import axois from "axios";

export const saleCloth = async (productId: number, productName: string, quantity: number) => {
    const discount = await axois.post('/get-discount', {
        productId: productId,
        productName: productName,
        quantity: quantity,
    })

    console.log("discount:: ", discount.data.data.discount)
    const mock = {
        productId: productId,
        productName: productName,
        price: discount.data.data.price,
        quantity: quantity,
        discount: discount.data.data.discount,
        net: (discount.data.data.price - (discount.data.data.price * discount.data.data.discount / 100))
    }
    return mock
}