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
      <HBox className="wrapper">
        <VBox className="tBCa" flex={2}>
          <Box className="tBCd" flex={1}>1</Box>
          <Box className="tBCe" flex={2}>2</Box>
        </VBox>
        <Box className="tBCb" flex={2}>2</Box>
        <Box className="tBCc" flex={1}>1</Box>
      </HBox>

      <HBox className="wrapper">
        <Box className="box1">60 * 60</Box>
        <Box className="box2">
          auto * auto
        </Box>
        <Box className="box3" flex={1}>flex:1</Box>
      </HBox>

      <HBox vAlign="start" className="wrapper">
        <Box className="box1">60 * 60</Box>
        <Box className="box2">
          auto * auto
        </Box>
        <Box className="box3" flex={1}>flex:1</Box>
      </HBox>

      <HBox vAlign="center" className="wrapper">
        <Box className="box1">60 * 60</Box>
        <Box className="box2">
          auto * auto
        </Box>
        <Box className="box3" flex={1}>flex:1</Box>
      </HBox>

      <HBox vAlign="end" className="wrapper">
        <Box className="box1">60 * 60</Box>
        <Box className="box2">
          auto * auto
        </Box>
        <Box className="box3" flex={1}>flex:1</Box>
      </HBox>

      <HBox vAlign="center" hAlign="center" className="wrapper">
        <Box className="box1">60 * 60</Box>
        <Box className="box2">
          auto * auto
        </Box>
      </HBox>

      <VBox vAlign="center" hAlign="center" className="wrapper">
        <Box className="box1">60 * 60</Box>
        <Box className="box2">
          auto * auto
        </Box>
      </VBox>
    </div>
  }
}
;

module.exports = Demo;
