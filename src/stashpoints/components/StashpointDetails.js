import React from "react";

export default ({ stashpoint }) => {
    return <div className="w-full mt-12">
            <h2>{stashpoint.name}</h2>
            <div className="flex mt-6">
                <div className="flex-1">
                    <h3 className="my-2">Address</h3>
                    <address>
                        <p>{stashpoint.address}</p>
                        <p>{stashpoint.postal_code}</p>
                    </address>
                </div>
                <div className="flex-1">
                    <h3 className="my-2">Contact</h3>
                    <div>
                        <p>{stashpoint.contact.name}</p>
                        <p>{stashpoint.contact.email}</p>
                        <p>{stashpoint.contact.phone}</p>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <img src={stashpoint.photos[0]} height="300" alt="" />
            </div>
        </div>;
};
