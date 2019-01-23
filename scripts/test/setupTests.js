// setupTests.js - Imports globals into Jest tests
import 'jest-prop-type-error';

const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
enzyme.configure({ adapter: new Adapter() });
