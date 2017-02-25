import React from 'react';
import { storiesOf } from '@kadira/storybook';

import {
  Alert,
  Button,
} from '../src';

storiesOf('Components', module)
  .add('Alert', () => (
    <div>
      <h2>Alert</h2>

      <h5>Default</h5>
      <Alert className="alert alert-success"
        role="alert"
      >
        <strong>Well done!</strong> You successfully read this important alert message.
      </Alert>
      <br/>

      <h5>Dismissable</h5>
      <Alert className="alert alert-info"
        dismissable
        role="alert"
      >
        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
      </Alert>
      <br/>

      <h5>Dismissable with fade</h5>
      <Alert className="alert alert-warning fade show"
        dismissable
        role="alert"
      >
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
      </Alert>
      <p>Note: If you change the CSS animation duration of <code>.fade</code>, be sure to
        pass in the new value into <code>transitionDuration</code> prop.</p>
      <br/>

      <h5>Dismissable with fade events</h5>
      <Alert className="alert alert-danger fade show"
        dismissable
        role="alert"
        onClose={() => { console.log('Alert closing...'); }}
        onClosed={() => { console.log('Alert closed!'); }}
      >
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </Alert>
    </div>
  ))
  .add('Button', () => (
    <div>
      <h2>Buttons</h2>

      <h5>Default</h5>
      <Button>
        Primary
      </Button>
      {' '}
      <Button className="btn btn-secondary">
        Secondary
      </Button>
      {' '}
      <Button className="btn btn-success">
        Success
      </Button>
      {' '}
      <Button className="btn btn-info">
        Info
      </Button>
      {' '}
      <Button className="btn btn-warning">
        Warning
      </Button>
      {' '}
      <Button className="btn btn-danger">
        Danger
      </Button>
      {' '}
      <Button className="btn btn-link">
        Link
      </Button>
      <br/>

      <h5>Toggle States</h5>
      <Button active>
        Primary
      </Button>
      <br/>
    </div>
  ));
