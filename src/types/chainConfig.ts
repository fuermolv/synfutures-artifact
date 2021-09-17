import { CHAIN_ID, ORACLE_TYPE, PRODUCT_TYPE } from '../constants';
import { Token } from './token';

export interface ChainConfig {
  chainId: CHAIN_ID;
  chainName: string;
  nativeToken: Token;
  rpcUrl: string;
  infuraUrl: string;
  blockExplorerUrl: string;
  blockTime: number;
  subgraphUrl: string;
  chainParams: ChainParams;
  pairConfig: PairConfig;
  contractAddress: ContractAddressConfig;
}

export type ContractAddressConfig = {
  [key in PRODUCT_TYPE]?: ContractAddress;
};

export interface ContractAddress {
  globalConfig: string;
  oracleController: string;
  factory: string;
  reader: string;
}

export type PairConfig = {
  [key in ORACLE_TYPE]?: PairConfigInfo;
};

export interface PairConfigInfo {
  name: string;
  baseTokens: Token[];
  quoteTokens: Token[];
  default?: boolean;
}

export interface ChainParams {
  margins: Token[];
  globalConfig: GlobalConfig;
  dexFactory: string;
  chainlinkFeeders: ChainlinkFeeder;
  products: PRODUCT_TYPE[];
}

export interface ChainlinkFeeder {
  [key: string]: string;
}

export interface GlobalConfig {
  emaTimeConstant: number;
  poolFeeRatio: number;
  poolReserveFeeRatio: number;
  maxPriceSlippageRatio: number;
  maxInitialDailyBasis: number;
  maxUserTradeOpenInterestRatio: number;
  minAmmOpenInterestRatio: number;
  maxSpotIndexChangePerSecondRatio: number;
  initialMarginRatio: number;
  maintenanceMarginRatio: number;
  bankruptcyLiquidatorRewardRatio: number;
  insurancePremiumRatio: number;
}
