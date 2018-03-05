export class CurrencyTimestamp {
    constructor(date: string = "", value: number = 0) {
        this.timestamp = date;
        this.value = value;
    }
    timestamp: string;
    value: number;
}