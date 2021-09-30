/**
 * Product Type
 */
export enum PRODUCT_TYPE {
  BASIC = 'Basic',
  BTCHASHRATE = 'BtcHashRate',
}

/**
 * Oracle Type
 */
export enum ORACLE_TYPE {
  CHAINLINK = 'CHAINLINK',
  UNISWAPV2 = 'UNISWAPV2',
  SYNFUTURES = 'SYNFUTURES',
  PANCAKEV2 = 'PANCAKEV2',
  SUSHISWAP = 'SUSHISWAP',
}

/**
 * Chain Id
 */
export enum CHAIN_ID {
  ETHEREUM = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BSC = 56,
  POLYGON = 137,
  ARBITRUM = 42161,
}
