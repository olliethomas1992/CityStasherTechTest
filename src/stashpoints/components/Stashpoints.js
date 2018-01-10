import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { fetchStashPoints } from "../actions";

import StashpointsList from "./StashpointsList";
import {StashpointsMap} from './StashpointsMap';

class Stashpoints extends Component {
    constructor() {
        super();

        this.state = {
            selectedMarker: {}
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }


    componentDidMount() {
        this.props.fetchStashPoints();
    }

    handleOnClick(event, stashpoint){
        return this.setState({
            selectedMarker: stashpoint
        })
    }

    render() {
        return (
            <div className="container mx-auto mt-10">
                <h1 className="text-xlg my-8">Stashpoints</h1>
                <div className="flex">
                    <div className="w-1/3 mr-12">
                        <StashpointsList stashpoints={this.props.stashpoints} />
                    </div>
                    <div className="w-full">
                        <StashpointsMap handleOnClick={this.handleOnClick} stashpoints={ this.props.stashpoints } />
                    </div>
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
