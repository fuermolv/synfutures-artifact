export interface ChainConfig {
    chainId:           number;
    chainName:         string;
    nativeCurrency:    string;
    rpcUrl:            string;
    infuraUrl:         string;
    blockExplorerUrl:  string;
    blockTime:         number;
    contractAddresses: ContractAddress[];
    subgraphUrl:       string;
    params:            Params;
    pairConfig:        PairConfig[];
}

export interface ContractAddress {
    type:             string;
    globalConfig:     string;
    oracleController: string;
    factory:          string;
    reader:           string;
}

export interface PairConfig {
    oracleType:  string;
    name:        string;
    baseTokens:  string[];
    quoteTokens: string[];
}

export interface Params {
    margins:          string[];
    globalConfig:     GlobalConfig;
    dexFactory:       string;
    chainlinkFeeders: ChainlinkFeeder[];
    products:         string[];
}

export interface ChainlinkFeeder {
    symbol:  string;
    address: string;
}

export interface GlobalConfig {
    emaTimeConstant:                  number;
    poolFeeRatio:                     number;
    poolReserveFeeRatio:              number;
    maxPriceSlippageRatio:            number;
    maxInitialDailyBasis:             number;
    maxUserTradeOpenInterestRatio:    number;
    minAmmOpenInterestRatio:          number;
    maxSpotIndexChangePerSecondRatio: number;
    initialMarginRatio:               number;
    maintenanceMarginRatio:           number;
    bankruptcyLiquidatorRewardRatio:  number;
    insurancePremiumRatio:            number;
}
