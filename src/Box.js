/**
 * Box Component for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const classnames = require('classnames');

class Box extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let t = this;
        let {
          className,
          ...other
        } = t.props;

        return <div ref='root' {...other} className={classnames('tBox', {
            [t.props.className]: !!className
        })}>
            {t.props.children}
        </div>;
    }
}

Box.defaultProps = {
};

// http://facebook.github.io/react/docs/reusable-components.html
Box.propTypes = {
    className: React.PropTypes.string,
    hAlign: React.PropTypes.oneOf(['start', 'center', 'end']),
    vAlign: React.PropTypes.oneOf(['start', 'center', 'end'])
};

Box.displayName = 'Box';

module.exports = Box;
