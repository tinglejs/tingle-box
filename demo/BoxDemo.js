/**
 * Box Component Demo for tingle
 * @author 
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');

const Box = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return <div>
            <Box/>
        </div>
    }
};

module.exports = Demo;
