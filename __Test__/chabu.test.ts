import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Shabu } from "../shabu"

describe("shabu price ", () => {
    it("should be price ", async () => {
        let mock = new MockAdapter(axios)
        mock.onPost('/getPrice', {
            orderId: 1,
            tableNo: 1,
            person: 2,
        }).reply(200, {
            statusCode: 1,
            status: 'success',
            msg: '',
            data: {
                price: 340,
                serviceCharge: 10
            }
        })

        const expectedResult = 748;
        const result = await Shabu(1, 1, 2)

        expect(result.net).toEqual(expectedResult);
    })
})