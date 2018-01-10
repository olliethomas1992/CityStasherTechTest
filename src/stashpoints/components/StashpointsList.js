import React, { Component } from "react";
import _ from "lodash";

import StashpointListItem from "./StashpointListItem";

export default class StashpointsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filteredStashPoints: {},
            term: ""
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    componentWillReceiveProps({ stashpoints }) {
        this.setState({
            filteredStashPoints: this.filterStashpoints(
                stashpoints,
                this.state.term
            )
        });
    }

    render() {
        return (
            <div>
                <div className="border-b pb-4">
                    <label className="mb-2" htmlFor="search">
                        Search
                    </label>
                    <input
                        onChange={this.onInputChange}
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

    filterStashpoints(stashpoints, filter) {
        return _.filter(stashpoints, stashpoint => {
            if (stashpoint.location_name.match(new RegExp(filter, "i"))) {
                return stashpoint;
            }
        });
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value,
            filteredStashPoints: this.filterStashpoints(
                this.props.stashpoints,
                event.target.value
            )
        });
    }

    renderStashpoints() {
        return _.map(this.state.filteredStashPoints, (stashpoint, i) => {
            return <StashpointListItem key={i} stashpoint={stashpoint} />;
        });
    }
}
