import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import tryLogin from '../actions/authenticate'
import style from './style.css'

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Login extends Component {

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.props.tryLogin(values.password)
      }
    });
  }


    render() {
      const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form

      // const userNameError = isFieldTouched('userName') && getFieldError('userName')
      const passwordError = isFieldTouched('password') && getFieldError('password')

        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
              {/* <FormItem
                validateStatus={userNameError ? 'error' : ''}
                help={userNameError || ''}
              >
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="learningleaders" />
                )}
              </FormItem> */}
              <FormItem
                validateStatus={passwordError ? 'error' : ''}
                help={passwordError || ''}
              >
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={hasErrors(getFieldsError())}
                >
                  Log in
                </Button>
              </FormItem>
            </Form>
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
  return bindActionCreators( { tryLogin }, dispatch)
}

const WrappedHorizontalLoginForm = Form.create()(Login);
export default withRouter(connect(null, mapDispatchToProps)(WrappedHorizontalLoginForm))