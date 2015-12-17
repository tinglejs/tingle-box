/**
 * Box Component Demo for tingle
 * @author 
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
require('tingle-context');
window.FastClick && FastClick.attach(document.body);
var Demo = require('./BoxDemo');
ReactDOM.render(<Demo/>, document.getElementById('TingleDemo'));
