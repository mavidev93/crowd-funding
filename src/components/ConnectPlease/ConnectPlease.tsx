//Third Party
import { ConnectButton} from "web3uikit";



const ConnectPlease = () => {
    return (
      <div className="flex items-center font-bold">
        Please <ConnectButton  moralisAuth={false}  /> TO Use App Properly.
      </div>
    );
  };

  export default ConnectPlease