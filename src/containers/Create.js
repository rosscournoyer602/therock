import React, { Component } from 'react'
import { Form, Input, Button, Upload, Icon } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import createEntry from '../actions/createEntry'
import { withRouter } from 'react-router'
import creds from '../creds.json';
import { readAsArrayBuffer } from 'promise-file-reader';
const { TextArea } = Input
const FormItem = Form.Item
const deliverySDK = require('contentful');
const managementSDK= require('contentful-management');

const client = deliverySDK.createClient({
  space: creds.spaceID,
  accessToken: creds.deliveryToken
});
const managementClient = managementSDK.createClient({
  space: creds.spaceID,
  accessToken: creds.publishToken
});

class Create extends Component {
  constructor(props){
    super(props)

    this.uploaderProps = {
      beforeUpload(file) {
        console.log('beforeUpload')
      },
      onStart: (file) => {
        console.log('onStart', file)
      },
      onSuccess(file) {
        console.log('onSuccess', file)
      },
      onError(err) {
        console.log('onError', err)
      }
    }
    this.assets = []
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("form")
    this.props.form.validateFields((err, values) => {
      values.assets = this.assets
      this.props.createEntry(values)
      if (!err) {
        console.log('Received values of form: ', values);
      }
    })
    this.props.form.resetFields()
  }
  createUpload = ({ onSuccess, onError, file }) => {
    console.log(file)
    //console.log(this.onSuccess)
    managementClient.getSpace().then((space) => {
      console.log('uploading...');
      return space.createUpload({
        file: readAsArrayBuffer(file),
        type: file.type,
        fileName: file.name
      })
      .then((upload) => {
        console.log('creating asset...');
        return space.createAsset({
          fields: {
            title: {
              'en-US': file.name
            },
            file: {
              'en-US': {
                fileName: file.name,
                contentType: file.type,
                uploadFrom: {
                  sys: {
                    type: 'Link',
                    linkType: 'Upload',
                    id: upload.sys.id
                  }
                }
              }
            }
          }
        })
        .then((asset) => {
          console.log('processing...');
          return asset.processForLocale('en-US', { processingCheckWait: 2000 });
        })
        .then((asset) => {
          console.log('publishing...');
          return asset.publish();
        })
        .then((asset) => {
          // console.log(asset);
          this.assets.push(asset.sys.id)
          console.log(this.assets)
          onSuccess(null, file);
          return asset;
        })
      })
      .catch((err) => {
        onError(err);
      });
    });
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  onChange = (e) => {
    console.log('hey' + e)
  }
  render() {
    const { getFieldDecorator, setFieldValues } = this.props.form;
    const inputStyle = {width: "100%"}
    const textAreaStyle = {width: "100%", resize: "vertical"}
    return (

      <Form id="form" layout="vertical" onSubmit={this.handleSubmit}>
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
            <Upload name="logo" action={"/"} customRequest={(e) => this.createUpload(e)} listType="text" onChange = {this.onChange}>
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
  return bindActionCreators( { createEntry }, dispatch)
}

function mapStateToProps(state) {
  return { uploadsReady: state.assetsReady }
}

const CreateEntry = Form.create()(Create)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateEntry))
