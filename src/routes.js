import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import StashPoints from "./stashpoints/components/Stashpoints";
import Bookings from "./global/components/Bookings";
import Supplies from "./global/components/Supplies";
import Customers from "./global/components/Customers";
import Header from "./global/components/Header";

export default function() {
    return (
        <div>
            <Header />
            <Switch>
                <Redirect exact from="/" to="/stashpoints" />
                <Route path="/stashpoints" component={StashPoints} />
                <Route path="/bookings" component={Bookings} />
                <Route path="/supplies" component={Supplies} />
                <Route path="/customers" component={Customers} />
            </Switch>
        </div>
    );
}
