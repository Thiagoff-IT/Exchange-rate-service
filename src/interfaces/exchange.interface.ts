export interface ExchangeRate {
    rates: { [key: string]: number };
    base: string;
    date: string;
}
