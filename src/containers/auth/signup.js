import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import tryAuth from '../../actions/authenticate';
import style from '../../style/style.css'

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Signup extends Component {

  comparePasswords = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Passwords do not match');
    } else {
      callback();
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.tryAuth(values.email, values.password);
      }
    });
  }


    render() {
      const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form

        return (
          <div>
            <Form className="signin-form"layout="vertical" onSubmit={this.handleSubmit}>
              <FormItem label="E-mail">
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: 'The input is not valid E-mail',
                  }, {
                    required: true, message: 'Please input your E-mail',
                  }],
                  })(
                  <Input />
                )}
              </FormItem>
              <FormItem label="Password" >
                {getFieldDecorator('password', { 
                  rules: [{ required: true, message: 'Please input your password' }],
                })(
                  <Input type="password" />
                )}
              </FormItem>
              <FormItem label="Confirm Password" >
                {getFieldDecorator('confirmPassword', { 
                  rules: [{ required: true, message: 'Please confirm your password' }, {validator:this.comparePasswords}],
                })(
                  <Input type="password" />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                  Create Account
                </Button>
              </FormItem>
            </Form>
          </div>
        )
    }
}

// function mapStateToProps(state) {
//   return {
//       entriesDisplayed: state.entriesDisplayed,
//       tabSelected: state.tabSelected
//   }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { tryAuth }, dispatch)
}

const WrappedHorizontalLoginForm = Form.create()(Signup);
export default withRouter(connect(null, mapDispatchToProps)(WrappedHorizontalLoginForm))