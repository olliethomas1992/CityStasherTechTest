import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { fetchStashPoints, updateFilteredStashpoints } from "../actions";

import StashpointsList from "./StashpointsList";
import { StashpointsMap } from "./StashpointsMap";
import StashpointDetails from "./StashpointDetails";

class Stashpoints extends Component {
    constructor() {
        super();

        this.state = {
            term: "",
            selectedMarker: {}
        };

        this.handleOnClick = this.handleOnClick.bind(this);
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
    }

    componentDidMount() {
        this.props.fetchStashPoints().then(() => {
            this.props.updateFilteredStashpoints();
        });
    }

    updateSearchTerm(event) {
        return this.props.updateFilteredStashpoints(event.target.value);
    }

    handleOnClick(event, stashpoint) {
        return this.setState({
            selectedMarker: stashpoint
        });
    }

    render() {
        return (
            <div className="container mx-auto mt-10">
                <h1 className="text-xlg my-8">Stashpoints</h1>
                <div className="flex">
                    <div className="w-1/3 mr-12">
                        <StashpointsList
                            updateSearchTerm={this.updateSearchTerm}
                            stashpoints={this.props.stashpoints}
                        />
                    </div>
                    <div className="w-full">
                        <StashpointsMap
                            handleOnClick={this.handleOnClick}
                            stashpoints={this.props.stashpoints}
                        />
                        {_.isEmpty(this.state.selectedMarker) ? (
                            <div>Click a marker to show details</div>
                        ) : (
                            <StashpointDetails
                                stashpoint={this.state.selectedMarker}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    stashpoints: state.filteredStashpoints || {}
});

const mapDispatchToProps = {
    fetchStashPoints,
    updateFilteredStashpoints
};

export default connect(mapStateToProps, mapDispatchToProps)(Stashpoints);
