//Third Party
import { ConnectButton} from "web3uikit";



const ConnectPlease = () => {
    return (
      <div className="flex items-center font-bold">
        Please <ConnectButton  moralisAuth={false}  /> to Metamask and  Rinkeby network to use this App.
      </div>
    );
  };

  export default ConnectPlease