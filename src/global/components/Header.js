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
                            <li className="px-4">
                                <NavLink className="menu_item" to="/stashpoints">
                                    Stashpoints
                                </NavLink>
                            </li>
                            <li className="px-4">
                                <NavLink className="menu_item" to="/bookings">
                                    Bookings
                                </NavLink>
                            </li>
                            <li className="px-4">
                                <NavLink className="menu_item" to="/supplies">
                                    Supplies
                                </NavLink>
                            </li>
                            <li className="px-4">
                                <NavLink className="menu_item" to="/customers">
                                    Customers
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>;
    }
}
