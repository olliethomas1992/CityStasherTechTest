require("raf/polyfill");
const Enzyme = require("enzyme");
const shallow = Enzyme.shallow;
const render = Enzyme.render;
const mount = Enzyme.mount;
const EnzymeAdapter = require("enzyme-adapter-react-16");
const open = require("open");

/* Setup enzyme's react adapter
---------------------------------------------------- */
Enzyme.configure({ adapter: new EnzymeAdapter() });

/* Make Enzyme functions available
 in all test files without importing
---------------------------------------------------- */
global.shallow = shallow;
global.render = render;
global.mount = mount;

/* Open Test Coverage
---------------------------------------------------- */
module.exports = function openCoverage() {
    open("./coverage/lcov-report/index.html");
    return "Test Run Complete.\nOpening Coverage...";
};

require("make-runnable/custom")({
    printOutputFrame: false
});
