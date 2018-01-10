import React, { Component } from "react";
import { compose, withProps } from "recompose";
import _ from 'lodash';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

export const StashpointsMap = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyBDqq5yfzGol2aF7GdeYRhhJRidb_81F2w&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `600px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 51.4, lng: -0.7 }}>
        { _.map(props.stashpoints, (stashpoint, i) => {
            return <Marker key={i} onClick={event => props.handleOnClick(event, stashpoint)} position={{ lat: stashpoint.latitude, lng: stashpoint.longitude }} />;
        }) }
    </GoogleMap>
));
