/**
 * Box Component Demo for tingle
 * @author
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');

const {HBox} = require('../src');

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
      <HBox>
        <div className="tFB1">aaaa</div>
        <div className="">ccc</div>
        <div className="tFB1">bbbb</div>
      </HBox>
    </div>
  }
}
;

module.exports = Demo;
