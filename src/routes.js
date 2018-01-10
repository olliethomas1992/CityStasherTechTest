import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import StashPoints from "./stashpoints/components/Stashpoints";
import Header from "./global/components/Header";

export default function() {
    return <div>
            <Header />
            <Switch>
                <Redirect exact from="/" to="/stashpoints" />
                <Route path="/stashpoints" component={StashPoints} />
            </Switch>
        </div>;
}
