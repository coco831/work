import React from 'react';
import './Index.scss';
import { Outlet, useLocation } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import permissionList from '../../utils/permission';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Breadcrumb, Layout, Menu, Dropdown, Space } from 'antd';
const { Header, Content, Sider } = Layout;

export default function Index() {
  const dispatch = useDispatch();
  const location = useLocation();

  let defaultSelectedKey=location.pathname;
  let defaultOpenKey=defaultSelectedKey.match(/\/[^\/]+/)[0]


  const handleLogout = () => {
    console.log(123);
    dispatch({
      type: 'users/clearInfos',
    });
    setTimeout(() => {}, 1000);
    window.location.replace('/login');
  };
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: '个人中心',
        },
        {
          key: '2',
          label: <span onClick={handleLogout}>退出登录</span>,
        },
      ]}
    />
  );
  const infos = useSelector((state) => state.users.infos);
  const role = infos && infos.user.role;
  const name = infos && infos.user.name;

  let items2 = _.cloneDeep(permissionList);
  items2 = items2.filter((v) => {
    v.children = v.children.filter((v) => v.auths.includes(role));
    return v.auths.includes(role);
  });

  return (
    <Layout className="Index">
      <Header className="header">
        <h2>用户管理系统</h2>

        <Dropdown overlay={menu} arrow>
          <Space style={{ height: '26px', lineHeight: '26px' }}>
            {role}: {name} <DownOutlined />
          </Space>
        </Dropdown>
      </Header>
      <Layout className="main">
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={[defaultSelectedKey]}
            defaultOpenKeys={[defaultOpenKey]}
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
