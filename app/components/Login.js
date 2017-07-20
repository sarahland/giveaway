

import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import OrgList from '../containers/orgs_list';
import {Field, reduxForm } from 'redux-form';

class SignIn extends Component {
  renderField(field){

    return(

        <div className='input-field col s6'>
          <i className="material-icons prefix">{field.icon}</i>
          <label htmlFor={field.htmlFor}>{field.label}</label>
          <input
            className = {field.className}
            type={field.type}
            {...field.input}
          />
        </div>
    )
  }

  render() {
    return (
      <div id="loginpg" className=" center logincontainer animated bounceInDown">
        <div className="row">
          <form id="loginform" className="col m12">
            {/* TODO: only hover on underline activates form */}
            <Field
              label = "Username"
              name = "username"
              icon = 'person'
              // type = 'text'
              htmlFor="icon_prefix2"
              className = 'validate'
              component={this.renderField}
            />
            <Field
              label = "Password"
              name = "password"
              type = "password"
              htmlFor="password"
              icon = 'lock outline'
              component={this.renderField}
            />
            <div className="row center">
              <div className="col m6">
                <button id="loginsubmit" className="btn waves-effect waves-light" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
              <div className="col m6">
                <button id="resetbutton" className="btn waves-effect waves-light" onclick="resetFunc" value="Reset Form" name="action">Reset
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    );
  }
}


export default reduxForm({
  form: 'PostNewForm'
})(SignIn);
