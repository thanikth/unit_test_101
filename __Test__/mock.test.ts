import MockAdapter from "axios-mock-adapter";
import axois from "axios";

describe('Test MockAPI', () => {
    let mock = new MockAdapter(axois)

    //จะวนเท่า it
    beforeEach(() => {
        mock.reset();
    })

    //จะทำงาน 1 รอบ
    // beforeAll(() => {
    //     mock.reset();
    // })

    it("should get requests", async () => {
        //arange
        mock.onGet('/users').reply(200, {
            statusCode: 1,
            status: "success",
            msg: "",
            data: [
                {
                    id: 1,
                    name: "John",
                }
            ]
        });

        const expectedResult = "John"

        //action
        const result = await axois.get('/users')

        expect(result.data.data[0].name).toBe(expectedResult);
    })

    it('should post request', async () => {
        mock.onPost('/add-users', {
            id: 2,
            name: 'Max'
        }).reply(200, {
            statusCode: 1,
            status: "success",
            msg: "",
            data: [
                {
                    id: 2,
                    name: "Max",
                }
            ]
        });

        const expectedResult = 1;

        const result = await axois.post('/add-users', {
            id: 2,
            name: 'Max'
        })

        expect(result.data.statusCode).toBe(expectedResult);
    })
})