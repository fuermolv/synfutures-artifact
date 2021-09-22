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
  pairConfig: { [key in ORACLE_TYPE]?: PairConfig };
  contractAddress: { [key in PRODUCT_TYPE]?: ContractAddress };
  defaultPair: DefaultPair;
}

export interface ContractAddress {
  globalConfig: string;
  oracleController: string;
  factory: string;
  reader: string;
  bitcoinMiningTracker?: string;
}

export interface OracleConfig {
  name: string;
  symbol: string;
  oracleType: ORACLE_TYPE;
  logoURI: string;
}

export interface PairConfig extends OracleConfig {
  baseTokens: Token[];
  quoteTokens: Token[];
}

export interface ChainParams {
  marginConfig: { [key: string]: MarginConfig };
  globalConfig: GlobalConfig;
  dexFactory: string;
  chainlinkFeeders: { [key: string]: string };
  products: PRODUCT_TYPE[];
}

export interface MarginConfig {
  allowed: boolean;
  alignToFriday: boolean;
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

export interface DefaultPair {
  oracleType: ORACLE_TYPE;
  base: Token;
  quote: Token;
}
