import React, { Component } from "react";

import Supplies from "../components/Supplies";

describe("Supplies Component", () => {
    test("Should render a booking component", () => {
        const wrapper = shallow(<Supplies />);
        expect(wrapper.find("h1").text()).toBe("Supplies");
    });
});
