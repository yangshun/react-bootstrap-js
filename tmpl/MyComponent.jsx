import React, { Component, PropTypes } from 'react';
import omit from 'lodash/omit';
import without from 'lodash/without';
import { classNameList } from './utils';

const ClassName = {};

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
};

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const transferredProps = omit(this.props, [
      '',
    ]);

    return (
      <div {...transferredProps}>
        {this.props.children}
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
