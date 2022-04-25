import React, { useEffect } from 'react'
import './App.css'
import { AutoComplete, Button, Form, Input, InputNumber, Select } from 'antd';
import { getWalletAccountAction } from './store/action/wallet';
import { connect } from 'react-redux';
import { IStore } from './store/state';

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

const transfer = (values: any) => {
  // transfer
  
};

function Transfer (props: any) {
  const [form] = Form.useForm();
  const { dispatch, loading, account } = props;
  // 连接metamask钱包
  const connectWallet = async() => {
   // 触发action，到saga中间件中获取钱包地址数据
   dispatch(getWalletAccountAction());
 }

  return (
    <>
       {
        account ? <span style={{color: "#fff", margin: 30}}>current Address：{account}</span> : <Button onClick={() => connectWallet()}>
          CONNECT
        </Button>}
        <div className='transferWarp'>
            <h1>
            Transfer Ether
            </h1>
            <Form
                form={form}
                onFinish={transfer}
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
      </>
  )
}

export default connect((store: IStore) => ({
  account: store.wallet.account,
  loading: store.wallet.isLoading,
}))(Transfer)
