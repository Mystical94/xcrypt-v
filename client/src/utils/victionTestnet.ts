import { Chain } from 'wagmi'

export const victionTestnet = {
  id: 89,
  name: 'Viction Testnet',
  network: 'viction-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Viction',
    symbol: 'VIC',
  },
  rpcUrls: {
    default: { http: ['https://rpc-testnet.viction.xyz'] },
    public: { http: ['https://rpc-testnet.viction.xyz'] },
  },
  blockExplorers: {
    default: {
      name: 'Viction Testnet Explorer',
      url: 'https://scan-ui-testnet.viction.xyz/',
    },
  },
} as const satisfies Chain