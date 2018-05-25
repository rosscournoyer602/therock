import React from 'react';
import { Modal } from 'antd';

export default function error(props) {
    Modal.error({
      title: 'Authentication Failed',
      content: props.error
    });
}