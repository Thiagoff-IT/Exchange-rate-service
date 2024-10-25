export class GetExchangeDto {
    base: string;
    target: string;
    date?: string; // opcional para histórico
}