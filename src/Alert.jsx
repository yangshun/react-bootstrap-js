import React, { Component, PropTypes } from 'react';
import omit from 'lodash/omit';
import without from 'lodash/without';
import { classNameList } from './utils';

const TRANSITION_DURATION = 150;
const ClassName = {
  FADE: 'fade',
  SHOW: 'show',
};

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  className: PropTypes.string,
  dismissable: PropTypes.bool,
  onClose: PropTypes.func,
  onClosed: PropTypes.func,
  transitionDuration: PropTypes.number,
};

const defaultProps = {
  children: null,
  className: 'alert alert-success',
  dismissable: false,
  onClose: () => {},
  onClosed: () => {},
  transitionDuration: TRANSITION_DURATION,
};

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dismissing: false,
      dismissed: false,
    };
    this.close = this.close.bind(this);
  }

  close() {
    const classNames = classNameList(this.props.className);
    this.setState({
      dismissing: true,
    }, this.props.onClose);

    let fadeDuration = 0;
    if (classNames.indexOf(ClassName.FADE) > -1 && classNames.indexOf(ClassName.SHOW) > -1) {
      fadeDuration = this.props.transitionDuration;
    }
    setTimeout(() => {
      this.setState({
        dismissed: true,
      }, this.props.onClosed);
    }, fadeDuration);
  }

  render() {
    const dismissable = !!this.props.dismissable;
    const transferredProps = omit(this.props, [
      'dismissable',
      'transitionDuration',
      'onClose',
      'onClosed',
    ]);

    if (this.state.dismissed) {
      return null;
    }

    if (this.state.dismissing && dismissable) {
      transferredProps.className = without(classNameList(this.props.className),
                                            ClassName.SHOW).join(' ');
    }

    return (
      <div {...transferredProps}>
        {this.props.dismissable &&
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={this.close}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        }
        {this.props.children}
      </div>
    );
  }
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
