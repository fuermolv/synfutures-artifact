export interface Token {
    symbol:  string;
    address: string;
    native?: boolean;
    name: string;
    decimals: number;
    logoURI?: string;
}