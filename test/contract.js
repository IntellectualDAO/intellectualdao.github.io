import { ethers, ContractFactory } from 'ethers';

async function createIP(name, symbol) {
    // const signer = getters.provider.getSigner();
    // const signature = await signer.signMessage(hash);

    // const r = signature.slice(0, 66);
    // const s = '0x' + signature.slice(66, 130);
    // const v = parseInt(signature.slice(130, 132), 16);

    const r = '0x13fcdfa6512dc001bc3653449715b08789c64e95b38a56b150c036f56d21ac2d' // signature.slice(0, 66);
    const s = '0x6368de08143b6883383225ec9c9c489f33cd6424252eacbdc4fca3ed6a30010c' // '0x' + signature.slice(66, 130);
    const v = 27 // parseInt(signature.slice(130, 132), 16);


    const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.matic.today')
    const signer = new ethers.Wallet('private key', provider);

    const factory = new ContractFactory(intellectual.abi, intellectual.byteCode, signer);
    console.log(factory, signature.slice(130, 132), v, r ,s);
    try {
        const contract = await factory.deploy(name, symbol, v, r, s);
        console.log(contract.address);
        console.log(contract.deployTransaction);
    } catch (e) {
        console.log(e);
    }
}

result = createIP('test', 'TEST');

console.log(result);
