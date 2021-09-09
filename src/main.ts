import * as ethereumConfig from './config/ethereum.json';
import * as kovanConfig from './config/kovan.json';
import * as polygonConfig from './config/polygon.json';
import * as bscConfig from './config/bsc.json';
import * as arbitrumConfig from './config/arbitrum.json';


import * as ethereumAsset from './asset/ethereum.json';
import * as kovanAsset from './asset/kovan.json';
import * as polygonAsset from './asset/polygon.json';
import * as bscAsset from './asset/bsc.json';
import * as arbitrumAsset from './asset/arbitrum.json';


import  * as ERC20_ABI from './abi/ERC20.json';
import  * as GLOBAL_CONFIG_ABI from './abi/GlobalConfig.json';
import  * as AMM_ABI from './abi/Amm.json';
import  * as FACTORY_ABI from './abi/Factory.json';
import  * as READER_ABI from './abi/Reader.json';
import  * as FUTURES_ABI from './abi/Futures.json';
import  * as KOVAN_ERC20_ABI from './abi/Kovan_ERC20.json';
import  * as BTCHASH_ORACLE_ABI from './abi/oracle/bitcoin-mining-tracker.json';

export {
    ethereumConfig,
    kovanConfig,
    polygonConfig,
    bscConfig,
    arbitrumConfig,

    ethereumAsset,
    kovanAsset,
    polygonAsset,
    bscAsset,
    arbitrumAsset,

    ERC20_ABI, 
    GLOBAL_CONFIG_ABI, 
    AMM_ABI, 
    FACTORY_ABI, 
    READER_ABI, 
    FUTURES_ABI, 
    KOVAN_ERC20_ABI,
    BTCHASH_ORACLE_ABI
  };