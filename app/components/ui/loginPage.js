import React from 'react';
import Validation from 'react-validation';
import validator from 'validator';
import validation from './validation';
import {Component, PropTypes} from 'react';

export default class LoginPage extends Component {
  render() {
    return <Validation.components.Form>
      <h3>Registration</h3>
      <div>
        <label>
          Email*
          <Validation.components.Input value='email@email.com' name='email' validations={['required', 'email']}/>
        </label>
      </div>
      <div>
        <label>
          Password*
          <Validation.components.Input type='password' value='' name='password' validations={['required']}/>
        </label>
      </div>
      <div>
        <Validation.components.Button>Submit</Validation.components.Button>
      </div>
    </Validation.components.Form>;
  }
}
