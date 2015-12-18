/**
 * Box Component for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const classnames = require('classnames');

let HBox = (props) => {
  let { className, flex, ...other } = props;
  let cls = classnames('tFBH', {
    ['tFB' + flex]: !!flex,
    [className]: !!className
  });

  return <div {...other} className={cls}>
    {props.children}
  </div>;
};

HBox.defaultProps = {};

// http://facebook.github.io/react/docs/reusable-components.html
HBox.propTypes = {
  className: React.PropTypes.string,
  flex: React.PropTypes.number,
  hAlign: React.PropTypes.oneOf(['start', 'center', 'end']),
  vAlign: React.PropTypes.oneOf(['start', 'center', 'end'])
};

HBox.displayName = 'HBox';


let VBox = (props) => {
  let { className, flex, ...other } = props;
  let cls = classnames('tFBV', {
    ['tFB' + flex]: !!flex,
    [className]: !!className
  });

  return <div {...other} className={cls}>
    {props.children}
  </div>;
};

VBox.defaultProps = {};

// http://facebook.github.io/react/docs/reusable-components.html
VBox.propTypes = {
  className: React.PropTypes.string,
  flex: React.PropTypes.number,
  hAlign: React.PropTypes.oneOf(['start', 'center', 'end']),
  vAlign: React.PropTypes.oneOf(['start', 'center', 'end'])
};

VBox.displayName = 'VBox';

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

// http://facebook.github.io/react/docs/reusable-components.html
Box.propTypes = {
  className: React.PropTypes.string,
  flex: React.PropTypes.number,
  hAlign: React.PropTypes.oneOf(['start', 'center', 'end']),
  vAlign: React.PropTypes.oneOf(['start', 'center', 'end'])
};

Box.displayName = 'Box';

module.exports = {HBox, VBox, Box};
