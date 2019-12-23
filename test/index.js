console.log('Setup test');

require('@babel/register');
require('ignore-styles');

const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const doc = new JSDOM('<!doctype html><html><body></body></html>');

process.env.NODE_ENV = 'test';

enzyme.configure({ adapter: new Adapter() });

global.document = doc.window.document;
global.window = doc.window;
global.navigator = {
  userAgent: 'node.js'
};
