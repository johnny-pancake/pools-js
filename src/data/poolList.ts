import { StaticTokenInfo, KnownNetwork } from '../types';
import { StaticPoolInfo } from '..';
import {
  NETWORKS,
  TEST_TOKEN_DECIMALS
} from '../utils';
const { ARBITRUM, ARBITRUM_RINKEBY, MAINNET, RINKEBY, KOVAN } = NETWORKS
import { tokenMap } from './tokenList';

const ONE_HOUR=3600; // seconds
const FIVE_MINUTES=300; // seconds
const THIRTY_SECONDS=30; // seconds

export const poolList: Record<KnownNetwork, StaticPoolInfo[]> = {
    [ARBITRUM]: [
        {
            name: '1-BTC/USDC',
            address: '0x146808f54DB24Be2902CA9f595AD8f27f56B2E76',
            leverage: 1,
            updateInterval: ONE_HOUR,
            frontRunningInterval: FIVE_MINUTES,
            keeper: '0x759E817F0C40B11C775d1071d466B5ff5c6ce28e',
            committer: {
                address: '0x539Bf88D729B65F8eC25896cFc7a5f44bbf1816b',
            },
            longToken: {
                name: '1-LONG-BTC/USD',
                address: '0x1616bF7bbd60E57f961E83A602B6b9Abb6E6CAFc',
                symbol: '1L-BTC/USD',
                decimals: tokenMap[ARBITRUM].USDC.decimals,
            },
            shortToken: {
                name: '1-SHORT-BTC/USD',
                address: '0x052814194f459aF30EdB6a506eABFc85a4D99501',
                symbol: '1S-BTC/USD',
                decimals: tokenMap[ARBITRUM].USDC.decimals,
            },
            quoteToken: tokenMap[ARBITRUM].USDC,
        },
        {
            name: '3-BTC/USDC',
            address: '0x70988060e1FD9bbD795CA097A09eA1539896Ff5D',
            leverage: 3,
            updateInterval: ONE_HOUR,
            frontRunningInterval: FIVE_MINUTES,
            keeper: '0x759E817F0C40B11C775d1071d466B5ff5c6ce28e',
            committer: {
                address: '0xFDE5D7B7596AF6aC5df7C56d76E14518A9F578dF',
            },
            longToken: {
                name: '3-LONG-BTC/USD',
                address: '0x05A131B3Cd23Be0b4F7B274B3d237E73650e543d',
                symbol: '3L-BTC/USD',
                decimals: tokenMap[ARBITRUM].USDC.decimals,
            },
            shortToken: {
                name: '3-SHORT-BTC/USD',
                address: '0x85700dC0bfD128DD0e7B9eD38496A60baC698fc8',
                symbol: '3S-BTC/USD',
                decimals: tokenMap[ARBITRUM].USDC.decimals,
            },
            quoteToken: tokenMap[ARBITRUM].USDC,
        },
        {
            name: '1-ETH/USDC',
            address: '0x3A52aD74006D927e3471746D4EAC73c9366974Ee',
            leverage: 1,
            updateInterval: ONE_HOUR,
            frontRunningInterval: FIVE_MINUTES,
            keeper: '0x759E817F0C40B11C775d1071d466B5ff5c6ce28e',
            committer: {
                address: '0x047Cd47925C2390ce26dDeB302b8b165d246d450',
            },
            longToken: {
                name: '1-LONG-ETH/USD',
                address: '0x38c0a5443c7427e65A9Bf15AE746a28BB9a052cc',
                symbol: '1L-ETH/USD',
                decimals: tokenMap[ARBITRUM].USDC.decimals,
            },
            shortToken: {
                name: '1-SHORT-ETH/USD',
                address: '0xf581571DBcCeD3A59AaaCbf90448E7B3E1704dcD',
                symbol: '1S-ETH/USD',
                decimals: tokenMap[ARBITRUM].USDC.decimals,
            },
            quoteToken: tokenMap[ARBITRUM].USDC,
        },
        {
            name: '3-ETH/USDC',
            address: '0x54114e9e1eEf979070091186D7102805819e916B',
            leverage: 3,
            updateInterval: ONE_HOUR,
            frontRunningInterval: FIVE_MINUTES,
            keeper: '0x759E817F0C40B11C775d1071d466B5ff5c6ce28e',
            committer: {
                address: '0x72c4e7Aa6c743DA4e690Fa7FA66904BC3f2C9C04',
            },
            longToken: {
                name: '3-LONG-ETH/USD',
                address: '0xaA846004Dc01b532B63FEaa0b7A0cB0990f19ED9',
                symbol: '3L-ETH/USD',
                decimals: tokenMap[ARBITRUM].USDC.decimals,
            },
            shortToken: {
                name: '3-SHORT-ETH/USD',
                address: '0x7d7E4f49a29dDA8b1eCDcf8a8bc85EdcB234E997',
                symbol: '3S-ETH/USD',
                decimals: tokenMap[ARBITRUM].USDC.decimals,
            },
            quoteToken: tokenMap[ARBITRUM].USDC,
        },
        {
            name: '3-TOKE/USD',
            address: '0xc11B9Dc0F566B5084FC48Be1F821a8298fc900bC',
            leverage: 3,
            updateInterval: ONE_HOUR,
            frontRunningInterval: FIVE_MINUTES,
            keeper: '0x759E817F0C40B11C775d1071d466B5ff5c6ce28e',
            committer: {
                address: '0xb913D14B3a3bB1D06B2dB1Fd141f2432bB25F5F2',
            },
            longToken: {
                name: '3L-TOKE/USD',
                address: '0xCB78B42e374AB268B01336cE31C7ba329C1d4beC',
                symbol: '3L-TOKE/USD',
                decimals: tokenMap[ARBITRUM].USDC.decimals,
            },
            shortToken: {
                name: '3S-TOKE/USD',
                address: '0x16cd57B7Cf7c0954878C254b2318676007DF2af3',
                symbol: '3S-TOKE/USD',
                decimals: tokenMap[ARBITRUM].USDC.decimals,
            },
            quoteToken: tokenMap[ARBITRUM].USDC,
        },
        {
            name: '3-LINK/USD',
            address: '0x7b6FfAd58ce09f2a71c01e61F94b1592Bd641876',
            leverage: 3,
            updateInterval: ONE_HOUR,
            frontRunningInterval: FIVE_MINUTES,
            keeper: '0x759E817F0C40B11C775d1071d466B5ff5c6ce28e',
            committer: {
                address: '0x8186948382f67c7160Fc7b872688AdC293aDF789',
            },
            longToken: {
                name: '3L-LINK/USD',
                address: '0x9d6CCCb49Abd383C51079904e341cAb1d02d92c6',
                symbol: '3L-LINK/USD',
                decimals: tokenMap[ARBITRUM].USDC.decimals,
            },
            shortToken: {
                name: '3S-LINK/USD',
                address: '0x6d3bED2465d8c5e3Ef7F8DDC2CD3f8b38E90EaA5',
                symbol: '3S-LINK/USD',
                decimals: tokenMap[ARBITRUM].USDC.decimals,
            },
            quoteToken: tokenMap[ARBITRUM].USDC,
        },
        {
            name: '3-AAVE/USD',
            address: '0x23A5744eBC353944A4d5baaC177C16b199AfA4ed',
            leverage: 3,
            updateInterval: ONE_HOUR,
            frontRunningInterval: FIVE_MINUTES,
            keeper: '0x759E817F0C40B11C775d1071d466B5ff5c6ce28e',
            committer: {
                address: '0x993321599Fc9D0c5a496044308f16C70575DABBa',
            },
            longToken: {
                name: '3L-AAVE/USD',
                address: '0xd15239e444Ac687874fee8A415f8F59fd01E3E51',
                symbol: '3L-AAVE/USD',
                decimals: tokenMap[ARBITRUM].FRAX.decimals,
            },
            shortToken: {
                name: '3S-AAVE/USD',
                address: '0x4eBA8B7B13C565041D74b92dCA6C9E4B8885B3cC',
                symbol: '3S-AAVE/USD',
                decimals: tokenMap[ARBITRUM].FRAX.decimals,
            },
            quoteToken: tokenMap[ARBITRUM].FRAX,
        },
        {
            name: '1-EUR/USD',
            address: '0x2C740EEe739098Ab8E90f5Af78ac1d07835d225B',
            leverage: 1,
            updateInterval: ONE_HOUR,
            frontRunningInterval: FIVE_MINUTES,
            keeper: '0x759E817F0C40B11C775d1071d466B5ff5c6ce28e',
            committer: {
                address: '0xb894D3775862FFdE084eD31f9e42388e592E3137',
            },
            longToken: {
                name: '1L-EUR/USD',
                address: '0x6F680d315545309307F42840b234412090C0bBe8',
                symbol: '1L-EUR/USD',
                decimals: tokenMap[ARBITRUM].USDC.decimals,
            },
            shortToken: {
                name: '1S-EUR/USD',
                address: '0x7C5C24C5F3DbF4A99DDa5127D44e55b9a797eC4d',
                symbol: '1S-EUR/USD',
                decimals: tokenMap[ARBITRUM].USDC.decimals,
            },
            quoteToken: tokenMap[ARBITRUM].USDC,
        },
        {
            name: '3-EUR/USD',
            address: '0xA45B53547EC002403531D453c118AC41c03B3346',
            leverage: 3,
            updateInterval: ONE_HOUR,
            frontRunningInterval: FIVE_MINUTES,
            keeper: '0x759E817F0C40B11C775d1071d466B5ff5c6ce28e',
            committer: {
                address: '0x149BDeAC3E90522D8043452910Ef41f7cb75E3f3',
            },
            longToken: {
                name: '3L-EUR/USD',
                address: '0x316C96E328071DC6403587c243130712A9D03fF3',
                symbol: '3L-EUR/USD',
                decimals: tokenMap[ARBITRUM].USDC.decimals,
            },
            shortToken: {
                name: '3S-EUR/USD',
                address: '0xA8C483D29bFaD4Ea159C1a002f4769C33F808A1e',
                symbol: '3S-EUR/USD',
                decimals: tokenMap[ARBITRUM].USDC.decimals,
            },
            quoteToken: tokenMap[ARBITRUM].USDC,
        },
    ],
    [ARBITRUM_RINKEBY]: [
        {
            // 1x
            name: '1-BTC/USDC',
            address: '0x1b9A08Bd1b976fd91a355625509FbFcbbF34fb20',
            leverage: 1,
            updateInterval: FIVE_MINUTES,
            frontRunningInterval: THIRTY_SECONDS,
            keeper: '0xf3A03510d21c235C02203FF6725C9D1c0F4E49D9',
            committer: {
                address: '0x89bf5ecE20372ACf46fA8591cba71AF931066879',
            },
            longToken: {
                name: '1-LONG-BTC/USD',
                address: '0x9D4a8285eB3e77206A638721406D110cE90725A9',
                symbol: '1L-BTC/USD',
                decimals: TEST_TOKEN_DECIMALS,
            },
            shortToken: {
                name: '1-SHORT-BTC/USD',
                address: '0x668759F808F21af7e59049C4F02e7E211a142EF1',
                symbol: '1S-BTC/USD',
                decimals: TEST_TOKEN_DECIMALS,
            },
            quoteToken: {
                name: 'USDC',
                symbol: 'USDC',
                address: '0x191f0Db87d3136541354F89F43a034E11287788D',
                decimals: TEST_TOKEN_DECIMALS,
            },
        },
        {
            // 3x
            name: '3-BTC/USDC',
            address: '0xd0983C3E9E4Af753E6e74D741a39c3053b06dFcf',
            leverage: 3,
            updateInterval: FIVE_MINUTES,
            frontRunningInterval: THIRTY_SECONDS,
            keeper: '0xf3A03510d21c235C02203FF6725C9D1c0F4E49D9',
            committer: {
                address: '0xee39278864665cC2BB9af3E4aD857cBC3222a3DA',
            },
            longToken: {
                name: '3-LONG-BTC/USD',
                address: '0x09c6EF9215ce74Fd8f9991D24ad32e6aF710d1B6',
                symbol: '3L-BTC/USD',
                decimals: TEST_TOKEN_DECIMALS,
            },
            shortToken: {
                name: '3-SHORT-BTC/USD',
                address: '0x24f7dA47Db30F0Ef8f595A9AB0F5dE7c1b4E38Bc',
                symbol: '3S-BTC/USD',
                decimals: TEST_TOKEN_DECIMALS,
            },
            quoteToken: {
                name: 'USDC',
                symbol: 'USDC',
                address: '0x191f0Db87d3136541354F89F43a034E11287788D',
                decimals: TEST_TOKEN_DECIMALS,
            },
        },
        {
            // 1x
            name: '1-ETH/USDC',
            address: '0x34eE510e1d51904C50d9CD03199dE5147A4E15eD',
            leverage: 1,
            updateInterval: FIVE_MINUTES,
            frontRunningInterval: THIRTY_SECONDS,
            keeper: '0xf3A03510d21c235C02203FF6725C9D1c0F4E49D9',
            committer: {
                address: '0x5F6a868e4AEa2AFCF56a7937c01896E564354542',
            },
            longToken: {
                name: '1-LONG-ETH/USD',
                address: '0x34966D8A3Ff227f13A5F8471FE6fa9D33a7f0B85',
                symbol: '1L-ETH/USD',
                decimals: TEST_TOKEN_DECIMALS,
            },
            shortToken: {
                name: '1-SHORT-ETH/USD',
                address: '0xf8e1F91966aEe3aD4CD83C9B09Cb947262aeB10A',
                symbol: '1S-ETH/USD',
                decimals: TEST_TOKEN_DECIMALS,
            },
            quoteToken: {
                name: 'USDC',
                symbol: 'USDC',
                address: '0x191f0Db87d3136541354F89F43a034E11287788D',
                decimals: TEST_TOKEN_DECIMALS,
            },
        },
        {
            // 3x
            name: '3-ETH/USDC',
            address: '0xe3cAD84c29775399a25c6Ff040FE141b4eD10047',
            leverage: 3,
            updateInterval: FIVE_MINUTES,
            frontRunningInterval: THIRTY_SECONDS,
            keeper: '0xf3A03510d21c235C02203FF6725C9D1c0F4E49D9',
            committer: {
                address: '0xd063eAa3962F8715C88096899EB5A0D9475D5B6B',
            },
            longToken: {
                name: '3-LONG-ETH/USD',
                address: '0x67d4101350F2494564D9FA6281E23152dC561249',
                symbol: '3L-ETH/USD',
                decimals: TEST_TOKEN_DECIMALS,
            },
            shortToken: {
                name: '3-SHORT-ETH/USD',
                address: '0xcd1070e52861cfA33063b3F0EF3E6236Ec99924A',
                symbol: '3S-ETH/USD',
                decimals: TEST_TOKEN_DECIMALS,
            },
            quoteToken: {
                name: 'USDC',
                symbol: 'USDC',
                address: '0x191f0Db87d3136541354F89F43a034E11287788D',
                decimals: TEST_TOKEN_DECIMALS,
            },
        },
    ],
    [MAINNET]: [],
    [RINKEBY]: [],
    [KOVAN]: [],
};

// construct pool map so it is easier to access specific pools
export const poolMap: Record<KnownNetwork, Record<string, StaticPoolInfo>> = Object.assign(
    {},
    ...Object.keys(poolList).map((key) => ({
        [key]: Object.assign(
            {},
            ...poolList[key as KnownNetwork].map((poolInfo) => ({
                [poolInfo.address]: {
                    ...poolInfo,
                },
            })),
        ),
    })),
);

// construct token list from the assets listed within the poolsList
export const poolTokenList: Record<KnownNetwork, Record<string, StaticTokenInfo>> = Object.assign(
    {},
    ...Object.keys(poolList).map((key) => ({
        [key]: Object.assign(
            {},
            ...poolList[key as KnownNetwork].map((poolInfo) => ({
                ...(poolInfo.shortToken ? {
                    [poolInfo.shortToken.address]: {
                        ...(poolInfo.shortToken || {}),
                    },
                } : {}),
                ...(poolInfo.longToken ? {
                    [poolInfo.longToken.address]: {
                        ...(poolInfo.longToken || {}),
                    },
                } : {}),
            })),
        ),
    })),
);
