import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Body} from './Test.style';

class Test extends Component {
    render() {
        const { isVisible } = this.props;

        return (
            <Body
                isVisible={isVisible}
            >
            Das ist ein Test
            </Body>
        );
    }
}

Test.propTypes = {
    isVisible: PropTypes.bool,
};

Test.defaultProps = {
    isVisible: true,
};

export default Test;
