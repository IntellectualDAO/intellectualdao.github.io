import { ADAPTER_STATUS, CHAIN_NAMESPACES, CONNECTED_EVENT_DATA, SafeEventEmitterProvider } from '@web3auth/base';
import { LOGIN_MODAL_EVENTS } from '@web3auth/ui';
import { ethers, ContractFactory } from 'ethers';
import intellectual from '@/static/intellectual';

var web3provider = null;

export default {
    state: () => ({
        connected: false,
        address: null,
        balance: null,
        user: null
    }),
    getters: {
        provider: function (state) {
            console.log(web3provider);
            return web3provider ? new ethers.providers.Web3Provider(web3provider) : null;
        }
    },
    actions: {
        async startup({ state, commit, dispatch, getters }, web3auth) {
            await web3auth.initModal();
            web3auth.on(ADAPTER_STATUS.CONNECTED, async (data) => {
                web3provider = web3auth.provider;
                const user = await web3auth.getUserInfo();
                console.log(user);
                const address = (await getters.provider.listAccounts())[0];
                const balance = await getters.provider.getBalance(address);
                commit('SET_USER', {
                    connected: true,
                    address,
                    balance,
                    user
                });
                console.log('connected to wallet', data);
            });
            web3auth.on(ADAPTER_STATUS.CONNECTING, () => {
                console.log('connecting');
            });
            web3auth.on(ADAPTER_STATUS.DISCONNECTED, () => {
                console.log('disconnected');
            });
            web3auth.on(ADAPTER_STATUS.ERRORED, (error) => {
                console.log('errored', error);
            });
            web3auth.on(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, (isVisible) => {
                console.log('HERE', isVisible);
            });
        },
        async logout({ state, commit }) {
            await this.$web3auth.logout();
            commit('UNSET_USER');
        },
        async createIP({ state, commit, getters }, { hash, name, symbol }) {
            const signer = getters.provider.getSigner();
            const signature = await signer.signMessage(hash);

            const r = signature.slice(0, 66);
            const s = '0x' + signature.slice(66, 130);
            const v = parseInt(signature.slice(130, 132), 16);

            const factory = new ContractFactory(intellectual.abi, intellectual.byteCode, getters.provider.getSigner());
            console.log(factory, signature.slice(130, 132), v, r ,s);
            try {
                const contract = await factory.deploy(name, symbol, v, r, s);
                console.log(contract.address);
                console.log(contract.deployTransaction);
            } catch (e) {
                console.log(e);
            }
        }
    },
    mutations: {
        SET_USER: (state, keys) => {
            Object.keys(state).forEach((k) => {
                if (k in keys) {
                    state[k] = keys[k];
                }
            });
        },
        UNSET_USER: (state) => {
            state.connected = false;
            state.address = null;
            state.balance = null;
            state.user = null;
        }
    }
};
