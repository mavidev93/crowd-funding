import React from 'react'

type Props = {
    daysLeft:n
}

const DaysLeft = (props: Props) => {
  return (
    <div>
          <p className="text-secondary-color 	">
              {" "}
              <AccessTimeIcon />{" "}
              {daysLeft >= 0 ? (
                <span>{`${daysLeft} Days Left`}</span>
              ) : (
                <span>Funding Time Finished</span>
              )}
            </p>
    </div>
  )
}

export default DaysLeft