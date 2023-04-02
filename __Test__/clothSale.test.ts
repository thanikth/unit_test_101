import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { saleCloth } from '../clothSale'


describe("price on sales", () => {
    it("should 10% off", async () => {
        let mock = new MockAdapter(axios)
        mock.onPost('/get-discount', {
            productId: 1,
            productName: 'Levi',
            quantity: 1,
        }).reply(200, {
            statusCode: 1,
            status: "success",
            msg: "",
            data: {
                discount: 10,
                price: 100,
            }
        })
        const expectedResult = 90

        const result = await saleCloth(1, 'Levi', 1);

        expect(result.net).toEqual(expectedResult);
    })
})