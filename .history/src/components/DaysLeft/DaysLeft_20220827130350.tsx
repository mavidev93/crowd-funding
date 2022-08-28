/** @format */
//Third Party
import AccessTimeIcon from "@mui/icons-material/AccessTime";

type Props = {
  daysLeft: number;
};

const DaysLeft = ({ daysLeft }: Props) => {
  return (
    <div>
      <p className="text-secondary-color flex items-center">
        {" "}
        <AccessTimeIcon />
        {daysLeft >= 0 ? (
          <span className="">{`${daysLeft} Days Left`}</span>
        ) : (
          <span>Funding Time Finished</span>
        )}
      </p>
    </div>
  );
};

export default DaysLeft;
