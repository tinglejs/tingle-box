/**
 * Box Component for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const classnames = require('classnames');

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
    tFBAS: vAlign === 'start',
    tFBAC: vAlign === 'center',
    tFBAE: vAlign === 'end',
    tFBJS: hAlign === 'start',
    tFBJC: hAlign === 'center',
    tFBJE: hAlign === 'end',
    [className]: !!className
  });

  return <div {...other} className={cls}>
    {props.children}
  </div>;
};

//HBox.defaultProps = {};

HBox.propTypes = {
  className: React.PropTypes.string,
  flex: React.PropTypes.number,
  hAlign: React.PropTypes.oneOf(['start', 'center', 'end']),
  vAlign: React.PropTypes.oneOf(['start', 'center', 'end'])
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
    tFBJS: vAlign === 'start',
    tFBJC: vAlign === 'center',
    tFBJE: vAlign === 'end',
    tFBAS: hAlign === 'start',
    tFBAC: hAlign === 'center',
    tFBAE: hAlign === 'end',
    [className]: !!className
  });

  return <div {...other} className={cls}>
    {props.children}
  </div>;
};

//VBox.defaultProps = {};

VBox.propTypes = {
  className: React.PropTypes.string,
  flex: React.PropTypes.number,
  hAlign: React.PropTypes.oneOf(['start', 'center', 'end']),
  vAlign: React.PropTypes.oneOf(['start', 'center', 'end'])
};

VBox.displayName = 'VBox';

// 伸缩元素
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

Box.defaultProps = {};

Box.propTypes = {
  className: React.PropTypes.string,
  flex: React.PropTypes.number,
  hAlign: React.PropTypes.oneOf(['start', 'center', 'end']),
  vAlign: React.PropTypes.oneOf(['start', 'center', 'end'])
};

Box.displayName = 'Box';

module.exports = {HBox, VBox, Box};
