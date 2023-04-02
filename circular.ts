const bufferSize: number = 5;
let read: number = 0;
let write: number = 0;
let arr: number[] = [];

//circular buffer
export function put(value: number) {
    if (write === bufferSize) {
        read++;
        write = 0;
    }
    arr[write] = value;
    write++;
}

export function get(): number {
    if (read === bufferSize) {
        read = 0;
    }
    return arr[read++];
}