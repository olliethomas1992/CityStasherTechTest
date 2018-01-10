import React, { Component } from "react";

import Bookings from "../components/Bookings";

describe("Bookings Component", () => {
    test("Should render a booking component", () => {
        const wrapper = shallow(<Bookings />);
        expect(wrapper.find("h1").text()).toBe("Bookings");
    });
});
