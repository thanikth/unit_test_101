import axios from "axios"

export const Shabu = async (orderId: number, tableNo: number, person: number) => {
    interface IPriceProps {
        price: number,
        serviceCharge: number,
        msg: string
    }

    const price: { data: IPriceProps; status: string; msg: string; } = await axios.post('/getPrice', {
        orderId: orderId,
        tableNo: tableNo,
        person: person
    }).then((data) => {
        return {
            data: data.data.data,
            status: data.data.status,
            msg: data.data.msg
        }
    })

    const serviceCharge = (price.data.serviceCharge * price.data.price) / 100;
    const promotionPrice = (person % 4)
    let net

    if (promotionPrice === 0) {
        let personPay = person - (person / 4);
        net = (personPay * serviceCharge) + (personPay * price.data.price)
    }
    else {
        net = (person * serviceCharge) + (person * price.data.price)
    }

    const mock = {
        orderId: orderId,
        tableNo: tableNo,
        person: person,
        price: price?.data.price,
        serviceCharge: price?.data.serviceCharge,
        net: net
    }

    return mock
}