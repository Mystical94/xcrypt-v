import victionLogo from '../svg/viction-logo.png';
import { AddrMapType, MapType } from './types';

export const networkIcons: MapType = {
  89: victionLogo
}

export const stealthAddress: AddrMapType = {
  0: '0x0',
  // Deployed StealthAddress Contract on Viction Testnet
  89: '0x4cAb5791640C439D7Aece517d70BFEfcA4b0Fb6b'
}

export const explorer: MapType = {
  89: 'scan-ui-testnet.viction.xyz'
}