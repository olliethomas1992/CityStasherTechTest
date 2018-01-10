import React from "react";

export default ({ stashpoint }) => {
    return (
        <li className="bg-white border border-grey-light rounded py-2 px-1 my-2">
            {stashpoint.location_name}
        </li>
    );
};
