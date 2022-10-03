import React from 'react'
import './Login.scss'
import { Button, Form, Input, message } from 'antd'
import ParticlesBg from 'particles-bg'
import { login } from '../../api/users'
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const navigate= useNavigate();

  const onFinish = (values) => {
    console.log(values);
    login(values).then((res)=>{
      navigate('/');
      message.success('登录成功');
    }).catch((res)=>{
      
      message.error('登录失败');
    })
  }
  const onFinishFailed = () => {}

  return (
    <>
      <ParticlesBg num={1} type="polygon" bg={true} color="white" />
      <div className="Login">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              {
                required: true,
                message: '请输入邮箱地址',
              },
              {
                type: 'email',
                message: '请输入正确的邮箱'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: '密码不能为空!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}
