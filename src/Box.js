/**
 * Box Component for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const classnames = require('classnames');

const START = 'start';
const CENTER = 'center';
const END = 'end';
const ALIGN_VALUES = [START, CENTER, END];

/**
 * 水平方向弹性容器
 * @param props
 * @returns {XML}
 * @constructor
 */
let HBox = (props) => {
  let { className, flex, vAlign, hAlign, ...other } = props;
  let cls = classnames('tFBH', {
    ['tFB' + flex]: !!flex,
    tFBAS: vAlign === START,
    tFBAC: vAlign === CENTER,
    tFBAE: vAlign === END,
    tFBJS: hAlign === START,
    tFBJC: hAlign === CENTER,
    tFBJE: hAlign === END,
    [className]: !!className
  });

  return <div {...other} className={cls}>
    {props.children}
  </div>;
};

HBox.propTypes = {
  className: React.PropTypes.string,
  flex: React.PropTypes.number,
  hAlign: React.PropTypes.oneOf(ALIGN_VALUES),
  vAlign: React.PropTypes.oneOf(ALIGN_VALUES)
};

HBox.displayName = 'HBox';

/**
 * 垂直方向弹性容器
 * @param props
 * @returns {XML}
 * @constructor
 */
let VBox = (props) => {
  let { className, flex, vAlign, hAlign, ...other } = props;
  let cls = classnames('tFBV', {
    ['tFB' + flex]: !!flex,
    tFBJS: vAlign === START,
    tFBJC: vAlign === CENTER,
    tFBJE: vAlign === END,
    tFBAS: hAlign === START,
    tFBAC: hAlign === CENTER,
    tFBAE: hAlign === END,
    [className]: !!className
  });

  return <div {...other} className={cls}>
    {props.children}
  </div>;
};

VBox.propTypes = {
  className: React.PropTypes.string,
  flex: React.PropTypes.number,
  hAlign: React.PropTypes.oneOf(ALIGN_VALUES),
  vAlign: React.PropTypes.oneOf(ALIGN_VALUES)
};

VBox.displayName = 'VBox';

/**
 * 伸缩子元素
 * @param props
 * @returns {XML}
 * @constructor
 */
let Box = (props) => {
  let { className, flex, ...other } = props;
  let cls = classnames({
    ['tFB' + flex]: !!flex,
    [className]: !!className
  });

  return <div {...other} className={cls}>
    {props.children}
  </div>;
};

Box.propTypes = {
  className: React.PropTypes.string,
  flex: React.PropTypes.number,
  hAlign: React.PropTypes.oneOf(ALIGN_VALUES),
  vAlign: React.PropTypes.oneOf(ALIGN_VALUES)
};

Box.displayName = 'Box';

module.exports = {HBox, VBox, Box};
