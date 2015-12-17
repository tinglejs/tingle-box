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
    this.state = {}
  }

  test() {
    console.log(23);
  }
  render() {
    let t = this;
    return <div>
      <Box onClick={t.test.bind(t)}>aaa</Box>
    </div>
  }
}
;

module.exports = Demo;
