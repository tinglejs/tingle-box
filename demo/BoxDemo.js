/**
 * Box Component Demo for tingle
 * @author
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');

const {HBox, VBox, Box} = require('../src');

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
      <HBox style={{height:'90px'}} className="demo">
        <VBox className="tBCa" flex={2}>
          <Box className="tBCd" flex={1}>1</Box>
          <Box className="tBCe" flex={2}>2</Box>
        </VBox>
        <Box className="tBCb" flex={2}>2</Box>
        <Box className="tBCc" flex={1}>1</Box>
      </HBox>

      <HBox style={{height:'90px'}} vAlign="start" className="demo">
        <Box className="tBCa">a</Box>
        <Box className="tBCb">b</Box>
        <Box className="tBCc">c</Box>
      </HBox>

      <HBox style={{height:'90px'}} vAlign="center" className="demo">
        <Box className="tBCa">a</Box>
        <Box className="tBCb">b</Box>
        <Box className="tBCc">c</Box>
      </HBox>

      <HBox style={{height:'90px'}} vAlign="end" className="demo">
        <Box className="tBCa">a</Box>
        <Box className="tBCb">b</Box>
        <Box className="tBCc">c</Box>
      </HBox>
    </div>
  }
}
;

module.exports = Demo;
