import { ChainId } from '../enums'
import JSBI from 'jsbi'

export * from './addresses'
export * from './kashi'
export * from './natives'
export * from './numbers'
export * from './tokens'

// export const INIT_CODE_HASH: string = '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.ROPSTEN]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.RINKEBY]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.GÖRLI]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.KOVAN]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.FANTOM]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.MATIC]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.MATIC_TESTNET]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.XDAI]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.BSC]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.BSC_TESTNET]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.ARBITRUM]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.MOONBEAM_TESTNET]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.AVALANCHE]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.AVALANCHE_TESTNET]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.HECO]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.HECO_TESTNET]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.HARMONY]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.HARMONY_TESTNET]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.OKEX]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.OKEX_TESTNET]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.CELO]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.PALM]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
  [ChainId.MOONRIVER]: '0xb66b690654dadc592611c160ff2a9d856c7722330d23e253de7811c9dba36da1',
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
