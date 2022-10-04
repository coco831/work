import React from 'react';
import './Index.scss';
import { Outlet } from 'react-router-dom';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Dropdown, Space } from 'antd';
const { Header, Content, Sider } = Layout;
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: '个人中心',
      },
      {
        key: '2',
        label: '退出登录',
      },
    ]}
  />
);
export default function index() {
  return (
    <Layout className="Index">
      <Header className="header">
        <h2>用户管理系统</h2>

        <Dropdown overlay={menu} arrow>
          <Space style={{ height: '26px', lineHeight: '26px' }}>
            管理员: admin <DownOutlined />
          </Space>
        </Dropdown>
      </Header>
      <Layout className="main">
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="content"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
