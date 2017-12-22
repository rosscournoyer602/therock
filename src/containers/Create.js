import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const FormItem = Form.Item

export default class Create extends Component {
  handleSubmit = (e) => {
    console.log(e)   
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit()}>
        <FormItem>
          {getFieldDecorator('userName',)(<Input />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    )
  }
}