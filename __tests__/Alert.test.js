import React from 'react';
import { shallow } from 'enzyme';

import Alert from '../src/Alert';

jest.useFakeTimers();

describe('<Alert/>', () => {
  it('should render default', () => {
    const wrapper = shallow(
      <Alert role="alert">
        <strong>Well done!</strong> You successfully read this important alert message.
      </Alert>);
    expect(wrapper.find('div').hasClass('alert')).toBe(true);
    expect(wrapper.find('div').hasClass('alert-success')).toBe(true);
  });

  describe('dismissable', () => {
    it('should render the close button if dismissable', () => {
      const wrapper = shallow(
        <Alert
          className="alert alert-success"
          role="alert"
          dismissable
        >
          <strong>Well done!</strong> You successfully read this important alert message.
        </Alert>);
      expect(wrapper.find('button').length).toBe(1);
      wrapper.find('button').simulate('click');
      jest.runAllTimers();
      expect(setTimeout.mock.calls[0][1]).toBe(0);
    });

    describe('`.fade` and `.show` classes are present', () => {
      it('should dismiss with a default duration ', () => {
        const wrapper = shallow(
          <Alert
            className="alert alert-success fade show"
            role="alert"
            dismissable
          >
            <strong>Well done!</strong> You successfully read this important alert message.
          </Alert>);
        wrapper.find('button').simulate('click');
        jest.runAllTimers();
        expect(setTimeout.mock.calls[1][1]).toBe(150);
      });

      it('should dismiss with a custom `transitionDuration`', () => {
        const wrapper = shallow(
          <Alert
            className="alert alert-success fade show"
            role="alert"
            dismissable
            transitionDuration={1000}
          >
            <strong>Well done!</strong> You successfully read this important alert message.
          </Alert>);
        wrapper.find('button').simulate('click');
        jest.runAllTimers();
        expect(setTimeout.mock.calls[2][1]).toBe(1000);
      });
    });

    it('should call the `close` and `closed` events upon dismissing', () => {
      const onClose = jest.fn();
      const onClosed = jest.fn();
      const wrapper = shallow(
        <Alert
          className="alert alert-success fade show"
          role="alert"
          dismissable
          onClose={onClose}
          onClosed={onClosed}
        >
          <strong>Well done!</strong> You successfully read this important alert message.
        </Alert>);
      wrapper.find('button').simulate('click');
      jest.runAllTimers();
      expect(setTimeout.mock.calls[3][1]).toBe(150);
      expect(onClose).toHaveBeenCalled();
      expect(onClosed).toHaveBeenCalled();
    });
  });
});
