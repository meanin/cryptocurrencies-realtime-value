export interface Bitcoin {
    time: TimeStamp;
    disclaimer: string;
    chartName: string;
    bpi: Bpi;
}

export interface TimeStamp {
    updated: Date;
    updatedISO: Date;
    updateduk: Date;
}

export interface BitcoinValue {
    code: string;
    symbol: string;
    rate: string;
    description: string;
    rate_float: DoubleRange;
}  

export interface Bpi {
    USD: BitcoinValue;
    EUR: BitcoinValue;
    GBP: BitcoinValue;
}