//Third Party
import { ConnectButton, useNotification } from "web3uikit";



const ConnectPlease = () => {
    return (
      <div className="flex items-center font-bold">
        Please <ConnectButton moralisAuth={false} /> to create new campaign.
      </div>
    );
  };

  export default ConnectPlease