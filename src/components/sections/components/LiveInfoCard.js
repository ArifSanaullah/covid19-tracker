import React from "react";
import numberWithComas from "../../../utilities/numberWithComas";

function LiveInfoCard({ data }) {
  const heading = data && data[0].replace(/([a-z])([A-Z])/g, "$1 $2"); //this regexp will convert camelCase to normal words e.g "camelCase" => "camel Case"
  const value = data && numberWithComas(data[1]);
  return (
    <div className={`live-info-card-${heading.split(" ")[1]} live-info-card`}>
      <span className="value">{value}</span>
      <span className="heading">{heading}</span>
    </div>
  );
}

export default LiveInfoCard;
