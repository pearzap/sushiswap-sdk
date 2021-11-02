import { ChainId } from '../enums'
import JSBI from 'jsbi'

export * from './addresses'
export * from './kashi'
export * from './natives'
export * from './numbers'
export * from './tokens'

// export const INIT_CODE_HASH: string = '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.ROPSTEN]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.RINKEBY]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.GÖRLI]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.KOVAN]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.FANTOM]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.MATIC]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.MATIC_TESTNET]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.XDAI]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.BSC]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.BSC_TESTNET]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.ARBITRUM]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.MOONBEAM_TESTNET]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.AVALANCHE]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.AVALANCHE_TESTNET]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.HECO]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.HECO_TESTNET]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.HARMONY]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.HARMONY_TESTNET]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.OKEX]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.OKEX_TESTNET]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.CELO]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.PALM]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.MOONRIVER]: '0x3cc9810117f616af982298be4cfcef3c58a6a58dba870ff3c09f5aab8287ab5c',
  [ChainId.FUSE]: '0x1901958ef8b470f2c0a3875a79ee0bd303866d85102c0f1ea820d317024d50b5'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const LAMBDA_URL = 'https://9epjsvomc4.execute-api.us-east-1.amazonaws.com/dev'

export const SOCKET_URL = 'wss://hfimt374ge.execute-api.us-east-1.amazonaws.com/dev'
