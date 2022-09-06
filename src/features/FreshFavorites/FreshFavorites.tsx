/** @format */

//Third Party

//App
import {freshCampaigns} from '../../constants/staticCampaigns'
import CampaignsList from "../../components/CampaignsList/CampaignsList";
import CommonDivider from "../../components/CommonDivider/CommonDivider";
type Props = {};

const FreshFavorites = (props: Props) => {
  return (
    <div>
      <CampaignsList title="Fresh Favorites" campaigns={freshCampaigns} />
      <CommonDivider className="my-12" />
    </div>
  );
};

export default FreshFavorites;
