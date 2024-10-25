import { Module } from '@nestjs/common';
import { ExchangeModule } from './exchange/exchange.module';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [ExchangeModule, DatabaseModule],
})
export class AppModule {}
