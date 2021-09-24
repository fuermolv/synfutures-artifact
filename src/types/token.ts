import { CHAIN_ID } from '../constants';
export interface Currency {
  symbol: string;
  decimals: number;
  name?: string;
}
export interface Token extends Currency {
  chainId: CHAIN_ID;
  address: string;
  native?: boolean;
  logoURI?: string;
}
