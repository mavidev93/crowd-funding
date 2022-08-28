export function validateEthereumAddress(value: any) {
    let error;
    if (!value) {
      error = "Required!";
    } else if (!ethers.utils.isAddress(value)) {
      error = "invalid address!";
    }
    return error;
  }