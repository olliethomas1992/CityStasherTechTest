import React, { Component } from "react";

import LogoBlack from "../../assets/images/logoblack.png";

export default class Header extends Component {
    render() {
        return (
            <div className="bg-white shadow-sm">
                <nav className="container mx-auto flex items-center py-4">
                    <div className="flex items-center">
                        <img className="mr-4" src={LogoBlack} alt="" />
                        <ul className="list-reset flex mt-2">
                            <li>Stashpoints</li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
