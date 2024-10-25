import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { GetExchangeDto } from '../dto/get-exchange.dto';

@Controller('exchange')
export class ExchangeController {
    constructor(private readonly exchangeService: ExchangeService) {}

    @Get('current')
    async getCurrentRate(@Query() query: GetExchangeDto) {
        const { base, target } = query;

        if (!base || !target) {
            throw new BadRequestException('Base and target currencies are required.');
        }

        return this.exchangeService.getCurrentRate(base, target);
    }

    @Get('historical')
    async getHistoricalRate(@Query() query: GetExchangeDto) {
        const { base, target, date } = query;

        if (!base || !target) {
            throw new BadRequestException('Base and target currencies are required.');
        }

        if (date && !this.isValidDate(date)) {
            throw new BadRequestException('Invalid date format. Use YYYY-MM-DD.');
        }

        return this.exchangeService.getHistoricalRates(base, target, date);
    }

    private isValidDate(dateString: string): boolean {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return dateString.match(regex) !== null;
    }
}
