require('@babel/register');
require('ignore-styles');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const doc = new JSDOM('<!doctype html><html><body></body></html>');

process.env.NODE_ENV = 'test';

global.document = doc.window.document;
global.window = doc.window;
global.navigator = {
  userAgent: 'node.js'
};
