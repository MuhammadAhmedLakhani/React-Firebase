import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';









const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const SignupForm = ({register}) => (
  <Form
    name="basic"
    initialValues={{ 
      remember: true, 
      
     }}
    onFinish={register}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
      <Form.Item
      label="Email"
      name="email"
      rules={[
        { required: true,
           message: 'Please input your Emsil!' }
          ,
          {
          pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message:"Please enter correct Email"
         } 
          
          
          ]}
         
    >
      <Input />

    </Form.Item>



    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default SignupForm;