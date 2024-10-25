import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ExchangeRate } from '../interfaces/exchange.interface';

@Injectable()
export class ExchangeService {
    private apiUrl = 'https://api.exchangeratesapi.io/latest'; // Substitua pela API real

    async getCurrentRate(base: string, target: string): Promise<ExchangeRate> {
        const response = await axios.get(`${this.apiUrl}?base=${base}&symbols=${target}`);
        return response.data;
    }

    async getHistoricalRates(base: string, target: string, date: string): Promise<ExchangeRate> {
        const response = await axios.get(`${this.apiUrl}/${date}?base=${base}&symbols=${target}`);
        return response.data;
    }
}
