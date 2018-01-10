import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { fetchStashPoints } from "../actions";

import StashpointsList from "./StashpointsList";

class Stashpoints extends Component {
    componentDidMount() {
        this.props.fetchStashPoints();
    }

    render() {
        return (
            <div className="container mx-auto mt-10">
                <h1 className="text-xlg my-8">Stashpoints</h1>
                <div className="flex">
                    <div className="w-1/3 mr-12">
                        <StashpointsList stashpoints={this.props.stashpoints} />
                    </div>
                    <div className="w-full">Map</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    stashpoints: state.stashpoints || {}
});

const mapDispatchToProps = {
    fetchStashPoints
};

export default connect(mapStateToProps, mapDispatchToProps)(Stashpoints);
