/*
This instance will create DAPP based modal which uses ropsten network for all
the adapters being passed (unless override while configuring  adapters,
each adapter can be configured to have its own chainConfig, otherwise each adapter
will inherit chainConfig based on the chainNamespace and chainId passed in the
constructor chainConfig).
*/

import React, { useEffect, useState } from "react";


const web3auth = new Web3Auth({
    chainConfig: { 
        chainNamespace: CHAIN_NAMESPACES.EIP155, 
        chainId: "0x3" 
    },
    authMode: "DAPP",
    clientId: "example-client-id", // get your client id from developer dashboard
  });

export default web3auth
