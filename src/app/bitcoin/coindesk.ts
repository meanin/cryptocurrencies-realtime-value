export class Bitcoin {
    time: TimeStamp = new TimeStamp();
    disclaimer: string = "";
    chartName: string = "";
    bpi: Bpi = new Bpi();
}

export class HistoricalBpi {
    bpi: { [key: string]: number };
    disclaimer: string = "";
    time: TimeStamp = new TimeStamp();
}

export class TimeStamp {
    updated: string = "";
    updatedISO: Date = new Date();
    updateduk: Date = new Date();
}

export class BitcoinValue {
    code: string = "";
    symbol: string = "";
    rate: string = "";
    description: string = "";
    rate_float: number = 0;
}  

export class Bpi {
    USD: BitcoinValue = new BitcoinValue();
    EUR: BitcoinValue = new BitcoinValue();
    GBP: BitcoinValue = new BitcoinValue();
}