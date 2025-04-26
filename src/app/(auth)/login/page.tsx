'use client';

import { Button, Form, Input, Typography, Divider } from 'antd';
import { GoogleOutlined, AppleOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;

export default function LoginPage() {
  const onFinish = (values) => {
    console.log('Login data:', values);
    // Gọi API hoặc NextAuth signIn ở đây
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }} className="bg-white">
      {/* Left side – hình minh họa */}
      <div
        style={{
          flex: 1,
          backgroundImage: 'url(images/questionnaire-bg.jpg)', // bạn cần đặt ảnh ở public/login-bg.png
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Right side – form */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 350 }}>
          <Title level={3}>Sign in to Salesai</Title>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please enter your email' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Input type="checkbox" /> Remember me
                </Form.Item>
                <Link href="#">Forgot Password?</Link>
              </div>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ backgroundColor: '#e44a00', borderColor: '#e44a00' }}
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>

          <Divider>Or login with</Divider>

          <Button icon={<GoogleOutlined />} block style={{ marginBottom: 10 }}>
            Google
          </Button>
          <Button icon={<AppleOutlined />} block>
            Apple
          </Button>

          <Text>
            Don’t have an account? <Link href="#">Sign Up now</Link>
          </Text>
        </div>
      </div>
    </div>
  );
}
