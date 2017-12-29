import React, { Component } from 'react'
import { Form, Input, Button, Upload, Icon } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import createUpload from '../actions/createUpload'
import { withRouter } from 'react-router'
const { TextArea } = Input
const FormItem = Form.Item

class Create extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const { getFieldDecorator, setFieldValues } = this.props.form;
    const inputStyle = {width: "100%"}
    const textAreaStyle = {width: "100%", resize: "vertical"}

    return (

      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <FormItem label="Title:">
          {getFieldDecorator('title', 
          {rules:[{type: 'string', message: 'Title must be a string!'}, 
          {required: true, message: 'Must enter a Title!'} ] })(
            <Input placeholder="Adding a Process to The Rock" style={inputStyle} />)}
        </FormItem>
        <FormItem label="Purpose:">
          {getFieldDecorator('purpose', 
          {rules:[{type: 'string', message: 'Purpose must be a string!'}, 
          {required: true, message: 'Must enter a Purpose!'} ] })(
            <TextArea placeholder="To raise the average effectiveness of a team." 
                      style={textAreaStyle} autosize={{ minRows: 2, maxRows: 4 }} />)}
        </FormItem>
        <FormItem label="DRI (Please separate multiple entries with a comma):">
          {getFieldDecorator('responsibleIndividuals', 
          {rules:[{type: 'string', message: 'DRI must must be a string!'}, 
          {required: true, message: 'Must enter a DRI!'} ] })(
            <Input placeholder="Partner" style={inputStyle}/>)}
        </FormItem>
        <FormItem label="Completion Descripion:">
          {getFieldDecorator('description', {
            rules:[{type: 'string', message: 'Description must be a string!'}, 
            {required: true, message: 'Must enter completion description!'} ] })(
              <TextArea placeholder="1. Step one " 
                        style={textAreaStyle} autosize={{ minRows: 6, maxRows: 8 }} />)}
        </FormItem>
        <FormItem label="Measures of Success:">
          {getFieldDecorator('measures', 
          {rules:[{type: 'string', message: 'Description must be a string!'}, 
          {required: true, message: 'Must enter completion description!'} ] })(
          <TextArea placeholder="1. Everyone formats their entries properly" 
                    style={textAreaStyle} autosize={{ minRows: 4, maxRows: 6 }} />)}
        </FormItem>
        <FormItem label="Upload">
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action={"/"} customRequest={(e) => this.props.createUpload(e)} listType="text">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Add New Entry
          </Button>
        </FormItem>
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { createUpload }, dispatch)
}

const CreateEntry = Form.create()(Create);

export default withRouter(connect(null, mapDispatchToProps)(CreateEntry))
