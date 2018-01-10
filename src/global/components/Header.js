import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import LogoBlack from "../../assets/images/logoblack.png";

export default class Header extends Component {
    render() {
        return <div className="bg-white shadow-sm">
                <nav className="container mx-auto flex items-center py-4">
                    <div className="flex items-center">
                        <img className="mr-4" src={LogoBlack} alt="" />
                        <ul className="list-reset flex mt-2">
                            <li>
                                <NavLink to="/stashpoints">
                                    Stashpoints
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/bookings">
                                    Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/supplies">
                                    Supplies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/customers">
                                    Customers
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>;
    }
}
