import React, { Component } from "react";

import Customers from "../components/Customers";

describe("Customers Component", () => {
    test("Should render a booking component", () => {
        const wrapper = shallow(<Customers />);
        expect(wrapper.find("h1").text()).toBe("Customers");
    });
});
