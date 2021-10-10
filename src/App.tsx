import React from 'react';
import { Layout, Menu} from 'antd';
import { CheckSquareOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

function App() {

  const { SubMenu } = Menu;
  const { Header, Content, Sider, Footer } = Layout;

  return <>
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
              <Menu.Item key="1"> <CheckSquareOutlined /> Viev tasks </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>©2021 Created by BandaPixels</Footer>
    </Layout>

  </>
}

export default App;
