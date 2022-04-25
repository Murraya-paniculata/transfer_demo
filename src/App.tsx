import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AutoComplete, Button, Form, Input, InputNumber, Select } from 'antd';

const { Option } = Select;

const suffixSelector = (
  <Form.Item name="suffix" noStyle>
    <Select style={{ width: 70 }} defaultValue="ETH">
      <Option value="ETH">ETH</Option>
    </Select>
  </Form.Item>
);

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 2,
    },
    sm: {
      span: 24,
      offset: 2,
    },
  },
};

const formItemLayout = {
  labelCol: {
    xs: { span: 2 },
    sm: { span: 2 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

const onFinish = (values: any) => {
  console.log('Received values of form: ', values);
};

function App() {
  const [form] = Form.useForm();
  return (
    <div className="App">
      <div className='transferWarp'>
        <h1>
          Transfer Ether
        </h1>
        <Form
            form={form}
            onFinish={onFinish}
            scrollToFirstError
            {...formItemLayout}
          >
            <Form.Item
              name="amount"
              label="amount"
              rules={[{ required: true, message: 'Please enter an amount to be transferred.' }]}
            >
              <InputNumber addonAfter={suffixSelector} style={{width: "100%"}} />
            </Form.Item>
            <Form.Item
              name="address"
              label="address"
              rules={[{ required: true, message: 'Please enter a receipient address!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button style={{width: "100%"}} type="primary" htmlType="submit">
                Transfer
              </Button>
            </Form.Item>
          </Form>
      </div>
    </div>
  );
}

export default App;
