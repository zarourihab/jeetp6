import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';

const UserForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
    message.success('User added successfully!');
    form.resetFields();
    // Here you would typically make an API call to save the user
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Please fill out all mandatory fields.');
  };

  return (
    <Card title="Add New User" style={{ maxWidth: 500, margin: '20px auto' }}>
      <Form
        form={form}
        name="user_form"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Name is mandatory',
            },
          ]}
        >
          <Input placeholder="Enter user name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Email is mandatory',
            },
            {
              type: 'email',
              message: 'Please enter a valid email address',
            },
          ]}
        >
          <Input placeholder="Enter user email" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add User
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default UserForm;
