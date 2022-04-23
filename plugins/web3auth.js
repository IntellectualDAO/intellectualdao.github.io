import { ADAPTER_STATUS, CHAIN_NAMESPACES, CONNECTED_EVENT_DATA, SafeEventEmitterProvider } from '@web3auth/base';
import { LOGIN_MODAL_EVENTS } from '@web3auth/ui';
import { Web3Auth } from '@web3auth/web3auth';

export default async ({ store }, inject) => {
    const clientId = 'BONGS-3AXZ7lA9iZ16a9Ap15WEfg4PfBS288eB7jL_O3NBRlnXLi9qRkIpnbIwHlKd8fXYzYHUz185t6pgyDrvg';
    const web3AuthCtorParams = {
        clientId,
        chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: '0x13881',
            rpcTarget: `https://rpc-mumbai.maticvigil.com/`,
            displayName: 'mumbai',
            blockExplorer: 'https://mumbai.polygonscan.com/',
            ticker: 'MATIC',
            tickerName: 'MATIC'
        }
    };

    let web3auth = new Web3Auth(web3AuthCtorParams);

    inject('web3auth', web3auth);
    store.dispatch('startup', web3auth);

};
