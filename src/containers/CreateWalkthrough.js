import React, { Component } from 'react'
import { Form, Input, Button, Upload, Icon, Select } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import createEntry from '../actions/createEntry'
import createUpload from '../actions/createUpload'
import { withRouter } from 'react-router'
import { error } from 'util';
const Option = Select.Option;
const { TextArea } = Input
const FormItem = Form.Item

class Create extends Component {
  constructor(props){
    super(props)

    this.assets = []
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      values.assets = this.props.uploadsQueued
      values.contentType = 'walkthrough'
      this.props.createEntry(values)
      if (err) {
        console.log(err);
      }
    })
    this.props.form.resetFields()

  }
  removeUpload = (e) => {
    return true
  }
  normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const inputStyle = {width: "100%"}
    const textAreaStyle = {width: "100%", resize: "vertical"}
    return (
      <div>
        <br />
        <h1 className="processFieldTitle">Create a Video Walkthrough</h1>
        <p className="processFieldText"> 
          A video Walkthrough is used to demonstrate a process visually. Make sure to give a clear description of that we will learn from the video.
        </p>
        <br />
        <Form id="form" layout="vertical" onSubmit={this.handleSubmit}>
          <FormItem label="Title:">
            {getFieldDecorator('title', 
            {rules:[{type: 'string', message: 'Title must be a string!'}, 
            {required: true, message: 'Must enter a Title!'} ] })(
              <Input placeholder="Publishing a Website Update" style={inputStyle} />)}
          </FormItem>
          <FormItem label="Description:">
            {getFieldDecorator('description', 
            {rules:[{type: 'string', message: 'Description must must be a string!'}, 
            {required: true, message: 'Must enter a description!'} ] })(
              <TextArea placeholder="We will learn how to make edits to the website appear live on our domain." 
                      style={textAreaStyle} autosize={{ minRows: 4, maxRows: 6 }} />)}
          </FormItem>
          <FormItem label="Section">
            {getFieldDecorator('team', 
            {rules:[{type: 'string', message: ''}, 
            {required: true, message: 'Must enter team!'} ] })(
            <Select style={{ width:140 }}>
              <Option value="Business">Business</Option>
              <Option value="Clients">Clients</Option>
              <Option value="Company">Company</Option>
              <Option value="Design">Design</Option>
              <Option value="Experiences">Experiences</Option>
              <Option value="People">People</Option>
              <Option value="Marketing">Marketing</Option>
              <Option value="Projects">Projects</Option>
            </Select>)}
          </FormItem>
          <FormItem label="Video File:">
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload multiple accept='video/*' name="logo" action={"/"} multiple showUploadList={{showRemoveIcon: false}} customRequest={(e) => this.props.createUpload(e)} listType="text" >
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
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { createEntry, createUpload }, dispatch)
}

function mapStateToProps(state) {
  return { uploadsQueued: state.uploadsQueued }
}

const CreateEntry = Form.create()(Create)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateEntry))
