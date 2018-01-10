import React, { Component } from "react";
import _ from "lodash";

import StashpointListItem from "./StashpointListItem";

export default class StashpointsList extends Component {
    render() {
        return (
            <div>
                <div className="border-b pb-4">
                    <label className="mb-2" htmlFor="search">
                        Search
                    </label>
                    <input
                        onChange={event => this.props.updateSearchTerm(event)}
                        className="w-full my-2 py-4 px-2 shadow border"
                        id="search"
                        type="text"
                    />
                </div>
                <hr className="my-4" />
                <ul className="list-reset h-48">{this.renderStashpoints()}</ul>
            </div>
        );
    }

    renderStashpoints() {
        if(_.isEmpty(this.props.stashpoints)){
            return <div className="mx-auto my-8" id="loading" />;
        }

        return _.map(this.props.stashpoints, (stashpoint, i) => {
            return <StashpointListItem key={i} stashpoint={stashpoint} />;
        });
    }
}
