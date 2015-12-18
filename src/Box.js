/**
 * Box Component for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const classnames = require('classnames');

let HBox = (props) => {
  let { className, ...other } = props;

  return <div {...other} className={classnames('tFBH', { [className]: !!className })}>
    {props.children}
  </div>;
};

HBox.defaultProps = {
};

// http://facebook.github.io/react/docs/reusable-components.html
HBox.propTypes = {
    className: React.PropTypes.string,
    hAlign: React.PropTypes.oneOf(['start', 'center', 'end']),
    vAlign: React.PropTypes.oneOf(['start', 'center', 'end'])
};

HBox.displayName = 'HBox';

module.exports = {HBox};
