import chalk from 'chalk';

console.log(chalk.inverse(' SETUP TESTS '));

import 'ignore-styles';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';

const doc = new JSDOM('<!doctype html><html><body></body></html>');

global.document = doc.window.document;
global.window = doc.window;
global.navigator = {
  userAgent: 'node.js'
};

configure({ adapter: new Adapter() });
