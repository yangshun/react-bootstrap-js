import React, { Component, PropTypes } from 'react';
import omit from 'lodash/omit';
import union from 'lodash/union';
import { classNameList } from './utils';

const ClassName = {
  ACTIVE : 'active',
  BUTTON : 'btn',
  FOCUS  : 'focus'
};

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  className: PropTypes.string,
  active: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: `${ClassName.BUTTON} ${ClassName.BUTTON}-primary`,
  active: false,
};

class MyComponent extends Component {
  render() {
    const transferredProps = omit(this.props, [
      '',
    ]);

    if (this.props.active) {
      transferredProps.className = union(classNameList(this.props.className),
                                          [ClassName.ACTIVE, ClassName.FOCUS]).join(' ');
    }

    return (
      <button type="button"
        aria-pressed={this.props.active}
        autocomplete="off"
        {...transferredProps}
      >
        {this.props.children}
      </button>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
