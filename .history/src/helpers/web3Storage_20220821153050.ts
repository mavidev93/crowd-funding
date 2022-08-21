/** @format */
//@ts-ignore
 import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'

export function getAccessToken() {
  return process.env.REACT_APP_WEB3STORAGE_TOKEN;
}

export function makeStorageClient() {
  //@ts-ignore
  return new Web3Storage({
    token: getAccessToken()!,
    // endpoint: new URL("https://api.web3.storage/pin"),
  });
}
