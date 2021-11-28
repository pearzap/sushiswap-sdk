import { ChainId } from '../enums'
import JSBI from 'jsbi'

export * from './addresses'
export * from './kashi'
export * from './natives'
export * from './numbers'
export * from './tokens'

// export const INIT_CODE_HASH: string = '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.ROPSTEN]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.RINKEBY]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.GÖRLI]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.KOVAN]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.FANTOM]: '0x1309b1edc402c3616b83a3b9517fb93cc5195656bd5f4f1c77fd43b39c2814ad',
  [ChainId.MATIC]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.MATIC_TESTNET]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.XDAI]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.BSC]: '0x1309b1edc402c3616b83a3b9517fb93cc5195656bd5f4f1c77fd43b39c2814ad',
  [ChainId.BSC_TESTNET]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.ARBITRUM]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.MOONBEAM_TESTNET]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.AVALANCHE]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.AVALANCHE_TESTNET]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.HECO]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.HECO_TESTNET]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.HARMONY]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.HARMONY_TESTNET]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.OKEX]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.OKEX_TESTNET]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.CELO]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.PALM]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
  [ChainId.MOONRIVER]: '0x56d615879c9995e8ee317796b8b1b23fc2317d36828f0c4fea097afc675876c4',
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
