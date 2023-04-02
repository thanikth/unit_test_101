import { put, get } from "../circular";

describe("circular buffer", () => {
    it("should be 2", () => {
        put(1);
        put(2);
        put(3);
        put(4);
        put(5);
        put(6);
        expect(get()).toBe(3);

    });

});