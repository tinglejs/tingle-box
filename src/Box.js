/**
 * Box Component for tingle
 * @author 
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
        return <div ref='root' className={classnames('tBox', {
            [t.props.className]: !!t.props.className
        })}>
            Box component for tingle
        </div>;
    }
}

Box.defaultProps = {
}

// http://facebook.github.io/react/docs/reusable-components.html
Box.propTypes = {
    className: React.PropTypes.string
}

Box.displayName = 'Box';

module.exports = Box;
