import util from 'util';
import { ethereumConfig, kovanConfig, polygonConfig, bscConfig, arbitrumConfig, oracleConfig } from '../config';
import { ethereumAsset, kovanAsset, polygonAsset, bscAsset, arbitrumAsset } from '../asset';
import { ChainConfig, OracleConfig, PairConfig, Token } from '../types';
import { CHAIN_ID, ORACLE_TYPE, PRODUCT_TYPE } from '../constants';

/**
 * get chain id by name
 * @param chain string
 * @returns
 */
export function getChainId(chain: string): CHAIN_ID {
  return CHAIN_ID[chain.toUpperCase()];
}

/**
 * get chain config by chain id
 * @param chainId
 * @returns
 */
export function getChainConfig(chainId: CHAIN_ID): ChainConfig {
  switch (chainId) {
    case CHAIN_ID.ETHEREUM: {
      return mapChainConfig(chainId, ethereumConfig);
    }
    case CHAIN_ID.BSC: {
      return mapChainConfig(chainId, bscConfig);
    }
    case CHAIN_ID.POLYGON: {
      return mapChainConfig(chainId, polygonConfig);
    }
    case CHAIN_ID.ARBITURM: {
      return mapChainConfig(chainId, arbitrumConfig);
    }
    case CHAIN_ID.KOVAN: {
      return mapChainConfig(chainId, kovanConfig);
    }
    default: {
      throw new Error('Unsupported Network.');
    }
  }
}

/**
 * map json object to ChainConfig
 * @param chainId
 * @param jsonConfig
 * @returns
 */
function mapChainConfig(chainId: CHAIN_ID, jsonConfig) {
  const config: ChainConfig = {
    ...jsonConfig,
    chainId: chainId,
    nativeToken: getToken(chainId, jsonConfig.nativeToken),
    chainParams: {
      marginConfig: jsonConfig.chainParams.marginConfig,
      dexFactory: jsonConfig.chainParams.dexFactory,
      globalConfig: jsonConfig.chainParams.globalConfig,
      chainlinkFeeders: jsonConfig.chainParams.chainlinkFeeders,
      products: jsonConfig.chainParams.products.map((productType: string) => PRODUCT_TYPE[productType.toUpperCase()]),
    },
    pairConfig: mapPairConfig(chainId, jsonConfig.pairConfig),
    contractAddress: jsonConfig.contractAddress,
    defaultPair: {
      oracleType: ORACLE_TYPE[jsonConfig.defaultPair.oracleType],
      base: getToken(chainId, jsonConfig.defaultPair.base),
      quote: getToken(chainId, jsonConfig.defaultPair.quote),
    },
  };
  return config;
}

function mapPairConfig(chainId: CHAIN_ID, pairConfig): { [key in ORACLE_TYPE]?: PairConfig } {
  const result = {};
  for (const oracleType of Object.keys(pairConfig)) {
    result[oracleType] = mapPairConfigInfo(chainId, oracleType as ORACLE_TYPE, pairConfig[oracleType]);
  }
  return result;
}

/**
 * map json object to PairConfig
 * @param chainId
 * @param config
 * @returns
 */
function mapPairConfigInfo(chainId: CHAIN_ID, oracleType: ORACLE_TYPE, config): PairConfig {
  const oracleConfig = getOracleConfig(oracleType);
  const pairConfig: PairConfig = {
    ...oracleConfig,
    baseTokens: config.baseTokens.map((symbol) => getToken(chainId, symbol)),
    quoteTokens: config.quoteTokens.map((symbol) => getToken(chainId, symbol)),
  };
  return pairConfig;
}

/**
 * get available assets on a specific chain
 * @param chainId
 * @returns
 */
export function getAssets(chainId: CHAIN_ID): Token[] {
  switch (chainId) {
    case CHAIN_ID.ETHEREUM: {
      const config: Token[] = ethereumAsset;
      return config;
    }
    case CHAIN_ID.BSC: {
      const config: Token[] = bscAsset;
      return config;
    }
    case CHAIN_ID.POLYGON: {
      const config: Token[] = polygonAsset;
      return config;
    }
    case CHAIN_ID.ARBITURM: {
      const config: Token[] = arbitrumAsset;
      return config;
    }
    case CHAIN_ID.KOVAN: {
      const config: Token[] = kovanAsset;
      return config;
    }
    default: {
      throw new Error('Unsupported Network.');
    }
  }
}

/**
 * get token info by symbol and network
 * @param chainId
 * @param symbol
 * @returns
 */
export function getToken(chainId: CHAIN_ID, symbol: string): Token | undefined {
  const assets = getAssets(chainId);
  for (const token of assets) {
    if (token.symbol.toUpperCase() === symbol.toUpperCase()) {
      return token;
    }
  }
  return undefined;
}

/**
 * get token info by address and network
 * @param chainId
 * @param address
 * @returns
 */
export function getTokenByAddress(chainId: CHAIN_ID, address: string): Token | undefined {
  const assets = getAssets(chainId);
  for (const token of assets) {
    if (token.address.toUpperCase() === address.toUpperCase()) {
      return token;
    }
  }
  return undefined;
}

/**
 * get infura rpc url
 * @param chainId
 * @param infuraKey
 * @returns
 */
export function getInfuraUrl(chainId: CHAIN_ID, infuraKey: string): string {
  let url = getChainConfig(chainId).infuraUrl;
  url = util.format(url, infuraKey);
  return url.split(' ')[0];
}

/**
 * get oracle config by oracle type
 * @param oracleType ORACLE_TYPE
 * @returns OracleConfig
 */
export function getOracleConfig(oracleType: ORACLE_TYPE): OracleConfig {
  return oracleConfig[oracleType];
}
